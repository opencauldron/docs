---
title: API keys
description: What Cauldron API keys are for — connecting outside AI tools to your Studio — and why you never supply keys for the AI models.
---

Cauldron has one kind of key: a personal API key that lets an outside AI tool — Claude Code, Cursor, or anything else that speaks MCP — work inside your Studio on your behalf.

You don't need one to use Cauldron. Everything in the studio works signed in through the browser.

:::note
**You never supply keys for the AI models.** Cauldron connects to the image and video models for you — choosing a model is all you do. See [Models](/guides/models/).
:::

## Creating and revoking keys

Keys live on your [Profile](/guides/profile/), under **Connected AI Tools**. You name a key, copy it once, and revoke it whenever you want.

[Connected AI tools](/guides/connected-ai-tools/) walks through the whole thing — creating a key, what it can and can't reach, and connecting each tool.

## What a key can reach

A key is personal and pinned to one Studio: the one you were in when you created it. It acts as you — same brands, same role, same limits — and can't reach anything you can't reach yourself.

Access follows your membership. Leave a Studio, or have someone remove you, and every key you made for it stops working immediately.

Treat a key like a password. Give each tool its own so you can revoke one without disturbing the rest, and keep keys out of shared documents, tickets, and repositories.

## Related

- [Connected AI tools](/guides/connected-ai-tools/) — Create a key and connect Claude Code, Cursor, and others
- [Profile](/guides/profile/) — Where your keys live
- [Usage and limits](/guides/usage-and-limits/) — The limits a key inherits from you
