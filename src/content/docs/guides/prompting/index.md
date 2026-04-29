---
title: Prompting Guides
description: How to write prompts that get the most out of each model. Start here, then read the per-model guide.
---

These guides teach you how to write prompts for each model OpenCauldron supports. Every model has its own quirks — Flux rewards compositional precision, Imagen rewards photographic vocabulary, Ideogram rewards explicit text instructions, Recraft rewards style tags. Using a Flux-style prompt on Recraft (or vice versa) leaves quality on the table.

Read this page first for fundamentals that apply everywhere. Then jump to the per-model guide for the model you are using.

## How to use these guides

- **Copy any example prompt.** Hover the code block, click the copy icon, paste it into OpenCauldron's prompt field.
- **Read the "Why this works" notes.** The prompts themselves are less important than the patterns they demonstrate.
- **Skim the "Common mistakes" section.** Most prompt failures come from a small set of repeated errors.

## Anatomy of a prompt

Every strong prompt names five things. The order matters less than making sure each is present.

| Lever | What it answers | Example phrase |
|-------|-----------------|----------------|
| Subject | What is in the frame? | "a weathered fisherman mending a net" |
| Action / state | What is the subject doing? | "hands working in the foreground" |
| Setting | Where? | "on a wooden dock at dawn" |
| Style anchors | What does it look like? | "35mm film, muted palette, shallow depth of field" |
| Quality / framing | How is it shot? | "medium close-up, eye-level, soft natural light" |

A prompt that names all five rarely produces something unusable. A prompt that names only the subject ("a fisherman") produces wildly different results every time.

## Style anchors that work across most models

Some descriptors carry useful signal almost everywhere:

- **Photographic vocabulary:** `35mm film`, `medium format`, `shallow depth of field`, `golden hour`, `softbox lighting`, `natural light`, `tilt-shift`, `prime lens`. Models trained on photo metadata key off these.
- **Art history references:** `Dutch Golden Age painting`, `ukiyo-e woodblock`, `art nouveau`, `Bauhaus poster`. Strong attractors when you want a specific look.
- **Material and texture:** `matte`, `glossy`, `brushed metal`, `worn leather`, `paper grain`. Cheap and effective.
- **Mood through palette:** `muted earth tones`, `high-contrast monochrome`, `pastel washed-out`. Works better than abstract mood words like "dreamy" or "ethereal."

## Things that almost never help

- **Generic quality boosters.** "Masterpiece, 8K, ultra-detailed, trending on artstation" — these were useful on older Stable Diffusion checkpoints and are mostly noise on modern models. Some still respond to "high quality" but the signal is weak.
- **Negation by hoping.** "Without weird hands" rarely works. Models that support negative prompts have a separate field for that; models that don't will often *include* the thing you negated.
- **Stacking adjectives.** "Beautiful, gorgeous, stunning, breathtaking" doesn't compound — it dilutes. Pick the most specific descriptor and stop.
- **Camera spec dumping unrelated to the scene.** Listing five lenses and three cameras in one prompt is just confusing the model.

## Negative prompts

Some models support a separate negative-prompt field, others do not.

| Supports negative prompts | Does not |
|---------------------------|----------|
| Imagen, Ideogram, Recraft, Kling, Veo | Flux, OpenAI (gpt-image-*), Grok |

For models without negative prompts, you cannot subtract — only describe what you want clearly enough that the unwanted thing has no room to appear.

## Aspect ratio matters more than people think

The aspect ratio you pick changes the *content* of the image, not just its frame. A "portrait of a fisherman" at `1:1` will be a head-and-shoulders shot. The same prompt at `16:9` will likely include the boat, the dock, and most of the fisherman's body. If you want a tight close-up at `16:9`, you need to say so explicitly: `extreme close-up, only the face filling the frame`.

## Iterating on a prompt

When a result is *almost right*:

1. **Identify the one thing that is wrong** (lighting too flat, wrong style, subject pose). Do not rewrite the whole prompt.
2. **Add the most specific phrase that fixes it.** "Side-lit by a single window" beats "better lighting."
3. **Lock the seed** if the model supports it, change one phrase, regenerate. This isolates the effect of your change.
4. **If three iterations do not converge,** the model may be wrong for the job. Try a different one.

## Per-model guides

Each guide follows the same structure: TL;DR → how the model reads a prompt → 8–12 worked examples → common mistakes → parameter cheatsheet.

### Image models

- [Flux](/guides/prompting/flux) — Black Forest Labs, photorealism and editing
- Imagen — Google, photographic quality
- Ideogram — text rendering
- Recraft — design and illustration
- OpenAI (gpt-image) — instruction-following
- Grok — fast and creative

### Video models

- Veo — Google, native audio
- Runway — cinematic motion
- Kling — motion quality
- Hailuo — cost-effective with audio
- Luma — camera controls

> Per-model guides are added incrementally. If a guide is missing, the [Working with Models](/guides/models) reference covers the model's capabilities and parameters in the meantime.
