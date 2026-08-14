---
title: Choosing a model
description: Let Auto pick the right model, or choose your own — photos, text, illustration, fast drafts, edits, or video
---

A model is the engine that turns your prompt into an image or video. Different models are good at different things. You don't have to learn them all — by default the studio picks one for you. This page covers the default, then a plain-language guide for when you want to choose yourself.

## Start with Auto

When you open the composer, the model is set to **Auto**. Auto reads your task and picks the right model:

- A plain prompt with no reference image — a strong all-rounder for new images.
- A prompt plus a reference image — a model that works from your reference.
- An edit to an existing image — a model built to change one thing and leave the rest alone.

Auto is marked **Suggested** and shows "Picks the best model for your prompt." For most work, leave it on Auto and write a clear prompt. See [Writing better prompts](/guides/prompts/).

## Choose a model yourself

To pick a specific model, click the model name in the composer to open **Browse image models** (or **Browse video models** for video). You get a scrollable list with filters across the top:

- **Provider** — filter by maker (Google, Black Forest Labs, Ideogram, Recraft, xAI, and more).
- **Features** — Reference support, LoRA support, or Fast.
- **Best for** — a goal, such as Photoreal, Illustration & art, Text & logos, Portraits, Editing & references, Brand & marketing, Fast drafts, or Video & motion.
- **Search** — type a model name.

Each row shows the model, its typical render time, and a few tags (References, Fast, LoRA). Pick a model to pin it; close the browser to stay on Auto. Pinning a model with more than one version shows a small set of version chips so you can switch between, for example, the standard, faster, and highest-quality version.

To go back to Auto after pinning, click **Auto** at the top of the model area.

## Which image model should I use?

You rarely need to choose, but if you want a specific look, here's a starting point. The version names below match what you see in the browser.

| Your goal | Try | Why |
|---|---|---|
| A reliable all-rounder | Flux 2 Pro | Handles plain prompts, reference images, and edits in one model |
| Print-ready or large-format work | Gemini Pro | Studio-grade 4K output and the strongest reasoning of the Gemini tiers |
| Readable text in the image | Ideogram | Renders clean, legible text — posters with copy, logos, social cards |
| Text plus editing in one model | Gemini Flash | Strong text rendering, conversational edits, and multi-reference consistency |
| Stylized illustration or design | Recraft V3 / V4 | Vector and brand-safe styles; V4 takes longer style instructions |
| Bold, creative looks | Grok Imagine | Loose, expressive styles for editorial and mood work |
| Precise instruction-following | Filter **Best for** to **Editing & references** | Sharp at multi-step instructions and high-fidelity image inputs |
| A fast draft | Flux Klein, Gemini Lite, or any model tagged **Fast** | Quick, low-cost passes for iterating on an idea |
| Keep a subject consistent across edits | Flux Kontext | Built for character and subject consistency across a series |
| Use several reference images | Flux 2 Pro, or Gemini Lite for the highest count | Composes from multiple references in one shot |
| A transparent background | Filter **Best for** to **Editing & references** | Output an isolated subject on a transparent background |

Need transparent or print-ready output, or want to control resolution and aspect ratio? See [Generation settings](/guides/parameters/).

## Which video model should I use?

Video models take longer than image models and are priced by the second. Auto starts you on a strong general video model. To choose yourself:

| Your goal | Try | Why |
|---|---|---|
| Video with sound | Veo 3 | Generates matching audio along with the clip |
| Longer or higher-resolution clips | Veo 3.1 | Adds 4K and extends clips well past the standard length |
| Animate an existing still | Gen-4 Turbo | Built for image-to-video — bring a hero still to life |
| A cinematic short | Gen-4.5 | Flagship quality from text and image |
| Realistic human or character motion | Kling 2.1 | Strong motion and physics for movement-heavy clips |
| Best value | Hailuo 2.3 | Strong motion at a low per-second cost (add audio separately) |
| Camera moves like a push-in or orbit | Ray 2 | Named camera controls and longer clips |
| A quick draft | Veo 3 Fast, Hailuo 2.3 Fast, or Ray Flash 2 | Faster, cheaper passes for testing a shot idea |

## A note on cost and speed

Each model row shows its typical render time, and pinned image and video models show an estimated cost before you generate. Faster, lower-cost models are good for drafts; higher-quality models are worth the wait for final work. Auto already balances this for the task at hand.

If your studio admin has enabled mature content, you'll see an optional toggle.

For how to write prompts that get the most from any model, see [Writing better prompts](/guides/prompts/). To start generating, see [Creating images](/guides/creating-images/).
