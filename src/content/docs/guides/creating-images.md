---
title: Creating images
description: Write a prompt, let Auto pick the right model, add references, and generate on-brand images you can reuse
---

The image studio turns a written prompt into finished images. You pick a brand, describe what you want, and generate. By default the **Auto** model picker chooses the best model for the job, so you can start without knowing anything about models.

This page walks the whole flow. For deeper topics, see [Choosing a model](/guides/models/), [Writing better prompts](/guides/prompts/), and [Generation settings](/guides/parameters/).

## Pick your brand

The brand selector sits at the top of the composer. The brand you pick decides which [brand](/guides/brands/) the images belong to and which brand kit is applied.

Every brand has a kit — a prompt prefix and suffix, banned terms, default styles, and anchor references. When a brand with a kit is active, a panel shows what it adds, marked **applies on submit**. The kit is applied automatically. To generate this batch without it, turn on the **Override** toggle in that panel.

If you are working alone, the **Personal** brand is the default and carries no kit.

## Write your prompt

Type what you want in the prompt box. Be specific about subject, setting, mood, and composition. See [Writing better prompts](/guides/prompts/) for what works.

Two helpers sit at the bottom of the prompt box:

- **Enhance** rewrites your prompt into a richer, more detailed version (keyboard shortcut shown in the tooltip). After it runs, an **Undo** chip appears for a few seconds so you can revert.
- **Dictate** — the microphone — lets you speak your prompt instead of typing. Tap the mic, talk, and the text is inserted for you. It biases toward your active brand and model names so jargon comes back spelled correctly.

A character counter shows in the corner.

## Let Auto pick a model, or choose your own

By default the model is set to **Auto**, which reads "AI picks what's best" and resolves to the right model when you generate. You don't have to touch it.

To choose a model yourself, click the model row to open the browser. Models are listed one row per version, each with capability chips:

| Chip | Meaning |
|---|---|
| **References** | Accepts reference images as input |
| **Fast** | Quicker, lower-cost renders |
| **LoRA** | Supports added styles |

Filter by provider, by capability, or by **Best for** (the kind of result a model is suited to), or search by name. Pick a model to pin it; the row then shows its name and per-image cost. To return to **Auto**, click the **Auto** link above the model row, or pick the **Auto** row in the browser.

For a fuller breakdown of what each model does, see [Choosing a model](/guides/models/).

## Add reference images (optional)

Reference images guide the look of a result — match a style, a subject, or a vibe. Click **Add reference** to open the picker. You can:

- **Upload** a file or drop one into the grid
- Browse **History** — your recent generations
- Browse **Gallery** — images across your team
- Browse **Uploads** — files you've added

Search within any source, select one or more, and click **Done**. Selected references show as a removable thumbnail strip above the button. Most models accept up to four references. To learn more, see [References](/guides/references/).

To change a specific part of an existing image rather than guide a new one, use [Editing images](/guides/image-editing/) instead.

## Set aspect ratio and count

- **Aspect ratio** — choose from the grid below the prompt (square, wide, tall, and any others the model supports).
- **Images** — use the stepper to make 1 to 4 images per run. The estimated cost updates as you change the count.

## Generation settings

Open **Advanced settings** below the prompt for more control. What appears depends on the active model and can include style, negative prompt, resolution, seed, guidance, steps, and output format. Everything here is optional — defaults are sensible. See [Generation settings](/guides/parameters/) for what each control does.

If your studio admin has enabled mature content, you'll see an optional toggle.

## Generate and work with results

Click **Generate** (or **Generate 4 images** when the count is higher) to start. Results stream into the feed as they finish. Click any result to open it full size.

From the open result you can:

- **Download** the image
- **Regenerate** with the same settings
- Run quick tools — **Upscale**, **Remove BG**, **Vectorize**, or **Edit**
- Tag it with a brand, or assign it to a [campaign](/guides/campaigns/)
- Set it as a reference for your next prompt, to build on the result

From any feed tile you can also download it or reuse it as a reference without opening it.

## Advanced and multi-step recipes

Some results need more than a single step — stacking a style on a base model, guiding with several references at once, or running a multi-step recipe. These appear as added options and workflows right in the composer when the model you've chosen supports them. To save a model, prompt, and settings you want to reuse, see [Brews](/guides/brews/); for added styles, see [Styles & LoRAs](/guides/loras/).
