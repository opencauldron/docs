---
title: Connected AI tools
description: Connect Claude Code, Claude Desktop, Cursor, or any MCP-capable AI tool to your studio — search your Library, read your brand kits, and generate images without leaving your editor
---

Cauldron speaks **MCP** (Model Context Protocol), the standard AI tools use to connect to outside services. Connect one and it can work inside your studio directly: search your [Library](/guides/library/), read your [brand kits](/guides/brands/), compare [models](/guides/models/), and generate images that land in your Library like any other creation.

Nothing changes about how the studio works. A connected tool acts **as you** — same brands, same permissions, same daily limit — it just does it from wherever you're already working.

## What this is good for

Once you're connected, you talk to your AI tool in plain language and it reaches into Cauldron for you:

- *"Find the hero shot from the summer campaign and upscale it."*
- *"What brands do I have in Cauldron, and what's in the Acme brand kit?"*
- *"Show me my last five generations."*
- *"Which of our models is best for a poster with readable text on it?"*
- *"Polish this prompt, then make four 16:9 versions for the Acme brand."*
- *"Cut the background out of the product shot I made yesterday."*

The results are real assets in your Library — they show up in the studio, in [Review](/guides/review/), and for your team, exactly like work you made in the composer.

## Create a key

Connecting takes one key, and you make it in the studio.

1. Open your [profile](/guides/profile/) — your avatar menu, or **Profile** in the sidebar.
2. Scroll to **Connected AI Tools**.
3. Type a name that tells you which tool and which machine it's for — *Claude Code on my laptop* — and click **Create key**.
4. **Copy the key now.** It starts with `oc_` and it's shown exactly once. After you leave the page, only the first few characters remain visible.

Three things worth knowing about a key:

| | |
|---|---|
| **It's yours** | Everything the connected tool does happens as you, with your permissions. Keys are personal — don't share one with a teammate, give them their own. |
| **It's pinned to one studio** | A key works only in the studio you were in when you created it. It cannot see another studio's brands or assets, even one you belong to. Work across two studios? Make a key in each. |
| **You can kill it anytime** | Click **Revoke** next to a key and it stops working immediately. |

## Connect Claude Code

Run this in your terminal, with your own key in place of `oc_…`:

```bash
claude mcp add --transport http cauldron https://studio.opencauldron.ai/api/mcp \
  --header "Authorization: Bearer oc_…"
```

Add `--scope user` if you want Cauldron available in every project rather than just the current one.

Then type `/mcp` inside Claude Code. You should see **cauldron** listed as connected, with its tools. Ask it something small to confirm — *"list my Cauldron brands"* — and you're done.

## Connect other AI tools

Any MCP-capable client works the same way. Cauldron is a **streamable HTTP** MCP server, so a client needs two things from you:

| Setting | Value |
|---|---|
| Server URL | `https://studio.opencauldron.ai/api/mcp` |
| Header | `Authorization: Bearer oc_…` |

Tools that take JSON configuration (Claude Desktop, Cursor, and most others) usually want a block shaped like this:

```json
{
  "mcpServers": {
    "cauldron": {
      "type": "http",
      "url": "https://studio.opencauldron.ai/api/mcp",
      "headers": { "Authorization": "Bearer oc_…" }
    }
  }
}
```

Check your tool's own documentation for where that file lives and what it calls each field — the URL and the header are the parts that come from Cauldron.

## What a connected tool can do

Thirteen tools come across the connection. You never call them by name — you describe what you want and your AI tool picks — but it helps to know the shape of what's available.

**Find things**

| Tool | What it does |
|---|---|
| `search` | Finds what you own: Library assets, uploaded references, collections, [brews](/guides/brews/), and LoRAs. |
| `get_recent_generations` | Your most recent creations, newest first — reaching back past today, not just the last 24 hours. |
| `show_generation` | Returns the actual image so your AI tool can *see* it, not just read a description of it. |
| `get_brew` | Looks up a saved brew by name or id — its model, prompt, and settings. |
| `get_context` | Orients the tool: who you are, which studio you're in, and which brand you were last working in. |

**Read your brands and models**

