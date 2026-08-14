---
title: Editing images
description: Start from an existing image and describe the change you want — swap a background, restyle, combine references, or animate
---

Editing starts from an image you already have and a plain-English description of the change you want. You don't pick a tool or a model — you say what to change ("add soft shadows", "make it look like an oil painting", "swap the background to a beach at sunset") and the studio handles the rest.

This is different from making an image from scratch. For a blank-canvas start, see [Creating images](/guides/creating-images/).

## Open the edit studio

There are two ways in:

- In the sidebar, click **Create**, then **Edit image**. This opens the edit studio with an empty source slot.
- From an image you already have, open it and use its actions to send it into editing with the source already attached.

The edit studio looks like the create composer, but it's framed around one source image and the change you describe.

## Pick the image to edit

The edit studio works on a **Source image**. Until you add one, you'll see the hint **Add a reference to pick what to edit**.

Click **Add reference** to open the picker. From there you can:

- **Upload** a file from your computer, or drop one onto the picker.
- Choose from **History** — the images you generated most recently.
- Choose from **Uploads** — files your team has uploaded.
- Choose from **Gallery** — images across your studio.

Use the search box to find a specific image by its prompt or file name. Click an image to attach it, then click **Done**.

Uploads and saved assets live in your digital asset manager. To bring brand files in first, see [Library](/guides/library/) and [Uploading files](/guides/uploading/).

## Describe the change

With a source attached, type what you want in the prompt box. The placeholder reads **Describe the edit you want to make…**

Be specific about what changes and what stays:

- "Replace the gray background with a warm studio backdrop, keep the product centered."
- "Make the jacket red instead of blue."
- "Turn this photo into a watercolor painting."
- "Remove the people in the background."

The model named **Auto** chooses an editing-specialist model that keeps the parts you didn't mention and applies only the change you asked for. You can pin a specific model from the picker if you want a particular look, but **Auto** is the default and the right starting point.

Set the **aspect ratio** if you want to reframe, and the number of **Images** (1 to 4) if you want a few variations to compare. Then click **Generate**.

## Combine more than one image

Some edits need more than one reference — for example, putting a product from one shot into a scene from another, or matching the lighting of a second image.

In the **Add reference** picker, attach more than one image (up to four). Then describe how each should be used in your prompt:

> Place the bottle from the first image into the kitchen scene from the second image, matching the warm light from the second image.

The studio uses every attached image as guidance and follows your description for how to combine them.

To learn more about guiding a generation with images, see [References](/guides/references/).

## Other ways to transform an image

Not every change needs a prompt. When you open an image, its detail panel has a **Tools** row of one-click transforms:

| Tool | What it does |
|---|---|
| **Upscale** | Adds resolution and detail, so the image holds up at larger sizes. |
| **Remove BG** | Cuts the subject out onto a transparent background — ready to drop onto other layouts. |
| **Reframe** | Crops images into social formats in a batch. |
| **Vectorize** | Not available yet — the button is shown, marked **Soon**. |

Each one opens with the image you were looking at already loaded, runs on one click, and saves the result to your library beside the original. Buttons that would produce nothing useful are disabled with the reason in the tooltip — an image you've already upscaled, for instance.

One rule is worth knowing before you need it: **upscale first, then remove the background.** Upscaling fills a transparent background with white, so running it on a cutout would destroy the cutout.

For the full walkthrough, see [Tools](/guides/tools/).

You can also **Download** the result or **Regenerate** to try the same prompt again.

Background removal works best when the subject stands clearly apart from the background.

## Turn a still into a short video

Any image can become a short video clip. Open it in the [Gallery](/guides/gallery/) and click **Animate**. The video composer opens with your image set as the starting frame and its prompt carried over. Describe the motion you want, then generate.

For pacing, length, and the rest of the video controls, see [Creating video](/guides/creating-video/).

## Tips

- **Change one thing at a time.** Smaller, specific edits land more reliably than a long list of changes in one prompt.
- **Say what to keep.** "Keep the logo and the product, change only the background" helps the model preserve what matters.
- **Generate a few variations.** Set **Images** to 2–4 and pick the best result.
- **Chain edits.** Use **Edit** on a result to feed it back as the new source and refine from there.
