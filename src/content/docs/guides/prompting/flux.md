---
title: Flux Prompting Guide
description: How to write prompts that work well with Flux 1.1 Pro, Flux Dev, Flux Kontext Pro, and Flux 2 Klein.
---

Flux is Black Forest Labs' family of image models, served through fal.ai. OpenCauldron exposes four variants: **Flux 1.1 Pro** (general purpose), **Flux Dev** (with guidance and step controls), **Flux Kontext Pro** (image editing and text rendering), and **Flux 2 Klein** (budget, sub-second).

This guide covers all four. Most advice applies across the family — variant-specific notes are called out where they matter.

## TL;DR

- **Best at:** photorealism, compositional precision, scene-level coherence, hands and faces (relative to most models), realistic lighting.
- **Struggles with:** stylized illustration without explicit anchors, complex multi-line text (use Kontext for text), abstract concept art.
- **Signature quirk:** Flux is *literal*. If you write "a red car," you will get a red car. If you write "a car, possibly red, in a kind of stormy mood," you will get something hedged and bland. Commit to your descriptors.
- **Negative prompts:** not supported. You cannot subtract — describe positively.

## How Flux reads a prompt

Flux responds best to prompts that read like a sentence, not a tag list. It was trained on natural-language captions, so `a worn leather jacket draped over a wooden chair, lit from a side window` outperforms `leather jacket, chair, window light, moody, 35mm`.

The four levers that matter most for Flux:

1. **Subject specificity.** Concrete nouns beat abstract ones. "A border collie" → much better than "a dog."
2. **Lighting direction and source.** Flux renders light convincingly when you tell it where the light is coming from. "Side-lit by a single north-facing window" produces dramatically better images than "good lighting."
3. **Material and texture words.** `weathered`, `matte`, `polished brass`, `linen`, `felt`. Flux is unusually good at materials and rewards naming them.
4. **Camera and lens vocabulary.** `35mm`, `medium format`, `shallow depth of field`, `tilt-shift`. Flux was trained on photo metadata; these phrases meaningfully change the output.

What matters less:

- Quality boosters (`masterpiece`, `8K`, `trending`). Mostly noise.
- Long lists of artists. Flux is less style-attractor-driven than older Stable Diffusion models.
- Token order. Flux handles natural sentence structure fine — you don't need to front-load the most important words.

## Worked examples

### Photorealistic portrait

```text
A weathered Portuguese fisherman in his sixties, mending a net on a wooden dock at dawn. Warm directional sunlight from camera-left, deep shadows on the right side of his face. Shot on 35mm film, medium format, shallow depth of field, eye-level medium close-up. Muted earth tones, slight film grain.
```

**Why this works:** names the subject precisely, gives the lighting a direction (camera-left), specifies framing (medium close-up, eye-level), and uses photographic vocabulary (35mm, shallow DOF, film grain) that Flux keys off of.

### Product shot

```text
A single ceramic coffee mug, matte black exterior with a glossy white interior, sitting on a polished concrete surface. Lit by a softbox from above-right, hard shadow falling to the lower-left. Studio product photography, three-quarter angle, sharp focus throughout. Plain warm gray background, no other objects.
```

**Why this works:** Flux is excellent at studio product imagery when you specify the lighting setup (softbox, direction), the surface, and the framing. "No other objects" is doing real work here — Flux tends to add props if you don't constrain it.

### Architectural exterior

```text
A brutalist concrete library at the edge of a pine forest, late afternoon. Heavy horizontal volumes, deep recessed windows, weathered concrete with vertical streak staining from rain. Sun low and from camera-right, raking light across the facade. Wide-angle architectural photograph, 24mm lens, slight perspective correction.
```

**Why this works:** specific architectural vocabulary (brutalist, recessed windows, streak staining) gives Flux something concrete to render. Specifying lens (24mm) shapes the perspective.

### Editorial fashion

