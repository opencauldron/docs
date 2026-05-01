---
title: Deploying
description: Deploy OpenCauldron to production using Docker Compose, a standalone Docker container, or Vercel.
---

This guide covers three production deployment paths. For local development setup, see [Installation](/installation/).

---

## Before you start

Every deployment needs the same core environment variables regardless of path:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | Full public URL of your deployment |
| `NEXTAUTH_SECRET` | Random secret. Auto-generated for Docker Compose; generate manually for the other paths with `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

See [Configuration](/configuration/) for the full variable reference, including AI provider keys and storage options.

### Google OAuth setup

Update your Google OAuth credentials to include your production domain:

1. Go to [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) and open your OAuth client.
2. Add your production URL to **Authorized JavaScript origins** (e.g. `https://your-domain.com`).
3. Add the production callback URL to **Authorized redirect URIs**: `https://your-domain.com/api/auth/callback/google`.

---

## Auth middleware

Every route in OpenCauldron requires authentication except three:

- `/api/auth/*` — NextAuth sign-in and callback endpoints
- `/api/uploads/*` — Local file serving for the local storage backend
- `/api/health` — Liveness probe consumed by the Docker healthcheck and external orchestrators

Unauthenticated requests to any other route are redirected to `/login`. This applies to the API and to all page routes.

To restrict sign-in to a single email domain, set:

```bash
ALLOWED_EMAIL_DOMAIN="yourcompany.com"
```

Leave this unset to allow any Google account to sign in.

---

## Docker Compose

The simplest production path. The published `docker-compose.yml` pulls the multi-arch `ghcr.io/opencauldron/opencauldron:latest` image alongside a Postgres 16 + pgvector container, and the entrypoint handles every first-boot concern automatically.

### What the entrypoint does on first boot

1. Generates a persistent `NEXTAUTH_SECRET` if one isn't set, and writes it to a named volume so it survives upgrades.
2. Waits for Postgres to become reachable.
3. Applies all SQL migrations using the bundled migration runner (no `drizzle-kit` needed in the runtime image).
4. Bootstraps the admin workspace from `WORKSPACE_NAME` and `ADMIN_EMAIL` if both are set and no workspace exists yet. Idempotent — re-running with the same values is a no-op.
5. Starts the Next.js server.

If `WORKSPACE_NAME` or `ADMIN_EMAIL` is missing on first boot, the container exits with code 2 and prints actionable instructions. Nothing partial is written to the database.

### Install

```bash
curl -O https://raw.githubusercontent.com/opencauldron/opencauldron/main/docker-compose.yml
curl -o .env https://raw.githubusercontent.com/opencauldron/opencauldron/main/.env.example
# Edit .env: set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WORKSPACE_NAME, ADMIN_EMAIL
docker compose up -d
```

The compose file reads `.env` (not `.env.local`). Set at minimum:

```bash
NEXTAUTH_URL="https://your-domain.com"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
WORKSPACE_NAME="My Studio"
ADMIN_EMAIL="admin@yourdomain.com"
```

Everything else has sensible defaults — `DATABASE_URL` points to the bundled `db` service, `NEXTAUTH_SECRET` is auto-generated, `STORAGE_PROVIDER` defaults to local with a mounted `uploads` volume.

### Health check

The app container ships a Docker `HEALTHCHECK` that hits `/api/health`. It returns `{ ok: true, version }` when the database is reachable and `{ ok: false }` otherwise. Errors are logged server-side; the public response never leaks connection details.

```bash
docker compose ps           # shows healthy/unhealthy status
curl http://localhost:3000/api/health
```

### Persistent storage

The compose file defines three named volumes:

- `pgdata` — Postgres data directory
- `uploads` — mounted at `/app/uploads`, persists locally stored media
- `app-state` — mounted at `/app/.state`, holds the auto-generated auth secret

As long as you don't remove these volumes, your data and identity survive upgrades and restarts.

### Upgrading

```bash
docker compose pull && docker compose up -d
```

The new image's entrypoint applies any new migrations on start. No manual `db:migrate` step is needed. The auto-generated `NEXTAUTH_SECRET` is reused (same volume), so existing sessions continue to work.

### Custom port

If port 3000 is already taken on the host, set `APP_PORT=8080` (or any free port) in `.env` before `docker compose up -d`. The app inside the container always listens on 3000; only the host mapping changes.

---

## Docker (standalone container)

Use this path when you want to manage the database externally (Neon, Supabase, RDS, or any hosted Postgres with pgvector) and run only the app container — typically behind your own reverse proxy or orchestrator (Kubernetes, Nomad, ECS, Fly.io).

### How the image is built

The `Dockerfile` uses a three-stage build:

1. **deps** — installs dependencies with `pnpm install --frozen-lockfile`
2. **builder** — runs `pnpm run build`, which produces a Next.js standalone output at `.next/standalone`
3. **runner** — copies only the standalone bundle, the migration runner, the bootstrap runner, the entrypoint script, and the `drizzle/` migrations directory into a slim image

The runtime image runs as the non-root `node` user (uid 1000) and is ~320 MB uncompressed.

