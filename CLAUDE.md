# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

_Last updated: 2026-05-04_

## What this is

User-facing documentation site for OpenCauldron, published at `docs.opencauldron.ai`. Astro + Starlight, content authored as MDX.

## Commands

Run from this directory (`docs/`). Uses npm, not pnpm.

```bash
npx astro dev      # local dev server
npx astro build    # static build to dist/
npx astro preview  # serve the built site
```

## Structure

- `src/content/docs/` — all documentation pages (MDX). Slugs in `astro.config.mjs` map directly to file paths here.
- `src/content.config.ts` — Starlight content collection config; rarely needs editing.
- `astro.config.mjs` — **the** sidebar source of truth. Adding a new page means adding both the MDX file under `src/content/docs/` and a `{ slug: '…' }` entry in the sidebar array.
- `src/components/` — overrides for Starlight components (e.g. `SiteTitle.astro`).
- `src/styles/starlight.css` — visual customization layered on Starlight's default theme.

## Conventions

- The `Reference` sidebar section is `autogenerate`d from `src/content/docs/reference/` — new files there appear automatically.
- Edit links point to `github.com/opencauldron/docs` (a separate public repo), not the monorepo path. Keep that in mind when authoring "edit this page" flows.
- The site redirects `/` → `/introduction/`. Don't put content at the root.
