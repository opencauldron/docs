---
title: Writing better prompts
description: Write clear prompts, use Enhance and voice dictation, and learn the few details that change every result
---

A prompt is what you type to describe the image or video you want. A vague prompt gives you something different every time. A specific one gives you what you pictured. This page covers the in-app helpers first, then the writing technique that works across every model.

For where prompts fit in the wider flow, see [Creating images](/guides/creating-images/) and [Choosing a model](/guides/models/).

## Where you write a prompt

The prompt box sits at the top of the composer. Type your description, then generate. Two helpers sit at the bottom-left corner of the box: the **Enhance** button and the microphone for voice dictation. A character counter sits in the bottom-right.

You don't have to pick a model first. Left on **Auto**, the studio reads your prompt and chooses a model for you, so a clear prompt matters more than the model name.

## Enhance: let the studio rewrite your prompt

**Enhance** takes your rough prompt and rewrites it into a fuller one — adding detail about composition, lighting, style, and quality while keeping your subject and intent. It tunes the rewrite to the model you're generating with, so the same starting prompt comes out worded for photos on a photo model and for motion on a video model.

To use it:

1. Type a short prompt — even a few words.
2. Click **Enhance** (or press **⌘E** on Mac, **Ctrl+E** elsewhere).
3. The button reads **Enhancing** while it works, then drops the rewritten prompt into the box.

A **Prompt enhanced** chip appears with an **Undo** button. Click **Undo** to restore your original wording. The chip clears itself after a few seconds, so undo while it's showing.

When to reach for it:

- You have an idea but aren't sure how to phrase it.
- Your prompt is short and the result feels generic.
- You want a richer starting point to edit by hand.

When to skip it: if your prompt is already long and specific, Enhance can soften details you chose on purpose. Write it yourself and generate.

## Voice dictation: speak your prompt

Click the microphone in the prompt box to dictate instead of type. Speak your description and the words drop into the box; click again to stop. Edit the text afterward like anything you typed. Dictation pauses Enhance while it's running, so finish dictating before you enhance.

## Anatomy of a strong prompt

Most prompts that work name five things. Order matters less than making sure each is present.

| Lever | What it answers | Example phrase |
|---|---|---|
| Subject | What is in the frame | a weathered fisherman mending a net |
| Action or state | What the subject is doing | hands working in the foreground |
| Setting | Where it happens | on a wooden dock at dawn |
| Style | What it looks like | 35mm film, muted palette, shallow depth of field |
| Framing | How it's shot | medium close-up, eye-level, soft natural light |

A prompt that names all five rarely produces something unusable. A prompt that names only the subject ("a fisherman") produces a different image every time.

## Be specific

The single biggest improvement to any prompt is concrete detail.

- **Use concrete nouns.** "A border collie" beats "a dog." "A burgundy wool coat" beats "a jacket."
- **Name the light and where it comes from.** "Side-lit by a single window" beats "good lighting." Most models render light convincingly when you tell them the direction and source.
- **Name materials and texture.** `weathered`, `matte`, `polished brass`, `linen`, `worn leather`. Cheap to add and they change the result.
- **Use photographic vocabulary for photos.** `35mm film`, `shallow depth of field`, `golden hour`, `softbox lighting`, `wide angle`. Models trained on photos respond to these.
- **Commit to your descriptors.** "A red car" gives you a red car. "A car, maybe red, in a kind of moody way" gives you something hedged and bland.

## What rarely helps

- **Quality-booster soup.** "Masterpiece, 8K, ultra-detailed, award-winning" is mostly noise on current models. Describe the conditions that make an image good — the lighting, the lens, the palette — instead of asking for "quality."
- **Stacking adjectives.** "Beautiful, gorgeous, stunning, breathtaking" dilutes rather than compounds. Pick the most specific word and stop.
- **Negating by hoping.** "Without weird hands" rarely works and can make the unwanted thing more likely. Describe the desired state instead — "hands resting in her lap, fingers interlaced." If you need to exclude something, use the **Negative Prompt** field on models that have one (see [Generation settings](/guides/parameters/)).
- **Conflicting styles.** "Oil painting, photorealistic, anime, watercolor" averages into something muddled. Choose one and reinforce it.

## How references change a prompt

When you attach a reference image, your prompt's job shifts from describing the whole scene to describing how the reference should influence the result. Say what to keep and what to change. "Keep the subject and pose; change the background to a sunlit courtyard" works better than restating the entire scene from scratch.

Reference images, brand assets, and how to attach them are covered in [Reference images](/guides/references/).

## Prompts for editing an image

When you're editing an existing image, the prompt box reads **Describe the edit you want to make**. Describe the change, not the whole picture:

- **Good:** "Change the wall behind her to exposed red brick. Keep everything else the same."
- **Less good:** "A woman in a burgundy coat in front of a red brick wall" — this re-describes the image and invites the model to redraw parts you wanted left alone.

Be explicit about what stays put. Editing models leave the rest of the image alone when you tell them to. See [Editing images](/guides/image-editing/) for the full flow.

## A note on aspect ratio

The aspect ratio you choose changes the content of the image, not just its frame. A "portrait of a fisherman" at a square ratio tends to be a head-and-shoulders shot; the same prompt at a wide ratio often pulls in the boat and the dock. For a tight close-up in a wide frame, say so: "extreme close-up, only the face filling the frame." Aspect ratio and the other controls live in [Generation settings](/guides/parameters/).

## Iterating when a result is almost right

1. **Find the one thing that's wrong** — flat lighting, wrong style, off pose. Don't rewrite the whole prompt.
2. **Add the most specific phrase that fixes it.** "Side-lit by a single window" beats "better lighting."
3. **Lock the seed** (on models that support it) so changing one phrase shows you the effect of that change alone.
4. **If three tries don't converge,** the model may be wrong for the job. Switch models — see [Choosing a model](/guides/models/).

## Quick tips by goal

| If you want… | Lean on… |
|---|---|
| Photoreal images | Photographic vocabulary, named light direction, a lens and palette |
| Readable text or signage | Put the exact words in quotes; name the typeface era and the sign material |
| Illustration over photos | Commit hard to the style — "watercolor and ink, visible paper texture, hand-drawn linework" |
| A specific look | Concrete art or period references — "1980s neo-noir," "Dutch Golden Age painting" |

Every generation saves its prompt — and the enhanced version, if you used one — alongside the result, so you can revisit what worked and build on it. See [Finding assets](/guides/finding-assets/) to search past prompts.