```text
A young woman in a deep burgundy wool coat standing in front of a peeling teal-painted wall. Hands in pockets, slight three-quarter turn toward camera, neutral expression. Overcast soft light, no harsh shadows. Editorial fashion photograph, medium format, 80mm portrait lens, color palette dominated by burgundy and teal.
```

**Why this works:** the color palette is named explicitly (burgundy + teal), which Flux respects. Pose is described in concrete terms ("hands in pockets, three-quarter turn") rather than vague mood words.

### Food photography

```text
A bowl of ramen on a dark wooden table, photographed from a 45-degree overhead angle. Steam rising visibly from the broth. Soft chashu, soft-boiled egg sliced in half showing the runny yolk, scallions, sheet of nori leaning against the side of the bowl. Single warm light source from camera-right, gentle highlights on the broth surface. Shallow depth of field, only the egg in sharp focus.
```

**Why this works:** Flux handles food well when you describe each component and pick a single focus point. "Only the egg in sharp focus" tells Flux where to anchor depth of field.

### Cinematic still

```text
A lone figure in a long coat walking down an empty city street at night, seen from behind. Wet pavement reflecting the orange glow of sodium street lamps. Steam rising from a manhole in the foreground. Cool blue shadows in the alleys, warm orange highlights from the lamps. Anamorphic widescreen aspect, slight lens flare, shallow depth of field. Cinematic film still, 1980s neo-noir.
```

**Why this works:** the warm/cool color split is explicit, the framing is named (anamorphic widescreen, behind the subject), and the period reference (1980s neo-noir) is concrete enough to act as a strong attractor.

### Illustration / non-photo style

```text
A small fox curled asleep at the base of an oak tree, surrounded by fallen autumn leaves. Illustrated in the style of a vintage children's book, watercolor and ink, soft warm palette of browns, ochres, and burnt orange. Visible paper texture, hand-drawn linework. Storybook composition, gentle and quiet mood.
```

**Why this works:** Flux is photo-leaning by default, so for illustration you have to commit hard to the style anchors. "Watercolor and ink, paper texture, hand-drawn linework" leaves no room for it to drift back to photorealism.

### Text in image (use Flux Kontext Pro)

```text
A vintage diner sign at night, glowing in red neon. The sign reads "OPEN ALL NIGHT" in a 1950s script typeface. Slightly weathered metal frame around the neon, dark sky behind. Wide shot, eye-level, neon reflection visible on the wet sidewalk below.
```

**Why this works:** Flux Kontext Pro is the variant tuned for legible text. Put the exact text in quotes, name the typeface era, and describe the physical sign material. Other Flux variants will often misspell or warp the letters.

### Iterating with Flux Dev (guidance + steps)

```text
Same prompt as the editorial fashion example above, but with:
- guidance_scale: 4.0  (default is 3.5; raise for stricter adherence)
- num_inference_steps: 40  (default 28; raise when you need more detail)
- seed: 42  (lock to compare changes)
```

**Why this works:** Flux Dev is the variant for iteration. Lock the seed, raise guidance to enforce your prompt more strictly, and raise steps for finer detail. Don't push guidance above ~5.0 — it starts to oversaturate and stiffen the composition.

### Budget draft (Flux 2 Klein)

```text
A man at a desk staring at three monitors, late at night, only the monitor light illuminating his face. Cluttered desk, papers and coffee cups, blue-white screen glow. Simple medium shot, slightly low angle.
```

**Why this works:** Klein is sub-second and cheap, which makes it ideal for *checking the composition* before you spend on Pro. Use it to validate framing and concept, then upscale by re-running the same prompt on Flux 1.1 Pro.

### Image editing (Flux Kontext Pro)

```text
[With reference image attached]
Keep the subject and pose identical. Change the background to a sunlit Mediterranean courtyard with white stucco walls and bougainvillea climbing the wall. Adjust the lighting to match — warm afternoon sun from camera-left, soft shadows.
```

**Why this works:** Kontext follows editing instructions on a reference image. Be explicit about what to *keep* (subject, pose) and what to *change* (background, lighting). Vague edit prompts produce vague edits.

### Scene with multiple subjects

