---
title: Review
description: Submit assets for brand approval, walk the review queue, and approve or reject with keyboard shortcuts
---

The review pipeline is how your team moves assets from a creator's working drafts into approved brand content. Assets follow a fixed lifecycle: `draft` → `in_review` → `approved` or `rejected`. Brand managers control the approve/reject step; creators submit.

Navigate to **Review** in the sidebar to access the queue.

## Asset lifecycle

Every asset starts as `draft` when it is generated or uploaded. From there:

| Status | What it means | Who can trigger it |
|---|---|---|
| `draft` | Created but not submitted | — (default) |
| `in_review` | Submitted and awaiting decision | Creator or brand manager (submit action) |
| `approved` | Accepted by a brand manager | Brand manager (`brand_manager` role or workspace owner/admin) |
| `rejected` | Declined by a brand manager | Brand manager (`brand_manager` role or workspace owner/admin) |
| `archived` | Manually archived from any non-approved status | Brand manager or workspace owner/admin |

Transitions are enforced strictly — no skipping. An `in_review` asset can only move to `approved` or `rejected`, not back to `draft` directly. Approved assets are immutable; to make changes, fork the asset into a new draft.

> Assets on your Personal brand cannot enter the review pipeline. Only assets tagged to a non-personal brand can be submitted.

## Submitting an asset for review

Open the asset in [Gallery](/guides/gallery/). In the lightbox footer, click **Submit for review**. This button is visible only when the asset's status is `draft`.

The asset's status changes to `in_review`. Every brand manager on that brand — plus workspace owners and admins — receives a notification with a link to the review queue.

Once submitted, the creator cannot edit or re-submit the asset while it is `in_review`. If a brand manager rejects it, the asset moves to `rejected` and the creator receives a notification. At that point the creator can regenerate or create a new draft asset.

## The Review queue

Navigate to **Review** in the sidebar. The page shows a card for every brand you have approval rights on, with a count of pending assets.

You see a brand card if:
- You hold the `brand_manager` role on that brand, **or**
- You are a workspace owner or admin (you inherit review rights on every non-personal brand)

Each card shows the brand name, its color, and the number of `in_review` assets. Cards with no pending assets are dimmed and show **Empty**.

Click **Open queue** on a brand card to load that brand's pending assets into a responsive grid below. Assets are ordered oldest-first (FIFO) so the longest-waiting submissions surface at the top.

For details on brand roles and how to assign them, see [Brands](/guides/brands/).

## The Review modal

Click any asset tile in the grid to open the Review modal. The modal is split into two panes.

**Left pane — media:**

- Full image or video player
- Filmstrip rail along the bottom showing all pending assets in the current session; decisioned tiles are dimmed with an approved/rejected marker
- Chevron buttons to step forward and back (also: `j` / `k` on keyboard)

**Right pane — Info and Thread tabs:**

The **Info** tab shows:

| Field | What it contains |
|---|---|
| Model | The model that generated the asset |
| Campaign | Any campaigns the asset is tagged with (read-only) |
| Prompt | The original prompt text |
| Brand-kit prompt | The brand-enhanced prompt, if prompt enhancement was used |
| Brand kit overridden | A warning badge if the creator disabled the brand kit for this generation |
| Note | An optional free-text field for rejection feedback or reviewer notes |

The **Thread** tab opens the asset's conversation thread. Use it to leave notes, ask the creator a question, or check prior feedback before deciding. See [Threads](/guides/threads/) for message and mention mechanics.

## Approving and rejecting

With an asset open in the modal, use the buttons at the bottom of the right pane:

- **Reject** — moves the asset to `rejected`. You can add an optional note before clicking. The creator receives a notification with your note if you included one.
- **Approve** — moves the asset to `approved`.

> If you submitted the asset yourself, you can only approve it when the brand's **self-approval** setting is enabled. When self-approval is off, the **Approve** button is disabled for your own submissions and a notice appears. A different brand manager must approve in that case.

Each brand's self-approval setting is configured in brand settings. See [Brands](/guides/brands/) for how to change it.

### Keyboard shortcuts

When the **Info** tab is active, keyboard shortcuts are available:

| Key | Action |
|---|---|
| `j` | Next asset (skips already-decisioned tiles) |
| `k` | Previous asset (skips already-decisioned tiles) |
| `a` | Approve (only if self-approval is permitted for this asset) |
| `r` | Reject |
| `n` | Focus the note field |
| `Esc` | Close the modal |

Shortcuts are suspended while the **Thread** tab is active so that typing in the composer does not trigger queue navigation.

## After a decision

**After approval:** The asset's status is `approved`. Approved assets are eligible to appear in public campaign galleries if their campaign's visibility is set to `"public"`. See [Campaigns](/guides/campaigns/) for how campaign visibility works.

**After rejection:** The asset's status is `rejected`. The creator receives a notification. The rejected asset remains in the creator's Library where they can view any rejection note, then generate a new draft.

**Audit trail:** Every status transition writes a row to the review log — actor, from-status, to-status, timestamp, and any note — giving a full history of every asset's review path.

## Notification behavior

| Event | Who is notified |
|---|---|
| Asset submitted | All brand managers on the brand + workspace owners/admins |
| Asset approved | The asset's creator (if they are not the approver) |
| Asset rejected | The asset's creator (if they are not the rejecter) |

Notifications appear in the bell icon in the top bar. The notification links back to the brand's review queue. Review-related events also appear in the [Activity](/guides/activity/) feed under the **My Brands** tab.
