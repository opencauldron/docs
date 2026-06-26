---
title: Installation
description: Get Cauldron running with Docker, develop on it as a contributor, or scaffold your own fork.
---

:::note
Most teams use the **hosted studio** at [studio.opencauldron.ai](/sign-up/) or a fully managed [Enterprise](/enterprise/) instance — no setup to run. This section is for technical teams who want to run their own copy. Not sure which path fits? Start with [Open source & self-hosting](/self-hosting/).
:::

There are three ways to run Cauldron yourself, depending on what you're trying to do.

| You want to… | Use |
|---|---|
| Run your own copy of Cauldron | **Docker self-host** (below) — the simplest self-hosted path |
| Contribute to OpenCauldron itself | [Contributor setup](#contributor-setup) |
| Build a custom studio on top of OpenCauldron | [Scaffold your own fork](#scaffold-your-own-fork) |

---

## Self-host with Docker

The recommended path for anyone running Cauldron as-is. No clone, no Node, no package manager — just Docker.

### Prerequisites

- [Docker](https://docker.com) and Docker Compose
- A [Google Cloud](https://console.cloud.google.com/apis/credentials) project with an OAuth 2.0 client ID (see [Setting up Google OAuth](/guides/api-keys/#google-oauth))
- API keys for whichever AI providers you want to enable (all optional — models without keys are hidden)

### Install

```bash
curl -O https://raw.githubusercontent.com/opencauldron/opencauldron/main/docker-compose.yml
curl -o .env https://raw.githubusercontent.com/opencauldron/opencauldron/main/.env.example
# Edit .env: set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WORKSPACE_NAME, ADMIN_EMAIL
docker compose up -d
open http://localhost:3000
```

That's the whole install. On first boot the container:

1. Auto-generates a persistent `NEXTAUTH_SECRET` and stores it in a named volume (so it survives upgrades).
2. Waits for Postgres to be ready, then applies all database migrations.
3. Bootstraps the admin workspace from `WORKSPACE_NAME` and `ADMIN_EMAIL` if both are set.
4. Starts the Next.js server.

Sign in with the Google account you put in `ADMIN_EMAIL` and you'll land on the dashboard as `owner`.

### Upgrading

```bash
docker compose pull && docker compose up -d
```

Migrations run automatically on container start. Your data, uploads, and the persisted auth secret all live in named volumes and survive image upgrades. See the [GHCR releases page](https://github.com/opencauldron/opencauldron/pkgs/container/opencauldron) for the changelog.

### What's bundled

The default `docker-compose.yml` ships:

- The Cauldron app (pulled from `ghcr.io/opencauldron/opencauldron:latest`, multi-arch)
- A Postgres 16 + pgvector container
- Named volumes for the database, uploaded media, and the auth secret

If you'd rather use [Neon](https://neon.tech) for the database or [Cloudflare R2](/guides/storage/) for storage, set the relevant variables in `.env` — the app auto-detects them. See [Configuration](/configuration/) for the full list.

---

## Contributor setup

For day-to-day work *on OpenCauldron itself*. HMR works, host tooling (psql, drizzle-kit studio, IDE plugins) connects directly to the DB, no rebuild loop.

### Prerequisites

- [Node.js 20+](https://nodejs.org) and [pnpm](https://pnpm.io)
- [Docker](https://docker.com) (for the local Postgres) — or any reachable Postgres with pgvector

### Install

```bash
git clone https://github.com/opencauldron/opencauldron
cd opencauldron
pnpm install
cp .env.example .env.local                       # then edit with your keys
docker compose -f docker-compose.dev.yml up -d   # local Postgres on :5432
pnpm exec drizzle-kit migrate                    # apply the SQL migrations
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To validate the production Docker path (entrypoint, migration runner, healthcheck) before opening a PR, uncomment the `app` service block at the bottom of `docker-compose.dev.yml` and re-run the same command.

See the [contributing guide](/contributing/) for code style, testing conventions, and how to add new AI providers.

---

## Scaffold your own fork

If you want to build a custom studio *on top of* OpenCauldron — your own branding, your own features, your own deploy — clone the repo and run the setup wizard:

```bash
git clone https://github.com/opencauldron/opencauldron.git my-studio
cd my-studio
pnpm install
pnpm setup
```

This is **not** the right path for running Cauldron as-is. Use Docker for that. The wizard is for developers who want to take the codebase, modify it, and ship their own version.

The wizard walks you through database, storage, and AI provider setup, then writes a configured `.env.local`. It does not clone, install, or detach git history — those are your call. To start from a clean slate after cloning: `rm -rf .git && git init`.

See the [Setup Wizard reference](/setup-wizard/) for the full walkthrough.

---

## Next steps

- [Configuration](/configuration/) — All environment variables and options
- [API Keys](/guides/api-keys/) — How to get keys for each AI provider
- [Storage](/guides/storage/) — Configure local filesystem or Cloudflare R2
- [Database](/guides/database/) — Migrations, schema, and Neon vs Postgres
