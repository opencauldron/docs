---
title: Contributing to OpenCauldron
description: An overview of how to contribute to OpenCauldron across its public repositories.
---

OpenCauldron is an open-source project maintained across a handful of public repositories. Contributions of all kinds are welcome — whether you are fixing a bug, adding a new AI provider, or improving documentation.

This section covers everything you need to get started as a contributor.

---

## The repos

| Repo | What it is | Where to start |
|------|-----------|----------------|
| [opencauldron/opencauldron](https://github.com/opencauldron/opencauldron) | The main Next.js application (also home to the `pnpm setup` fork wizard) | [Development setup](/contributing/development-setup) |
| [opencauldron/docs](https://github.com/opencauldron/docs) | This docs site (Astro + Starlight) | [Contributing to docs](/contributing/contributing-to-docs) |
| [opencauldron/opencauldron.ai](https://github.com/opencauldron/opencauldron.ai) | The marketing site at opencauldron.ai (Astro + Tailwind) | — |

Each repo has its own setup instructions. Most contributors will spend their time in the main app repo.

---

## Ways to contribute

### Add an AI provider

The most common code contribution is adding support for a new AI image or video model. The provider system is deliberately small — a new provider is a single TypeScript file implementing one interface, plus a registry entry. See [Adding a Provider](/guides/adding-providers) for the full walkthrough.

### Fix a bug or implement a feature

Browse open issues on [GitHub](https://github.com/opencauldron/opencauldron/issues). Issues tagged `good first issue` are a good starting point for new contributors. Comment on an issue before starting work on it — this avoids duplicate effort.

### Improve documentation

If you find a doc that is wrong, incomplete, or hard to follow, the fix belongs in the website repo. See [Contributing to Docs](/contributing/contributing-to-docs) for how the site is structured and how to preview changes locally.

### Improve the setup wizard

The fork-setup wizard lives at `scripts/setup.mjs` in the main app repo. Adding a new provider prompt or improving the wizard is a normal main-repo PR — see [Development Setup](/contributing/development-setup) to get the repo running locally.

### Report a bug or request a feature

See [Issues and Feature Requests](/contributing/issues-and-requests) for how to write a useful bug report and how feature requests are evaluated.

---

## General process

1. **Find or open an issue** — All work should be linked to a GitHub issue. This ensures intent is clear before code is written.
2. **Fork and branch** — Fork the relevant repo and create a branch from `main`. Use descriptive branch names: `fix/video-polling-timeout`, `feat/add-stability-provider`.
3. **Make your changes** — Follow the code style and linting rules described in [Code Style and PR Guidelines](/contributing/code-style).
4. **Verify** — Run `bun run lint` and `bun run build` before pushing. Both must pass.
5. **Open a pull request** — Target `main`. Fill in the PR description with what changed and why.

---

## Related

- [Adding a Provider](/guides/adding-providers) — Step-by-step guide for new AI provider integrations
- [Development Setup](/contributing/development-setup) — Get the main app running locally for contribution
- [Code Style and PR Guidelines](/contributing/code-style) — Linting, formatting, and PR conventions