```text
Two children, a boy and a girl, building a sandcastle together on a beach. The boy, around eight, is patting wet sand into a tower. The girl, around six, is digging a moat with a red plastic shovel. Late afternoon light from behind, casting long shadows toward the camera. Wide shot from a low angle, soft focus on the background ocean.
```

**Why this works:** Flux handles multi-subject scenes when you describe each subject's *action* and *position* separately. Without that, you tend to get duplicate or merged figures.

## Common mistakes

:::caution[Vague style anchors]
**Don't:** "make it look cinematic and beautiful"

**Do:** "anamorphic widescreen, warm-cool color split, shallow depth of field, slight lens flare"

**Why:** Flux interprets specific photographic and cinematographic terms reliably. Abstract aesthetic words ("beautiful," "cinematic," "stunning") are too broad to push the model in any particular direction.
:::

:::caution[Trying to negate without negative prompts]
**Don't:** "a portrait, no weird hands, no extra fingers"

**Do:** "a portrait, hands resting visibly on her lap, fingers interlaced"

**Why:** Flux does not support negative prompts. Telling it what *not* to include often makes it more likely to include exactly that. Describe the desired state of the body part instead — and if hands are critical, position them deliberately.
:::

:::caution[Quality-booster soup]
**Don't:** "portrait of a woman, masterpiece, 8K, ultra-detailed, trending on artstation, hyperrealistic, award-winning"

**Do:** "portrait of a woman in her thirties, soft natural light from a north-facing window, 85mm lens, shallow depth of field, medium format film"

**Why:** The first prompt is mostly noise on Flux. The second names the actual photographic conditions that produce a high-quality image — which is what those quality boosters were trying (badly) to invoke.
:::

:::caution[Stacking conflicting styles]
**Don't:** "oil painting, photorealistic, anime, watercolor, 35mm film"

**Do:** Pick one. "Watercolor illustration with visible paper texture, soft palette."

**Why:** Flux will average conflicting style anchors into something muddled. Commit to a style and reinforce it with one or two consistent details.
:::

:::caution[Expecting text to render outside Kontext]
**Don't:** Use Flux 1.1 Pro or Flux Dev when text legibility matters.

**Do:** Use Flux Kontext Pro for any image where text needs to be readable.

**Why:** The Pro and Dev variants will often produce warped or misspelled text. Kontext was tuned with text-rendering in mind. If you need a sign, label, poster, or book cover, switch variants.
:::

## Parameter cheatsheet

| Parameter | Variant | Practical range | Notes |
|-----------|---------|-----------------|-------|
| `guidance_scale` | Flux Dev, Kontext | 3.0–4.5 | Default 3.5. Higher = stricter prompt adherence but more saturation. Above 5.0 things stiffen and oversaturate. |
| `num_inference_steps` | Flux Dev | 28–40 | Default 28. Diminishing returns past ~40. Lower (20–24) for fast iteration. |
| `seed` | All Flux variants | any int | Lock when iterating to isolate the effect of prompt changes. |
| `aspect_ratio` | All | 1:1, 16:9, 9:16, 4:3, 3:4 | Affects content, not just frame — request explicit framing for tight shots in wide ratios. |
| `output_format` | All | png, jpeg | PNG for transparency-adjacent work; JPEG for photographic outputs (smaller files). |
| `enhance_prompt` | Pro, Kontext | true / false | Provider-side prompt enhancement. Useful for short prompts; can override your specificity for long ones. |

## Variant selection

| Use this variant when… | Variant |
|------------------------|---------|
| You want the best general-purpose Flux output | Flux 1.1 Pro |
| You want to control guidance and steps for iteration | Flux Dev |
| The image contains readable text, or you're editing a reference image | Flux Kontext Pro |
| You're drafting compositions and want sub-second feedback | Flux 2 Klein |

## Further reading

- [Working with Models](/guides/models) — capabilities and pricing for all Flux variants
- [Generation Parameters](/guides/parameters) — full parameter reference
- [Prompt Tools](/guides/prompts) — template mode and LLM-based prompt enhancement