### Running the container

```bash
docker run -d \
  -p 3000:3000 \
  --env-file .env \
  -v opencauldron-state:/app/.state \
  -v opencauldron-uploads:/app/uploads \
  ghcr.io/opencauldron/opencauldron:latest
```

The two volumes are important:

- `/app/.state` — holds the auto-generated `NEXTAUTH_SECRET`. Without a persistent volume here, every restart invalidates all sessions.
- `/app/uploads` — only needed if you use `STORAGE_PROVIDER=local`. For Cloudflare R2, omit this volume.

Or pass variables individually:

```bash
docker run -d \
  -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:pass@host/db?sslmode=require" \
  -e NEXTAUTH_URL="https://your-domain.com" \
  -e NEXTAUTH_SECRET="your-secret-or-leave-empty-for-auto" \
  -e GOOGLE_CLIENT_ID="your-client-id" \
  -e GOOGLE_CLIENT_SECRET="your-client-secret" \
  -e STORAGE_PROVIDER="r2" \
  -e R2_ACCOUNT_ID="your-account-id" \
  -e R2_ACCESS_KEY_ID="your-access-key" \
  -e R2_SECRET_ACCESS_KEY="your-secret-key" \
  -e R2_BUCKET_NAME="cauldron" \
  -e R2_PUBLIC_URL="https://your-bucket.your-domain.com" \
  -v opencauldron-state:/app/.state \
  ghcr.io/opencauldron/opencauldron:latest
```

The app listens on port 3000. Map it to whichever port your reverse proxy expects.

### Database and migrations

Provide `DATABASE_URL` pointing to your external Postgres instance. Migrations run automatically when the container starts — the same entrypoint as the Compose path. No separate `db:migrate` step is required.

The database must have the `vector` extension available (used by migration `0016`). Most managed Postgres providers (Neon, Supabase, RDS with `rds.force_ssl`) include pgvector by default; check your provider's docs if you're unsure.

### Storage

The local filesystem backend works with standalone containers only when `/app/uploads` is mounted as a persistent volume — otherwise written files disappear with the container. For most cloud deployments without Compose, use R2:

```bash
STORAGE_PROVIDER="r2"
```

See the [Storage guide](/guides/storage/) for full R2 configuration.

---

## Vercel

Vercel is the easiest path if you don't want to manage infrastructure. The app deploys as a serverless Next.js application.

### Requirements

Before deploying to Vercel you need:

- A [Neon](https://neon.tech) database (or another serverless-compatible Postgres with pgvector)
- A [Cloudflare R2](https://developers.cloudflare.com/r2/) bucket with public access enabled

Both are required. Read on for why.

### Why Neon is required

OpenCauldron auto-detects the database driver at startup. If `DATABASE_URL` contains `neon.tech` or `neon.db`, it uses the `@neondatabase/serverless` HTTP driver, which is compatible with Vercel's edge and serverless runtime. Standard `pg` connections use long-lived TCP connections that don't work well in serverless environments. Use a Neon connection string for Vercel deployments.

### Why R2 is required

Vercel's serverless functions have an ephemeral filesystem — any files written to disk disappear when the function exits. The local storage backend writes to disk and won't work on Vercel. Set `STORAGE_PROVIDER="r2"` and configure your R2 credentials.

Additionally, image-to-video generation requires a publicly accessible URL for the reference image. R2 with a public bucket satisfies this requirement; local storage doesn't.

### Deploy

1. Push your fork to GitHub.
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Add environment variables in **Settings > Environment Variables**.

Set all required variables plus:

```bash
NEXTAUTH_URL="https://your-project.vercel.app"   # or your custom domain
STORAGE_PROVIDER="r2"
```

Vercel automatically runs `pnpm run build` during deployment. No extra build command is needed.

### Environment variables on Vercel

Add every variable from `.env.example` that applies to your deployment. Key ones to double-check:

| Variable | Value for Vercel |
|----------|-----------------|
| `DATABASE_URL` | Neon connection string (must contain `neon.tech`) |
| `NEXTAUTH_URL` | Your production URL — must match the deployed domain exactly |
| `NEXTAUTH_SECRET` | A real secret value — Vercel doesn't have the persistent volume that Docker uses for auto-generation |
| `STORAGE_PROVIDER` | `r2` |
| `R2_PUBLIC_URL` | Public base URL for your R2 bucket |

### Running migrations on Vercel

Vercel doesn't run migrations automatically. Run them from your local machine against your Neon database before or after the first deploy:

```bash
DATABASE_URL="postgresql://..." pnpm exec drizzle-kit migrate
```

### Custom domain

After deploying, update `NEXTAUTH_URL` in Vercel's environment variables to match your custom domain, and update the **Authorized JavaScript origins** and **Authorized redirect URIs** in your Google OAuth credentials to include the new domain.

---

## Related

- [Configuration](/configuration/) — Full environment variable reference
- [Storage](/guides/storage/) — R2 setup and storage backend details
- [API Keys](/guides/api-keys/) — Configure AI provider keys
