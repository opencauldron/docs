---
title: Styles & LoRAs
description: Browse and favorite add-on styles, then stack them in the composer to push a look, character, or concept
---

A style (also called a LoRA) is an add-on you apply on top of a model to push a generation toward a specific look, character, or concept. Pick one for a painterly finish, a recurring character, a product mockup style, or any other recognizable treatment. You browse styles, favorite the ones you like, and add them in the composer when you [create images](/guides/creating-images/).

Styles depend on the model. Only styles that work with the model you've chosen show up in the composer, so you can't add one that won't apply.

## Browse styles

Open **LoRAs** in the sidebar to browse the catalog.

- **Search** — type to find styles by name. Results update as you type.
- **Base model** — filter to styles built for a given model family. A green dot marks the families you can generate with today.
- **Sort** — order results by **Most Downloaded**, **Highest Rated**, or **Newest**.
- **All** / **Favorites** — switch between every result and just the ones you've saved.

Each result is a card with a preview image or short clip, the name, and how many people have used and liked it. Scroll to the bottom and select **Load more** to pull in the next page.

If your studio admin has enabled mature content, you'll see an optional toggle.

### Ready to generate vs. browse only

Not every style can be used in the composer yet. Cards carry one of two badges:

| Badge | What it means |
|---|---|
| **Ready to generate** | You can add this style in the composer right now |
| **Browse only** | You can preview and favorite it, but it isn't available for generation yet |

You can favorite a **Browse only** style to keep it on hand for when support arrives.

### View a style's details

Select any card to open its detail view. The preview gallery is on the left; if there's more than one image or clip, step through them with the arrows or the thumbnail strip below. Silent preview clips loop on their own.

The right side shows:

- The name and who made it
- Use and like counts
- The base model and file details
- **Trigger Words** — keywords the style responds to (more on these below)
- **Tags** describing the look

## Favorite the styles you use

Select the heart on any card to save a style. Favorites are tied to your account, so they're ready in the composer without searching again. In a style's detail view, the action button reads **Favorite**, and switches to **Favorited** once it's saved.

To see only your saved styles, switch to the **Favorites** view. A count next to it shows how many you have. To remove one, select the heart again on the card or in the detail view.

## Add styles in the composer

When you [create images](/guides/creating-images/) with a model that supports styles, a **User LoRAs** section appears in the composer. Models that don't support styles don't show it.

1. Expand the **User LoRAs** section.
2. Use the **Browse** tab to search, or the **Favorites** tab to pull from your saved styles.
3. Hover a card and select **Add**.

You can stack up to five styles on one generation. The badge on the section header tracks the count (for example, `2/5`). When you reach the limit, the **Add** button reads **Limit reached** until you remove one.

### Adjust how strongly each style applies

Added styles appear in an **Active LoRAs** list. Each one has its own strength slider, running from 0 to 4 and defaulting to 1.0:

- Lower values blend the style in lightly.
- 1.0 applies it at full strength.
- Higher values make its effect more dominant.

Select the X next to a style to remove it from the generation.

### Trigger words

Some styles respond to specific keywords, shown as **Trigger Words** badges under the style's name in the **Active LoRAs** list. Include these in your prompt — without them, the style's effect can be weak or missing. The badges are there so you know which words to add as you write.

## Styles on a workflow

A **Workflow** is a tuned generation pipeline your studio has enabled — text-to-image, image edit, multi-reference edit, and others. Each one has its own page, and each ships with a style stack already assembled for it.

On a workflow's page, that stack is yours to shape before you generate:

- Reorder the styles to change which one takes priority.
- Drag a strength slider to dial one up or down.
- Remove one you don't want.
- Click **Add LoRA** to open the catalog and add any style compatible with that workflow.
- Click **Reset** to put the workflow's shipped stack back.

Sampler, steps, guidance, and the rest sit under a collapsed **Advanced settings** section that starts from the workflow's tuned defaults and shows how many settings you've changed, with its own **Reset to defaults**.

Workflows are enabled per studio from a central registry, so your studio only sees the ones an owner or admin has added on the **Workflows** page. A new studio starts with none — ask your administrator to add them. Studio operators can also change a workflow's default style stack and default settings centrally, and new sessions pick those changes up right away.

## Set a default style for a brand

A brand can carry a default style so its work stays consistent. A brand Manager sets this in the brand kit, and it applies to generations made under that brand. For how brand kits work, see [Brands](/guides/brands/).

## Save a style setup as a Brew

Once you have a model, a prompt, and a stack of styles you like, save the whole setup as a reusable recipe. See [Brews](/guides/brews/) to keep a working combination and reuse it later.
