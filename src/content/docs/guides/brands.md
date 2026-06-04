---
title: Brands
description: How brands organize one client or project — assets, Kit style rules, members, and campaigns in one space
---

A brand is your space for one client, division, or project. Everything you create lives inside a brand: its assets, its style rules, the people who work on it, and its campaigns. Switch brands and the whole studio re-scopes to that work.

Each brand holds four things:

- **Assets** — the images and video created or uploaded for this brand, organized in the [Library](/guides/library/).
- **Kit** — the style rules every generation follows: brand color, logo, prompt prefix and suffix, banned terms, video on or off, and self-approval.
- **Members** — the teammates on this brand, each with a role that sets what they can do.
- **Campaigns** — optional groupings of assets for a launch or push. See [Campaigns](/guides/campaigns/).

## The Brands index

Open **Brands** to see every brand you belong to. Two views share one toolbar:

- **Gallery** — brand cards with the logo, your role, asset count, and recent activity.
- **List** — a sortable table with brand color, team, your role, assets, and campaigns.

Type in the search box to filter brands by name. Click **Add Brand** to create one: enter a **Name** and pick a **Color**, then **Create**. You land on the new brand's **Kit** tab to finish setting it up.

## Working inside a brand

Open a brand to see its tabs:

- **Gallery** — the brand's assets.
- **Brews** — saved recipes for this brand. See [Brews](/guides/brews/).
- **Campaigns** — the brand's campaigns.
- **Kit** — the style rules below.
- **Members** — the team and their roles.
- **Review** — the approval queue. This tab shows only for managers. See [Review](/guides/review/).

## The brand picker

The brand picker sits in the top bar. It sets which brand you're working in across the whole studio — the Library, the gallery, what you create, and more all follow your choice.

Pick **All brands** to see everything you have access to at once, or pick a single brand to focus on it. Your Personal brand sits in its own group at the top.

## The Kit

The **Kit** tab holds the style rules for a brand. Managers and studio admins can edit it; everyone else sees a read-only view. Make your changes, then click **Save changes**.

| Setting | What it does |
|---|---|
| **Color** | A hex color (`#RRGGBB`) used as the brand's label across the studio. It marks brand cards, tags, and member rows. It does not change what you generate. |
| **Logo** | A square image shown in place of the color mark. Click **Upload** to add one, **Replace** to swap it, or **Remove** to go back to the color. PNG or WebP works best, up to 2 MB. |
| **Prompt prefix** | Text added to the start of every prompt for this brand — for example, `studio shot,`. |
| **Prompt suffix** | Text added to the end of every prompt — for example, `, clean, well-lit`. |
| **Banned terms** | Words or phrases blocked from prompts for this brand. Type a term and click **Add** (or press Enter). Click the × on a term to remove it. |
| **Default LoRA id** | An optional fine-tuned style add-on applied to generations for this brand. Leave it blank for none. See [LoRAs](/guides/loras/). |
| **Enable video generation for this brand** | Controls whether the team can create video for this brand. On by default. |
| **Allow brand managers to self-approve their own assets** | Lets managers approve their own work instead of needing a second person. Off by default. |

The prompt prefix and suffix keep everything on-brand without asking each person to remember the wording. If your studio admin has enabled mature content, you'll see an optional toggle here too.

### Deleting a brand

Managers and studio admins see a **Danger Zone** at the bottom of the **Kit** tab. Click **Delete brand** to start. Before it's removed, you choose whether to move the brand's assets and brews to another brand or delete them along with it. Deleting a brand also removes its members, campaigns, collections, and review history.

## Members and roles

Each brand has its own team, separate from your studio's full member list. The same person can hold different roles on different brands.

| Role | What they can do |
|---|---|
| **Brand manager** | Edit the Kit, invite and remove members, create and edit campaigns, and approve or reject assets in review |
| **Creator** | Create assets, upload, comment, and create campaigns |
| **Viewer** | Read-only — see the brand's assets but not change them |

Studio Owners and Admins get manager-level access on every brand. A brand always keeps at least one manager — the last one can't be removed or demoted until someone else is promoted.

To manage the team, open the **Members** tab (managers and studio admins only):

1. Enter a teammate's email in **Invite by email**.
2. Pick a role.
3. Click **Invite**.

Use the role dropdown next to any member to change their role, or the remove button to take them off the brand. Removing someone from a brand doesn't remove them from your studio. For studio-wide membership, see [Members & roles](/settings/members/).

## Your Personal brand

Everyone has a Personal brand — a private scratch space for trying ideas. Only you can see what's in it, and work there skips review entirely. It's a single-person space, so it has no members to manage and no logo to set.

Use a shared brand when work needs to be on-brand, reviewed, or seen by the team. Use Personal when you're experimenting.
