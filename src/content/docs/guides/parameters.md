---
title: Generation settings
description: A plain-language tour of the generation settings that shape your images and video — and why you rarely need them
---

Generation settings shape what comes back: the shape of the frame, how many results you get, and how closely the output follows your words. You rarely have to touch them. The **Auto** model picker chooses a model for you, and every setting starts on a sensible default. Open them when you want more control.

## Where the settings live

A few settings sit right in the composer, above the **Generate** button:

- **Aspect Ratio** — the shape of the frame.
- **Images** — how many results to make in one run (1 to 4).

Everything else lives behind **Advanced settings**, a panel that stays collapsed until you open it. The label on the right shows the model the settings apply to, or **Select a model** if you haven't picked one.

The panel adapts to the model you're using. A model that doesn't support a setting won't show it, so you only see controls that do something. See [Choosing a model](/guides/models/) for how the **Auto** picker works and how to pin a specific model.

## Aspect Ratio

The shape of the frame — square, landscape, or portrait. Pick a tile to set it. The options change with the model, but the common ones are:

| Ratio | Use it for |
|---|---|
| 1:1 | Social posts, profile images |
| 16:9 | Landscape, slides, banners |
| 9:16 | Stories, Reels, mobile screens |
| 4:3 | Traditional photo, print |
| 3:4 | Portrait photography, posters |

Some models offer more, like 2:1 or 3:2. The tiles show a small preview of each shape so you can scan them quickly.

## Images

The **Images** stepper sets how many results to make in one run, from 1 to 4. Use the **+** and **-** buttons to change the count. More images mean more options to choose from in a single run.

The **Generate** button updates to match — it reads **Generate 3 images** when the count is above one.

## Style

Some models apply a built-in look to the output — realistic, illustration, and others, depending on the model. When the model supports styles, a **Style** menu appears in **Advanced settings**. Choose one, or leave it unset to let the model decide.

## Seed

A **Seed** is a number that fixes the random part of generation. Leave it blank for a fresh result every time. Set a seed to get repeatable output:

- The **same seed** with the **same prompt and settings** gives you the same result again.
- Keep the seed fixed and change the prompt slightly to iterate on one composition.

The field reads **Random** when it's empty.

## Guidance

**Guidance** controls how closely the output follows your prompt. It shows on models that support it, as a slider in **Advanced settings**.

- Lower values give the model more room to interpret — looser, more creative.
- Higher values stick more literally to what you wrote.

The default is tuned for the model, so move it only when a result feels too loose or too rigid.

## Negative Prompt

A **Negative Prompt** lists what you want to leave out. The model tries to avoid anything you name here. The field reads **What to avoid in the generation...** and appears on the models that support it.

Use it for cleanup, like:

- `blurry, low quality, watermark` — general quality control
- `text, letters, words` — keep out unwanted text

## Resolution

On models that support it, **Resolution** sets the output size. Higher resolution means more detail and a longer wait. Pick an option to set it; click it again to clear it and fall back to the model's default. The choices depend on the model.

## Mature content

If your Studio admin has enabled mature content, you see an optional toggle.

## You rarely need any of this

The defaults are chosen to give good results without setup. Write your prompt, leave the model on **Auto**, and press **Generate**. Reach for these settings when you want a specific frame shape, a repeatable result, or tighter control over the output. For a walkthrough of the full create flow, see [Creating images](/guides/creating-images/).
