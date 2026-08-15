---
title: Workflows
description: Recipes for generations the standard composer can't do — with a LoRA stack you can shape and settings tuned for the job
---

A **Workflow** is a recipe for a kind of generation the standard composer can't produce on its own. Where the composer gives you a prompt and a model, a workflow gives you a fixed pipeline built for one job, a stack of [LoRAs](/guides/loras/) you can shape, and the settings that actually matter for it.

Find them under **Workflows** in the sidebar.

## Workflow, model, or tool?

Three things in the studio make images, and it's worth knowing which you want:

| | What it is | When to reach for it |
|---|---|---|
| **[Creating images](/guides/creating-images/)** | A prompt and a model | Almost always. Start here. |
| **[Tools](/guides/tools/)** | One image in, one button, no settings | You want an exact operation — bigger, background gone |
| **Workflows** | A tuned pipeline with a LoRA stack and settings | You want a specific look or capability the composer can't reach |

A workflow is the specialist option. If the composer can already do what you want, use the composer — it's faster and there's less to get wrong.

## The Workflows page

Every workflow available to your studio appears as a card with what it does and what it needs from you. Filter the list by what you're trying to do:

- **Text to Image** — a prompt in, an image out
- **Image to Image** — start from an image you already have
- **Refine** — improve an existing image
- **Upscale** — increase resolution

Open a workflow to use it.

## Running a workflow

A workflow page is a composer with the workflow's own controls:

1. **Write your prompt.** The placeholder tells you what this particular workflow expects — some want a scene description, others want an instruction like "put the subject on a beach".
2. **Add reference images** if the workflow takes them. Edit workflows need at least one; multi-reference workflows take several, which is how you combine a subject from one image with a setting from another.
3. **Shape the LoRA stack** if you want a different look — see below.
4. **Open Advanced settings** only if you need to. They start at values tuned for this workflow.
5. **Generate.** The result lands in your [Library](/guides/library/) like any other creation, on the brand you've selected.

## The LoRA stack

Most workflows ship with a stack of LoRAs already loaded — the character of the workflow, not a blank slate. You can shape it per generation:

- **Reorder** the LoRAs. Order changes the result.
- **Adjust strength** on any LoRA to dial its influence up or down.
- **Remove** one you don't want.
- **Add LoRA** opens the catalog, filtered to LoRAs compatible with this workflow. An incompatible LoRA can't be added — they're built against a particular model family and mixing them produces noise, not a blend.
- **Reset** returns the stack to the workflow's defaults whenever you've changed it.

If your studio hasn't enabled adult content, adult LoRAs never appear here at all — not in the stack, not in the catalog.

See [LoRAs](/guides/loras/) for what they are and how to find them.

## Advanced settings

Collapsed by default, and that's deliberate: the defaults are tuned per workflow, and most generations don't need touching. Open it and you'll see the settings that matter for that specific workflow — commonly **Steps**, **Guidance** or **CFG Scale**, **Sampler**, **Scheduler**, and sometimes a detail or resolution control.

Each setting explains itself and stays inside a safe range. **Reset to defaults** puts everything back.

A note on distilled workflows: some are tuned to run in very few steps, and pushing steps or guidance higher makes results worse, not better. Where that's true, the setting says so.

## Managing your studio's workflows

Studio Owners and Admins choose which workflows their studio gets. On the **Workflows** page you can add one from the catalog or remove one you don't want cluttering the list — no waiting on anyone.

Studio operators can also set each workflow's default LoRA stack and default settings centrally, so everyone starts from the same tuned baseline. Changes apply to new sessions immediately.

## Where results go

A workflow generation is an ordinary asset. It lands in the Library on the brand you picked, counts toward your [daily limit](/guides/usage-and-limits/), goes through [Review](/guides/review/) like anything else on a team brand, and is covered by your seats — workflows produce images, and images are included.
