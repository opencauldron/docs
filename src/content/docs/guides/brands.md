---
title: Brands
description: Set up a brand kit, manage brand members and roles, and control who can generate and approve within each brand
---

A brand is the main organizational unit within your workspace. Each brand has its own gallery of assets, a set of brand kit settings that shape every generation, and a member list with role-based access control. Assets, [campaigns](/guides/campaigns/), brews, and the [review pipeline](/guides/review/) are all scoped to a brand.

Workspace owners and admins can see all brands. Other members see only the brands they have been explicitly added to.

## Creating a brand

Only workspace owners and admins can create brands.

Navigate to **Brands** in the sidebar and click **New Brand**. Enter a name — names must be unique within your workspace. The brand color defaults to `#6366f1`; you can change it in the brand kit after creation.

The member who creates a brand is automatically added as a `brand_manager`.

## Brand kit

The **Kit** tab in a brand page contains all brand kit settings. Only `brand_manager` role holders (and workspace admins/owners) can edit the kit. All other members see a read-only view.

### Color

The brand color is a hex value (`#RRGGBB`). It appears as a visual label throughout the UI — on brand cards, asset tags, and the member list row highlight. It does not affect generation parameters.

### Logo

Upload a logo (PNG, JPG, or WebP, square recommended, max 2 MB) to display in place of the default color swatch. Click **Upload** to add a logo or **Replace** to swap it. Click **Remove** to revert to the color swatch. Personal brands always use the owner's avatar instead.

### Prompt prefix and suffix

`promptPrefix` and `promptSuffix` are plain-text strings prepended and appended to every prompt submitted under this brand. Use them to enforce consistent styling without requiring every creator to remember to include it.

- **Prompt prefix** — inserted at the start of the prompt (e.g., `studio shot,`)
- **Prompt suffix** — appended at the end (e.g., `, clean, well-lit`)

Both fields accept up to 500 characters. Leave either blank to disable it.

### Banned terms

`bannedTerms` is a list of words or phrases blocked from generation prompts for this brand. Enter a term in the input field and press **Add** (or press Enter). Click the `×` on any existing term to remove it. Up to 64 terms are supported.

### Default LoRA

Set a default [LoRA](/guides/loras/) ID to pre-select a fine-tuned model add-on for every generation under this brand. Enter the LoRA ID in the **Default LoRA id** field. Leave blank to use no brand-level default.

### Video generation

The **Enable video generation for this brand** toggle controls whether creators can generate video assets under this brand. The toggle defaults to on. Disabling it blocks video submissions for this brand regardless of individual workspace permissions.

### Self-approval

By default, `brand_manager` members cannot approve their own submitted assets. Turn on **Allow brand managers to self-approve their own assets** to lift this restriction for the brand. This setting has no effect on approvals of assets submitted by other members.

Click **Save changes** to apply any kit edits.

---

## Brand member roles

Each brand has its own member list, separate from workspace membership. A workspace member can hold different roles across different brands.

| Role | Schema value | What they can do |
|---|---|---|
| Brand manager | `brand_manager` | Invite and remove members, edit brand kit, approve and reject assets in review |
| Creator | `creator` | Generate assets, save to library, submit assets for review |
| Viewer | `viewer` | Read-only access — can see brand assets but cannot generate or submit |

Workspace owners and admins inherit `brand_manager`-level access on every brand regardless of whether they have a `brand_members` row.

A brand always has at least one `brand_manager`. The last `brand_manager` cannot be demoted or removed until another member is promoted first.

For details on how roles interact with the approval workflow, see [Review](/guides/review/).

## Managing members

Navigate to a brand and open the **Members** tab. Only `brand_manager` holders (and workspace admins/owners) can make changes here.

### Adding a member

Enter a teammate's email address in the **Invite by email** field, select a role from the dropdown, and click **Invite**. If the email belongs to an existing workspace member they are added immediately. If not, they are added to the workspace as a `member` and then added to the brand at the selected role.

### Changing a role

In the member list, use the role dropdown next to any member (other than yourself) to change their role. The change takes effect immediately.

### Removing a member

Click the trash icon next to a member and confirm in the dialog. Removing a member revokes their access to this brand. Their workspace membership is not affected.

Personal brands are single-user and cannot have members added or removed.

---

## Deleting a brand

Open the **Kit** tab for the brand. `brand_manager` holders and workspace admins/owners see a **Danger Zone** section at the bottom of the page. Click **Delete brand** to open the deletion dialog.

Before the delete is confirmed, you choose what to do with the brand's existing assets and brews:

- **Move them to another brand** — assets and brews are reassigned to a brand you select. Choose this when you want to preserve the content under a different brand.
- **Delete them along with the brand** — all assets and brews are permanently removed. This cannot be undone.

Type the brand name exactly to unlock the **Delete brand** button.

Deleting a brand also removes its members, campaigns, collections, and review history. A workspace must keep at least one non-personal brand; the last non-personal brand cannot be deleted.

Personal brands are tied to workspace membership and cannot be deleted from this page.

---

## Workspace vs. brand permissions

OpenCauldron has two permission scopes:

| Scope | Roles | Controls |
|---|---|---|
| Workspace | `owner`, `admin`, `member` | Who can join the workspace, create brands, see all brands |
| Brand | `brand_manager`, `creator`, `viewer` | Who can generate, submit, approve, and manage kit within a specific brand |

Workspace `owner` and `admin` roles inherit `brand_manager` access on every brand. Workspace `member` role holders access only the brands they are explicitly added to, at the role they were assigned.

For workspace-level setup and inviting teammates, see [Getting Started](/getting-started/).
