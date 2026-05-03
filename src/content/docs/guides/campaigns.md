---
title: Campaigns
description: Group brand assets by initiative, track date ranges, and share approved work via a public campaign gallery
---

A Campaign is an optional grouping of assets within a [Brand](/guides/brands/). Use campaigns to organize work by project, launch, or initiative — a product launch, a seasonal push, a specific client deliverable. Campaigns live entirely inside one brand and can be made public for sharing outside your workspace.

## What campaigns track

Each campaign has:

- **Name** — required; must be unique within the brand (up to 120 characters)
- **Description** — optional free-text summary (up to 1,000 characters)
- **Date range** — optional `startsAt` and `endsAt` timestamps; useful for scheduling and retrospective filtering
- **Visibility** — `"private"` (default) or `"public"` (generates a shareable URL)

Assets are associated with campaigns through a many-to-many join. One asset can belong to multiple campaigns, and a campaign can hold any number of assets regardless of their `status`.

## Creating a campaign

Only brand managers (`brand_manager` role) — and workspace owners and admins — can create campaigns.

To create a campaign:

1. Navigate to the brand in the sidebar.
2. Open the brand's **Campaigns** tab.
3. Click **New Campaign**.
4. Enter a name, optional description, and optional date range.
5. Click **Create**.

The campaign starts with `visibility: "private"`. No public URL exists until you publish it.

Campaign names must be unique within a brand. If a name is already taken, the form returns an error.

## Editing and deleting a campaign

Brand managers (and workspace owners/admins) can edit or delete any campaign in the brand.

To edit a campaign, open it from the **Campaigns** tab and update the name, description, or date range. Click **Save**.

To delete a campaign, open it and click **Delete**. Deleting a campaign removes the grouping but does not delete the assets themselves — their `status`, brand tag, and other metadata are unchanged.

## Tagging assets with a campaign

There are two entry points for tagging an asset with a campaign: at generate time or from the Library detail panel.

Any brand member with `creator` or `brand_manager` role — and workspace owners/admins — can assign campaign tags on assets within their brand.

### At generate time

On the **Generate** page, select a brand first. A **Campaign** field appears populated with the campaigns belonging to that brand. Select one before submitting. The generated asset is tagged with the campaign when the asset row is created.

Personal brand assets cannot be tagged with campaigns.

### In Library

Open any asset in [Library](/guides/library/) to see its detail panel. In the **Campaigns** section, check or uncheck campaigns to add or remove the asset from them. Changes take effect immediately.

This is a full replace — the panel sends the complete desired list of campaign IDs, so you can add, remove, or reorganize all at once.

> **Note:** Campaign assignments can be edited by any brand `creator` or `brand_manager` on the asset's brand, and by workspace owners/admins. The assignment is not restricted to the asset's original creator.

### In Review

The Review modal shows a read-only **Campaign** field on the **Info** tab. It displays which campaigns the asset belongs to at the time of review. To change campaign assignments, open the asset in [Library](/guides/library/) instead.

## Public campaign galleries

A campaign can be made public, generating a shareable URL that anyone — including people outside your workspace — can visit to browse the campaign's approved assets.

Only brand managers (and workspace owners/admins) can publish, unpublish, or regenerate a campaign's public link.

### Publishing a campaign

Open the campaign and click **Publish**. OpenCauldron generates a unique slug and sets `visibility` to `"public"`. The public URL takes the form:

```
/c/<brand-slug>/<campaign-slug>
```

For example: `/c/acme/q4-launch-2026`

Copy the URL from the campaign detail page and share it externally.

> **Self-host note:** Publishing requires `R2_PUBLIC_URL` to be configured on the instance. If it is unset, the publish action returns an error. Unpublishing is always permitted even when `R2_PUBLIC_URL` is absent.

### What visitors see

The public gallery is a read-only grid. It shows only assets that are both:

- Tagged with the campaign, **and**
- Have `status: "approved"`

Draft, in-review, rejected, and archived assets do not appear. The gallery loads up to 200 approved assets, ordered by creation date (newest first).

The page carries `noindex, nofollow` robots metadata — it will not be indexed by search engines. Distribute the URL directly rather than relying on search discovery.

### Regenerating or revoking the link

To rotate the public slug (for example, after sharing it somewhere you want to revoke access), open the campaign and click **Regenerate link**. The old URL stops working immediately and a new one is issued.

To make the campaign private again, click **Unpublish**. The public URL returns a not-found page. Assets and their `approved` status are not affected.

## Permissions reference

| Action | Who can do it |
|---|---|
| View campaigns in a brand | Any brand member (`viewer`, `creator`, `brand_manager`) |
| Create a campaign | `brand_manager` on the brand, or workspace `owner`/`admin` |
| Edit campaign metadata | `brand_manager` on the brand, or workspace `owner`/`admin` |
| Delete a campaign | `brand_manager` on the brand, or workspace `owner`/`admin` |
| Tag / untag an asset | `creator` or `brand_manager` on the brand, or workspace `owner`/`admin` |
| Publish / unpublish / regenerate link | `brand_manager` on the brand, or workspace `owner`/`admin` |

Brand member roles are managed on the brand itself. See [Brands](/guides/brands/) for how to add members and assign roles.

The public campaign gallery at `/c/<brand-slug>/<campaign-slug>` requires no authentication and no brand membership. Anyone with the URL can view it.

For details on what happens after an asset is approved and appears in a public gallery, see [Gallery](/guides/gallery/).
