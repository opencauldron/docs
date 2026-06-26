---
title: Setup Wizard
description: Bootstrap your own fork of OpenCauldron with pnpm setup.
---

OpenCauldron ships with an interactive setup wizard for **forkers** — developers who want to take the codebase, customize it, and ship their own version. The wizard prompts for database, storage, and AI provider settings, then writes a configured `.env.local` for you.

:::caution
The wizard is **not** the right path if you just want to run Cauldron for your team. For that, use the [Docker self-host install](/installation/#self-host-with-docker) — it's faster, doesn't require Node, and ships pre-built multi-arch images.

Use the wizard when you want to *modify* OpenCauldron and run your own version.
:::

## Usage

After cloning the repo, run `pnpm setup` from the project root:

```bash
git clone https://github.com/opencauldron/opencauldron.git my-studio
cd my-studio
pnpm install
pnpm setup
```

The wizard reads `.env.example`, asks you a handful of questions, and writes the result to `.env.local`. It does **not** clone anything, install dependencies, or run `git init` — those are your call. (If you want to detach from OpenCauldron's git history before iterating: `rm -rf .git && git init`.)

If `.env.local` already exists, the wizard asks before overwriting it.

---

## Wizard steps

### 1. Studio name (optional)

```
◆  Studio name (used for branding, optional)
│  Acme Studio
```

If provided, the studio name is saved as `NEXT_PUBLIC_ORG_NAME` in your `.env.local` so the UI displays it. Leave blank to skip.

### 2. Database

```
◆  Database
│  ● Local Postgres   (docker compose up db -d)
│  ○ Neon             (serverless Postgres)
│  ○ Skip — I'll set DATABASE_URL myself
```

- **Local Postgres** — Sets `DATABASE_URL` to `postgresql://cauldron:cauldron@localhost:5432/cauldron`, matching the included `docker-compose.dev.yml`.
- **Neon** — Prompts for your Neon connection string (must include `neon.tech` in the URL).
- **Skip** — Leaves the value from `.env.example` as-is. Use this if you're pointing at Supabase, RDS, or any other Postgres.

### 3. Storage

```
◆  Storage
│  ● Local filesystem   (saves to ./uploads/)
│  ○ Cloudflare R2      (production storage)
```

- **Local filesystem** — Generated media is saved to the `uploads/` directory. Good for development.
- **Cloudflare R2** — Prompts for your R2 Account ID, Access Key ID, Secret Access Key, and Bucket Name. Required for image-to-video workflows where AI providers need a publicly accessible URL.

### 4. AI model providers

The wizard displays all available providers grouped by type, then presents a multi-select. Pick the providers you want to enable; the wizard prompts for each selected key (entered as a password field). You can skip this step entirely and add keys to `.env.local` later.

**Image Models**
| Provider | Key | Models |
|---|---|---|
| Google Gemini | `GEMINI_API_KEY` | Imagen 4, Flash, Flash Lite |
| xAI Grok | `XAI_API_KEY` | Grok Imagine, Grok Pro |
| Black Forest Labs | `BFL_API_KEY` | Flux Pro 1.1, Flux Dev |
| Ideogram | `IDEOGRAM_API_KEY` | Ideogram 3 |
| Recraft | `RECRAFT_API_KEY` | Recraft V3, Recraft 20B |

**Video Models**
| Provider | Key | Models |
|---|---|---|
| Google Veo 3 | `GEMINI_API_KEY` | (shares Gemini key) |
| Runway | `RUNWAY_API_KEY` | Gen-4 Turbo |
| Kling (fal.ai) | `FAL_KEY` | Kling 2.1 |
| MiniMax | `MINIMAX_API_KEY` | Hailuo 2.3 |
| Luma AI | `LUMA_API_KEY` | Ray 2 |

**Tools**
| Provider | Key | Purpose |
|---|---|---|
| Mistral | `MISTRAL_API_KEY` | Prompt enhancement |

:::note
Google Veo 3 shares the same `GEMINI_API_KEY` as the Gemini image models — selecting Gemini automatically enables Veo 3.
:::

---

## What the wizard writes

When you finish, the wizard writes a single file: `.env.local`. It is generated from `.env.example` with your choices substituted in. A random `NEXTAUTH_SECRET` is generated automatically.

The wizard prints a configuration summary and the next commands to run.

---

## Next steps after setup

```bash
docker compose -f docker-compose.dev.yml up -d   # start local Postgres (if you chose it)
pnpm exec drizzle-kit migrate                    # apply schema migrations
pnpm dev                                         # start dev server
```

Open [http://localhost:3000](http://localhost:3000) to access your studio.

If you skipped the AI provider step, add API keys to `.env.local` before generating. See the [API Keys guide](/guides/api-keys/) for instructions on obtaining each key.

---

## Related

- [Installation](/installation/) — Manual setup walkthrough
- [Configuration](/configuration/) — Full environment variable reference
- [API Keys](/guides/api-keys/) — Get keys for every AI provider
