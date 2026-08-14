---
title: Tools
description: One-click transforms that need no prompt and no model — upscale an image, remove its background, and get a predictable result saved to your library
---

A tool takes one image, gives you one button, and produces a predictable result. There's no prompt to write, no model to choose, and no settings to get right — you pick an image, click once, and the result is saved to your library beside the original.

That's the whole category, and it's what separates tools from the rest of Cauldron. [Creating images](/guides/creating-images/) and [Editing images](/guides/image-editing/) are creative: you describe what you want and the result varies. A tool has exactly one correct answer. "Make this bigger" and "cut the background out" are not decisions, so you aren't asked to make any.

| Tool | What it does |
|---|---|
| **Upscale** | Adds resolution and detail to an image. |
| **Remove background** | Cuts the subject out onto a transparent background. |
| **Reframe** | Crops a batch of images into every social format at once. |
| **Vectorize** | Not available yet — shown as **Soon**. |

## Find the tools

There are four ways in, and they all land in the same place:

- **Sidebar** — click **Tools** to open the index, then pick one.
- **From an image you're already looking at** — open it in the [Library](/guides/library/) and use the **Tools** row in its detail panel. The tool opens with that image already loaded, so there's nothing to pick.
- **+ Create menu** — **Upscale** and **Remove background** are listed directly.
- **Command palette** — press `⌘K` and search for "upscale" or "remove a background".

## Upscale

Upscale adds resolution and detail, so an image holds up at a larger size — a product shot printed bigger, a hero image on a wide display, an old asset that was saved small.

It works on images up to **2048 pixels on the longest side**. Anything larger is refused, and the message says so before anything runs. That isn't an arbitrary line: the result is capped at a size a 2048-pixel image already reaches, so a much larger input takes far longer and gains almost nothing. If your image is already that big, it's already big enough.

An upscale is genuinely hard to see on screen, because both versions are scaled down to fit the window. Use the **100%** toggle in the comparison view to look at the result at its real pixel size — that's where the added detail shows up.

## Remove background

Remove background cuts the subject out and returns a PNG with real transparency — not a white rectangle. Drop it onto a coloured layout, a different photo, or a slide and the background is genuinely gone.

It works on images up to **4096 pixels on the longest side**, and each side needs to be at least 256 pixels.

In the comparison view, the result sits on a checkerboard. That's how you can tell transparent from white.

## Order matters: upscale first

If you want both a bigger image **and** a cut-out, run them in this order:

1. **Upscale** the original.
2. **Remove background** from the upscaled version.

Upscaling does not preserve transparency — it fills a transparent background with white. Running it on a cutout would silently destroy the cutout, so Cauldron refuses that order: the **Upscale** button is disabled on a cutout in the Library's Tools row, and the tool page explains the ordering if you get there another way.

There's no way to recover a cutout that's been flattened, so it's worth getting the order right the first time.

## What happens to your result

Every tool behaves the same way once it finishes:

- **It saves itself.** There's no save step and no preview to accept. The moment the result appears, it already exists in your library.
- **The original is untouched.** The result is a new asset that records the original as its parent. Nothing overwrites anything.
- **It lands where the original lives.** Same collections, same brand, so it turns up where you'd look for it.
- **It's tagged with the tool that made it**, so you can filter for every upscale or every cutout later. See [Finding assets](/guides/finding-assets/).
- **You get a before/after.** Compare with a **Wipe** slider or **Side by side**, at **Fit** or at **100%**. The wipe handle works with the arrow keys.

**View in library** takes you straight to the new asset.

### Running the same tool twice

Run a tool on an image you've already run it on, and you get the result you already have, immediately — nothing re-runs. The operation is deterministic, so there's nothing to gain from doing it again.

## Bring in a file from your desktop

You don't have to upload first. Drag a file onto a tool page, or click **Upload**, and it's added to your library as a normal asset before the tool runs. Tools accept **PNG, JPG, or WEBP**, up to 10 MB.

There's no throwaway path here: anything you run a tool on is a library asset, with the same brand and collection rules as any other upload. See [Uploading files](/guides/uploading/).

## Limits at a glance

If an image is outside these, you're told which limit it hit before anything runs — you never wait on a job that was going to fail.

| | Upscale | Remove background |
|---|---|---|
| Longest side | 2048 px | 4096 px |
| Shortest side | at least 32 px | at least 256 px |
| File size | 10 MB | 10 MB |
| Formats | PNG, JPG, WEBP | PNG, JPG, WEBP |

## Ask instead of clicking

The in-app assistant runs both tools directly. Point it at an image and say **"upscale this"** or **"remove the background"** — it runs immediately, with no confirmation step, because tools are free and never modify the original. The result is saved to your library exactly as it would be from the tool page.

The same two tools are available to AI tools you've connected over MCP, so an outside assistant can upscale or cut out an image in your library on your behalf. See [API keys](/guides/api-keys/).

## Reframe

Reframe is on the tools index and is the one that works differently: instead of one image in and one out, you select a batch and it crops all of them into social formats — Instagram post, portrait and story, TikTok, YouTube thumbnail, and custom ratios — in one run. It works on originals, and variants land in your library alongside their sources.

## What tools cost

Nothing. Upscale and remove background are free to use, with no credits and no daily cap.

## Tips

- **Upscale before anything else.** It's the step that cares about the order, and it's the one that can't be undone once transparency is gone.
- **Check at 100%.** Judging an upscale at fit-to-window size tells you nothing.
- **Start from the Library.** Opening a tool from an image's detail panel skips the picker entirely, and the disabled buttons there tell you what won't work on that image before you try.
- **Cut out a clear subject.** Background removal is strongest when the subject reads as separate from what's behind it.
