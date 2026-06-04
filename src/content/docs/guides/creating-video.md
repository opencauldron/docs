---
title: Creating video
description: Describe a scene and motion, let Auto pick a video model, and watch your clips render right in the studio
---

The video studio turns a written prompt into a short clip. You describe the scene and the motion, pick an aspect ratio, and generate. By default the **Auto** model picker chooses a video model for you, so you can start without knowing which one to use.

Videos take longer to render than images. You can keep working while they run and track them as they finish.

## Open the video studio

Two ways to get there:

- On the home screen, click **Create video**.
- Open the **+ Create** menu and choose **New video**.

Video may need permission. If you see a note that reads "Your studio admin hasn't granted video access," ask your studio admin to turn it on — see [Members & roles](/settings/members/). Access can also be earned as you level up; see [XP, levels & feats](/guides/xp-and-feats/). Video can be turned off for a specific brand too, in which case it stays unavailable while that brand is selected.

## Describe the clip

In the prompt field labeled **Describe the video you want to generate...**, write what you want to see and how it moves. Include:

- The subject and setting (a coffee cup on a marble counter, morning light).
- The motion (slow push-in, steam rising, the camera drifting left).
- The mood or style (warm, cinematic, handheld).

The more you say about movement, the more control you get over the result. For tips that apply to both images and video, see [Writing prompts](/guides/prompts/).

## Let Auto pick the model, or choose one

Above the prompt is the **Video model** picker. It starts on **Auto**, which selects a video model based on your prompt and inputs. To pin a specific model, open the picker and choose one; click **Auto** again to hand the choice back. To compare what each model does best, see [Choosing a model](/guides/models/).

The button at the bottom of the prompt card shows the model's name and the estimated cost for your current length, for example **Generate Video ($0.40)**.

## Add a first-frame image (optional)

You can guide framing and color with a starting image. Under the prompt, add a first-frame reference image. The clip begins from that frame, which is a good way to keep a product, color palette, or composition consistent.

You can attach up to four images. To turn an image you already made into the first frame, hover any clip in the results panel and click the **Use as reference** button. To work with reusable brand inputs, see [Reference images](/guides/references/).

## Set length, motion, and other controls

Choose the **aspect ratio** below the prompt — typically **1:1**, **16:9**, or **9:16**, depending on the model.

Open **Advanced settings** for the rest. The controls shown depend on the model you're using:

| Control | What it does |
|---|---|
| **Duration** | Sets clip length in seconds. Pick from the lengths the model supports. |
| **Generate Audio** | Adds a soundtrack or sound effects, where the model supports it. |
| **Camera Motion** | Directs the camera: **Pan Left**, **Pan Right**, **Zoom In**, **Zoom Out**, **Orbit Left**, **Orbit Right**, or **None (auto)**. |
| **Negative Prompt** | Lists things to keep out of the clip. |
| **Resolution** | Sets output resolution from the model's options. |
| **Loop Video** | Makes the clip loop smoothly end to end. |

Longer clips cost more, so the price on the **Generate Video** button updates as you change the length. For the deeper controls — **Seed**, **CFG Scale**, **Prompt Optimizer**, and **Watermark** — see [Generation settings](/guides/parameters/). Some video models also accept a [LoRA](/guides/loras/) add-on; when they do, a browser appears so you can add one.

## Generate and track progress

Click **Generate Video** to start. Because video renders take time, the studio doesn't make you wait on the page:

- A placeholder tile appears in the results panel and shows progress while the clip renders.
- The queue pill near the **+ Create** button shows how many jobs are running — for example **2 brewing**. Click it (or press **Q**) to see what's in flight.

You can change the prompt, start another clip, or move to another part of the studio while a video renders.

## Review the result

Finished clips play inline in the results panel. Click any clip to open it full size, where you can:

- **Download** the clip as an MP4.
- **Regenerate** to run the same prompt again.

Each result shows the model, the cost, and the length. Every clip you make is saved to your [Library](/guides/library/), where you can tag it to a brand, group it into a campaign, and send it for approval.

## Mature content

If your studio admin has enabled mature content, you'll see an optional toggle in **Advanced settings**.

## Related

- [Creating images](/guides/creating-images/)
- [Choosing a model](/guides/models/)
- [Writing prompts](/guides/prompts/)
- [Generation settings](/guides/parameters/)
