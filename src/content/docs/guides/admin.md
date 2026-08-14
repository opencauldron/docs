---
title: Admin tools
description: Curate the studio Styles catalog, set default styles per brand, and run the prompt safety blocklist
---

The **Admin** area is for studio Owners and Admins. It covers two jobs: curating the **Styles** catalog your team can generate with, and running the safety rules that screen prompts before anything is created.

This is separate from people management. To invite teammates, change studio roles, or manage who belongs to a brand, use [Members & roles](/settings/members/). To rename your studio or set studio-wide defaults, use [Studio settings](/settings/studio/).

Open the account menu at the bottom of the sidebar and choose **Admin**. The landing page shows three sections:

| Section | What it does |
|---|---|
| **LoRAs** | The full Styles catalog — every style your studio knows about. |
| **Brand LoRAs** | Attach catalog styles to specific brands as defaults. |
| **Blocklist** | Prompt safety rules, plus a log of recent blocked prompts. |

If you are not an Owner or Admin, these pages are not available to you.

## Styles catalog

Open the **LoRAs** section to reach the **LoRA Catalog**. A style (also called a LoRA) is a reusable look your team can apply when creating images — a house aesthetic, a product treatment, a signature finish. The catalog is the master list of every style available across the studio.

Styles are grouped by how they reach your team:

- **System LoRAs** apply to every generation automatically. Use these for a look you always want on, studio-wide.
- **Brand LoRAs** are available to attach to specific brands. They are not on by default — you choose which brands get them in the **Brand LoRAs** section.
- **User LoRAs** show up in the style picker when a teammate is creating an image, so they can opt in per generation.

### Add or edit a style

1. Click **New LoRA** to add one, or the pencil icon on any row to edit an existing style.
2. Give it a **Display name** — this is what your team sees.
3. Set its **Scope** to System, Brand, or User, depending on how broadly it should reach.
4. Add **Trigger words** if the style responds to specific terms in a prompt.
5. Leave **Enabled** on to make it available, or turn it off to retire it without deleting.
6. Click **Save changes** (or **Create LoRA** for a new one).

The **Enabled** switch on each row lets you turn a style on or off in place. Deleting a style removes it from the catalog and detaches it from every brand. Work your team already created stays exactly as it was — past results are not affected.

For how teammates pick and apply styles while creating, see [Styles & LoRAs](/guides/loras/).

## Default styles per brand

Open the **Brand LoRAs** section to set which styles a brand gets by default. This is how you give each brand a consistent on-brand look without asking every teammate to remember which style to pick.

1. Pick a brand from the **Brand** menu at the top.
2. The **Attached LoRAs** card lists the styles already attached to that brand.
3. Click **Add LoRA** to open the catalog, then click **Attach** next to a style to add it.
4. Adjust the **Sort** order to control which style takes priority, and **Scale** to control how strongly a style is applied.
5. To remove a style from a brand, click the trash icon on its row.

Only Brand and User styles can be attached here. System styles already apply everywhere, so they do not appear in this list.

Brands you manage are set up on the brand's own page. For brand settings, members, and the brand kit, see [Brands](/guides/brands/).

## Prompt blocklist

Open the **Blocklist** section to manage the **Prompt Blocklist** — the safety rules that screen every prompt before a generation runs. When a prompt matches the rules, the generation is blocked and the attempt is logged.

The page has two panels: **Rules** on top, **Recent violations** below.

### Rules

Each rule is a word or phrase to watch for, matched case-insensitively as plain text (no patterns or wildcards). Every rule has a **Kind** that controls when it blocks:

| Kind | When it blocks |
|---|---|
| **absolute** | On any match, on its own. Use this for terms that are never allowed. |
| **minor** | Only when an **explicit** rule also matches the same prompt. |
| **explicit** | Only when a **minor** rule also matches the same prompt. |

The **minor** and **explicit** kinds work as a pair: neither blocks alone, but together in one prompt they do. Use them for terms that are fine on their own but not in combination.

To manage rules:

1. Click **New rule** to add one, or the pencil icon to edit an existing rule.
2. Enter the **Pattern** — the word or phrase to watch for.
3. Choose the **Kind** (absolute, minor, or explicit).
4. Add **Notes** if you want to record why the rule exists. Notes are admin-only and never shown to your team.
5. Leave **Enabled** on so the rule is checked against every prompt, or turn it off to pause it.
6. Click **Create rule** or **Save**.

The **Enabled** switch on each row pauses or resumes a rule without deleting it.

### Recent violations

The **Recent violations** panel lists prompts that were recently blocked, newest first. Each row shows when it happened, which teammate submitted the prompt, an excerpt of the prompt, and which rules it matched. Click **Load more** to page back through older entries.

Use this to spot patterns — a teammate repeatedly hitting the same rule, or a rule that is too broad and catching ordinary work.

## Related

- [Members & roles](/settings/members/) — invite teammates and set studio and brand roles
- [Studio settings](/settings/studio/) — studio name and studio-wide defaults
- [Styles & LoRAs](/guides/loras/) — how teammates pick and apply styles when creating
- [Usage & limits](/guides/usage-and-limits/) — generation limits and what counts against them
