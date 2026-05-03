---
title: Activity
description: Track generations, submissions, approvals, feats, and level-ups across your brands and workspace in one chronological feed
---

Navigate to **Activity** in the top navigation. The feed shows a chronological log of lifecycle events — assets created, submitted for review, approved or rejected, feats earned, and level-ups — scoped to what you are entitled to see.

## Tabs

Three tabs control whose events appear in the feed.

| Tab | What it shows |
|---|---|
| **For you** | Events where you are the actor, workspace-scoped events visible to everyone, and events on assets you created (even if you are not a member of the brand that acted on them) |
| **My brands** | Brand-scoped events on [Brands](/guides/brands/) you are a member of (personal brands are excluded — those surface in **For you**) |
| **Workspace** | All workspace-scoped events across the entire workspace — visible to every workspace member |

The active tab is preserved in the URL (`?tab=for-you|my-brands|workspace`) so refreshing the page or sharing a link returns to the same view.

## Event types

Each row in the feed represents one of the following event types:

| Event | What happened |
|---|---|
| `generation.created` | An asset was generated |
| `generation.submitted` | A creator submitted an asset for review |
| `generation.approved` | A brand manager approved an asset |
| `generation.rejected` | A brand manager rejected an asset |
| `generation.completed` | A generation job finished (deduplicated with `generation.created` when both appear on the same page) |
| `member.earned_feat` | A workspace member earned a feat |
| `member.leveled_up` | A workspace member reached a new level |

For approvals and rejections, see [Review](/guides/review/). For feats and level-ups, see [XP and Feats](/guides/xp-and-feats/).

## Filter chips

Four chips appear above the feed. Select one or more to narrow the event types shown.

| Chip label | Events included |
|---|---|
| **Reviews** | `generation.submitted`, `generation.approved`, `generation.rejected` |
| **Drafts** | `generation.created`, `generation.completed` |
| **Feats** | `member.earned_feat` |
| **Level-ups** | `member.leveled_up` |

Chips are multi-select — you can combine them. Selecting no chips shows all event types. Active chips are reflected in the URL so filtered views are shareable.

## Time range

A dropdown to the right of the chips limits events by age.

| Option | Scope |
|---|---|
| **Today** | Events since UTC midnight today |
| **Last 7 days** | Events from the past 7 days |
| **Last 30 days** | Events from the past 30 days |
| **All time** | No lower bound (default) |

Changing the time range resets the feed to the first page.

## Clearing filters

When any chip or a non-default time range is active, a **Clear** button appears to the right of the time range dropdown. Click it to remove all active filters at once.

## Loading more events

The feed loads 50 events at a time. When more events exist, a **Load more** button appears at the bottom of the list. Click it to append the next page. Switching tabs or changing a filter resets pagination to the first page.

The feed also checks for new events each time the browser tab regains focus. New events prepend to the top of the list without disrupting your scroll position.

## Event cards

Each row shows:

- The actor's avatar with a small verb icon overlaid
- The actor's name, the action taken, and a summary of the target (truncated prompt text, feat name, or level title)
- For brand-scoped events, the brand name appended as "in Brand Name"
- For rejected assets, the rejection note (if one was left) shown below the main line
- A thumbnail of the asset, when available
- A relative timestamp

Clicking a row navigates to the relevant detail surface:

- Asset events open the asset in [Library](/guides/library/)
- Feat events and level-up events open the actor's profile page

## Visibility

Not every event is visible to every member. The feed enforces visibility at query time:

- `private` events are visible only to the actor
- `brand` events are visible to members of that brand
- `workspace` events are visible to all workspace members

The **My brands** tab shows only `brand`-scoped events on brands you belong to. The **Workspace** tab shows only `workspace`-scoped events.
