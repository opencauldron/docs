---
title: Brews
description: Save a look as a reusable recipe — model, settings, and prompt — then re-run it or share it with your team
---

A brew is a saved recipe for a result you like. It captures the model, the settings (aspect ratio, style, and the rest), any styles or LoRAs you stacked, and — if you choose — the prompt. Load a brew and the composer rebuilds the whole setup in one click, so you reproduce a look without rebuilding it by hand.

Open **Brews** in the sidebar. The page has two tabs:

- **My Brews** — recipes you saved or cloned.
- **Explore** — brews shared with your brand or published for everyone in your studio.

## Save a brew

You save a brew from a result you already created.

When you finish creating an image, click **Save as Brew** below the result. You can also save from a result in [Gallery](/guides/gallery/) — open the image and choose the save-as-brew option. Either way, the same dialog opens, pre-filled with the model and settings from that result.

In the dialog:

1. Enter a **Name** (required) — for example, "Anime Portrait Setup".
2. Add a **Description** (optional) to remind yourself what the brew is for.
3. Set the **Include prompt text** toggle:
   - **On** — the prompt is saved and pre-filled when you load the brew.
   - **Off** — only the model and settings are saved. The dialog shows "Config only — no prompt", and you write a fresh prompt each time.
4. Click **Save Brew**.

The brew appears under **My Brews**.

## Use a brew

On the **My Brews** tab, each card shows a preview image, the brew name, the model, the prompt (if saved), and how many times the brew has been used.

Click **Use** on a card to load the brew into the composer. It restores:

- The model (or stays on **Auto** if that model is not available to you)
- The prompt, if the brew was saved with one
- All settings — aspect ratio, style, and the rest
- Any styles or LoRAs and their weights — see [Styles & LoRAs](/guides/loras/)
- Any reference image that was active when the brew was saved

A confirmation appears once the brew loads. From there, create as-is, or change one thing and create a variation. See [Creating images](/guides/creating-images/) for the full composer.

## Edit or delete a brew

Each card on **My Brews** has two more controls:

| Control | What it does |
|---|---|
| Edit (pencil icon) | Opens a dialog to change the **Name** and **Description** only |
| Delete (trash icon) | Removes the brew after you confirm |

Editing changes the name and description, not the saved model, settings, or prompt. To change the recipe itself, use the brew, adjust the composer, and save a new brew.

## Share a brew

Click the share control on a brew card to open the **Share Brew** dialog and choose who can see and use it.

| Visibility | Who can see it |
|---|---|
| **Private** | Only you |
| **Brand** | Everyone on this brand can use it |
| **Public** | Listed on the **Explore** tab for everyone in your studio |

When you set a brew to **Brand** or **Public**, the dialog gives you a share link you can copy. Two limits apply:

- A brew needs a preview image before you can publish it. If a brew has none, use it to create an image first, then share.
- Video brews can't be published yet.

## Explore and clone

The **Explore** tab lists brews shared across your studio. Search by name, filter by model or creator, and sort by **Recent** or **Most Used**. Click a brew to open its detail page, where you can see the prompt, settings, and any styles or LoRAs it uses.

To make a shared brew your own, open it and click **Clone to My Brews**. The copy lands under **My Brews**, where you can rename it, share it, or use it like any brew you saved yourself. Cloned brews keep an attribution line showing whose recipe they came from.

## Tips

- **Build a style template** — save a brew with the prompt toggled off. Each time you load it, you write a new subject while keeping the same model, settings, and style stack.
- **Iterate fast** — load a brew, change one setting, create, and save the variation as a new brew under a different name.
- **Reuse a complex stack** — a brew keeps every style or LoRA and its weight, so it's the quickest way to rebuild a multi-style setup.
- **Keep a reference series consistent** — save the brew with your reference image loaded, and the reference comes back every time you load or share it.
