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

- **Cauldron is a hosted product, not open source.** Do not add self-hosting, installation, environment-variable, or contributing content, and do not restore the GitHub social link or the "edit this page" affordance — both advertise a public repo to contribute to. The product is **Cauldron** in prose; "OpenCauldron" belongs only in real domains (`studio.opencauldron.ai`), and in the changelog's historical rename entries.
- There is no `Reference` sidebar section. It was `autogenerate`d from `src/content/docs/reference/`, which held an environment-variable page for an instance customers don't run; both are gone.
- The site redirects removed pages rather than 404ing them — see the `redirects` map in `astro.config.mjs`. If you delete a page that was ever public, add a redirect.
- The site redirects `/` → `/introduction/`. Don't put content at the root.