| Tool | What it does |
|---|---|
| `list_brands` | Every brand you can use here, with your role on each. |
| `get_brand` | One brand's full kit — prompt prefix and suffix, banned terms, palette, and anchors. |
| `list_models` | Which models are available to you, what each is good for, and what each costs. |
| `get_model_details` | The deeper read on one model: strengths, tradeoffs, and when to reach for it. |

**Make and change images**

| Tool | What it does |
|---|---|
| `generate_image` | Generates 1–4 images and saves them to your Library. Takes a prompt, and optionally a model, aspect ratio, and brand — when you name a brand, its kit applies exactly as it would in the composer. |
| `enhance_prompt` | Rewrites a rough prompt into a fuller, generation-ready one. It doesn't generate anything on its own. |
| `upscale_image` | Increases an image's resolution and detail. |
| `remove_background` | Cuts the subject out onto a transparent background. |

Upscale and Remove background both save a **new** image next to the original and never touch the source. If you want both on one image, **upscale first** — removing the background creates transparency, and upscaling would fill it back in with white. Ask for them the wrong way round and Cauldron says so rather than quietly ruining the cutout. Running the same one twice costs nothing extra either: you get the saved result back.

## What spends money

Four of the thirteen tools do real work that costs something: `generate_image`, `enhance_prompt`, `upscale_image`, and `remove_background`. They only run when your studio's billing is active. Everything else is a read and always works.

**Your AI tool's own permission prompt is the confirmation step.** When Claude Code (or Cursor, or anything else) asks *"allow generate_image?"*, that's your one chance to say no — Cauldron doesn't ask a second time. If you'd rather be asked every time, don't set these tools to always-allow in your client.

Generations made this way count against your [daily limit](/guides/usage-and-limits/) just like generations made in the studio, and they show up in your usage and cost totals.

## What isn't available over MCP

Two things stay in the studio on purpose:

- **Video generation.** Video runs as a long job you start and come back to. That doesn't fit a connected tool sitting and waiting for an answer, so make video in the studio — see [Creating video](/guides/creating-video/).
- **Reframe.** Reframe works across a batch and tells you when it's finished. "I'll let you know" means nothing outside the app, so run it from [the tools](/guides/image-editing/) instead.

## Your permissions come with you

A connected tool is not a way around anything:

- It only sees the studio the key was made in.
- It respects your role on each brand. View-only on a brand means it can read that brand's kit but can't create into it.
- It counts against your daily generation limit.
- Revoking the key, or leaving that studio, cuts it off immediately.

## Revoke a key

Open your profile, find the key under **Connected AI Tools**, and click **Revoke**. It stops working right away — no waiting, no restart. The row shows each key's prefix, when you created it, and when it was last used, so you can tell which one is which before you revoke.

Revoke a key if a laptop goes missing, if you pasted the key somewhere it shouldn't be, or if you're just done with that tool. Then create a fresh one and reconnect.

## Troubleshooting

| What you see | What's going on |
|---|---|
| Every tool fails with **401** or *unauthorized* | The key is wrong, revoked, or you're no longer a member of that studio. Create a new key and update the header. |
| *billing_inactive* on generate, enhance, upscale, or remove background | Your studio's billing isn't active. Reads keep working; the four spending tools don't. |
| A tool you know shipped isn't there | Clients cache the tool list from when they connected. Restart or reconnect your AI tool to pick up new ones. |
| *daily generation limit reached* | You've hit your limit for the day. It resets daily, and a studio admin can raise it — see [Usage & limits](/guides/usage-and-limits/). |
| *that model is async-only* or *video models are not supported* | `generate_image` returns the finished image right away, so it only works with models that generate immediately. Ask your tool to list models and pick another. |
| An image link stopped loading | Image links are short-lived on purpose. Ask to see it again and a fresh link is issued. |
| *You have view-only access to this brand* | Your role on that brand doesn't allow creating. See [Brands](/guides/brands/). |
| *That image no longer exists* | Either it's gone, or it lives in a different studio than the key. Keys never cross studios. |

## Related

- [Your profile](/guides/profile/) — where keys are created and revoked
- [The Library](/guides/library/) — where everything a connected tool makes lands
- [Brands](/guides/brands/) — brand kits, roles, and permissions
- [Usage & limits](/guides/usage-and-limits/) — the daily generation limit
- [Editing images](/guides/image-editing/) — Upscale, Remove background, and the rest, in the studio
