---
title: Library
description: Your working asset workspace — filter, tag, assign campaigns, collaborate, and submit assets for review
---

**Library** is your working asset workspace. It holds every generated, uploaded, and imported file associated with your account, unified in one view. Unlike [Gallery](/guides/gallery/), which is a discovery surface showing public assets across the workspace, Library shows your own assets plus any workspace assets you have access to through a brand. It is where you organize, tag, assign, and move assets through the review pipeline.

## Library vs. Gallery

| Surface | What it shows | Primary actions |
|---|---|---|
| **Library** | Your assets + workspace-accessible assets | Filter, tag, assign campaigns, submit for review, open Thread |
| **Gallery** | All public assets across the workspace | Browse, download, lightbox view, animate, use as reference |

Features like the lightbox, download, delete, animate, and reference flows are covered in the [Gallery guide](/guides/gallery/).

## Browsing your assets

Navigate to **Library** in the sidebar. Assets appear in reverse chronological order — newest first. The list loads 50 assets at a time and advances automatically as you scroll.

Each card shows the asset thumbnail, file name (if set), `source`, `status`, assigned brand, and creation date.

Workspace `owner` and `admin` roles see all assets in the workspace, scoped to brands in that workspace. All other members see only assets they created.

## Filters

The filter bar sits above the asset list. Filters apply immediately and can be combined.

| Filter | Values | Behavior |
|---|---|---|
| **Search** (`q`) | Any text | Full-text search across prompt, file name, and tags. Results are ranked by relevance; cursor pagination is replaced with a hard limit of 200 results when a search query is active. |
| **Brand** | Single brand | Limits results to assets tagged with that brand |
| **Campaign** | Single campaign | Limits results to assets assigned to that campaign |
| **Tag** | One or more tags | See tag operator below |
| **Tag operator** | `or` (default) / `and` | `or` — returns assets matching any of the selected tags. `and` — returns only assets that have all selected tags. |
| **Source** | `generated`, `uploaded`, `imported` (repeatable) | Filters by how the asset was created. Select multiple to combine. |
| **Status** | `draft`, `in_review`, `approved`, `rejected`, `archived` (repeatable) | Filters by the asset's current status in the review pipeline. Select multiple to combine. |

## Tags

Tags are free-form text labels you attach to an asset. They help you organize assets outside of the brand and campaign hierarchy.

To add or edit tags on an asset, open the detail panel and edit the **Tags** field. The change replaces the full tag set on the asset — add all desired tags at once. Tags are stored as plain strings; there is no global tag registry.

You can filter the Library by one or more tags using the **Tag** filter. Use the `and` operator when you need assets that carry every selected tag; use `or` (the default) to cast a wider net.

## Campaign assignment

Assets can belong to one or more [campaigns](/guides/campaigns/). Open the asset detail panel and edit the **Campaigns** field to add or remove campaign assignments. Each campaign must belong to the same brand as the asset.

Campaign assignment is available to any workspace member who can access the asset. The change takes effect immediately.

## Brand tagging

Each asset has a single brand. To change which brand an asset belongs to, use the **Brand** field in the detail panel. A brand-tagged asset becomes visible to all members of that brand.

Brand tagging and tag editing are workspace-collaborative: any workspace member with access to the asset's brand can edit tags, campaigns, and the file name — not only the asset creator. For details on brand membership and roles, see [Brands](/guides/brands/).

## Sharing with the workspace

An asset becomes accessible to your workspace teammates when it has a brand assigned. Any workspace member who belongs to that brand can view the asset. Workspace `admin` and `owner` roles can view all assets in the workspace regardless of brand membership.

Editing tags, campaigns, and the file name on a teammate's asset is permitted for all workspace members who can access that brand.

## Threads

Every asset has a **Thread** tab in the detail panel. Open it to leave a note, @-mention a teammate, or ask a question directly alongside the work.

Threads are scoped to workspace members — anyone in the asset's workspace can read and post. For the full collaboration model — replies, reactions, mentions, attachments, and notifications — see [Threads](/guides/threads/).

## Submitting for review

Assets start with `status: "draft"`. To move an asset into the approval workflow, open it in [Gallery](/guides/gallery/) and click **Submit for review** in the lightbox footer. The `status` changes to `in_review` and the asset enters the review queue for the brand's managers.

Once submitted, the asset status can only be changed by a `brand_manager`. You cannot modify the asset while it is `in_review`.

For the complete review pipeline — approve, reject, re-submit, and self-approval settings — see [Review](/guides/review/).

## Asset status reference

| Status | Meaning |
|---|---|
| `draft` | Default state. Visible to creator and brand managers. |
| `in_review` | Submitted for approval. Awaiting a brand manager decision. |
| `approved` | Approved by a brand manager. |
| `rejected` | Rejected by a brand manager. Asset returns to the creator. |
| `archived` | Manually archived. Excluded from active views unless filtered by `archived`. |
