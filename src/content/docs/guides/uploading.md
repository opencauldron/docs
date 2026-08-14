---
title: Uploading & organizing
description: Bring brand files into the Library, file them into Collections, tag them, and curate large drops in bulk
---

The Library is where your brand's files live — shoots, logos, kits, exports, and the work you generate. This page covers getting files in and putting them in order: uploading, filing into Collections, tagging, and acting on a large selection at once. For the wider tour of the Library surface, see [The Library](/guides/library/).

## Uploading files

There are two flows, and which one you get depends on whether you bring loose files or a folder.

- **Loose files** open the **Upload to Library** dialog and upload straight into the Library.
- **A folder** opens the full-screen **Import a folder** flow, which organizes the drop for you before anything is final.

### Uploading loose files

- Open the Library and click **Upload to library** in the left rail (or **Upload** above the grid). The **Upload to Library** dialog opens.
- Drag files straight from your computer onto the grid. A drop overlay appears anywhere over the grid, so you don't have to aim for a small target.

Inside the dialog you can drag files in or use **Choose files** for a multi-file picker. Images and video are accepted (PNG, JPG, WebP, GIF, MP4, MOV, WebM) up to 50 MB each. Hidden system files are skipped automatically.

Pick a brand from the brand selector before you upload — files land in the brand that's active when you drop them. With no brand selected, uploads go to your Personal brand.

Every file shows its own row with a live progress bar. The dialog keeps a running summary across the whole batch, so overall status stays visible even with hundreds of files queued. If a file fails, its row shows the reason and a retry control — retry that one file without re-adding the rest. Let in-progress uploads finish before you close the dialog; it warns you if you try to close mid-batch.

## Importing a folder

Bring in a whole folder with the **Import a folder** button in the Library toolbar, with **Choose folder** in the upload dialog, or by dragging a folder onto the page. Any of the three opens the same full-screen import flow.

**Your folder structure is not recreated.** The import doesn't rebuild your subfolders as nested Collections. Instead it reads what's actually in the pictures and groups similar shots into Collections for you — folder names are used as a hint that nudges the grouping, not as a structure to copy. You review and adjust every group before anything is final.

The flow has three steps, with a rail on the left keeping the destination, progress, and what draft versus approved means in view the whole way through.

### 1. Destination

The first step shows the actual files you dropped and asks where they go:

- **Brand** — the access boundary. Everyone on that brand's team sees these files, and only them. This is the one choice you can't soften later.
- **Campaign** — optionally file the import under a [campaign](/guides/campaigns/). Personal space has no team, so it has no campaigns.
- **Tags** — applied to every file as it lands. Type your own (press Enter to add) or pick from the suggested chips. The AI adds its own tags on top, and you can edit both in the review step.

A collapsible walkthrough spells out what happens next, and every choice carries a plain-language explainer.

### 2. Progress

Files upload straight from your browser to storage, then get thumbnails, previews, and AI subject tags, then get grouped. A big live count, a stage-by-stage timeline, and your own file tiles lighting up one by one show where the import is.

The work runs on our servers, not in your tab — **you can minimize the window or close it entirely** and the import keeps going. Minimized imports stack as cards in the corner with live progress and a **Review** button when they're ready, and you can run several at once. If you close the window mid-review, a banner in the Library (and a notification in the bell) brings the exact review screen back.

If something waits, disconnects, or fails, you get a straight answer rather than a bar stuck at 0%. A failed import leaves your originals untouched — re-dropping the same folder retries safely, and files that already uploaded aren't uploaded again.

### 3. Review

Review runs one Collection at a time: pick a group on the left, see its photos and tags on the right, and choose **Approve now** or **Leave as draft** for it.

- **Approve now** — usable across the whole studio the moment you confirm.
- **Leave as draft** — stays in the Library, hidden from the studio's tools, until you approve it there.

Anything you leave off stays a draft in the Library. Nothing is thrown away.

While you're here you can rename a Collection and edit both your tags and the AI's. A Collection whose title came straight from a machine-named folder gets one-click rename suggestions, so you don't end up with a Collection called `631d0320-original`.

Files the grouper wasn't confident about aren't guessed at — they're set aside, imported and safe as drafts, and deliberately can't be bulk-approved from here. Find them in the Library with the **Status** filter set to **Draft** and approve them one at a time.

Imports into your Personal space skip approval entirely — the files are already yours. You just tidy the name and tags.

## Organizing with Collections

Collections are the folders you navigate the Library by. They live in the left rail and nest as deep as you need.

Manage them from the **⋯** menu on any Collection in the rail, or with **New** at the top of the **Collections** list:

| Action | What it does |
|---|---|
| **New collection** / **New sub-collection** | Create a Collection at the top level, or nested inside another |
| **Rename** | Change a Collection's name |
| **Move…** | Move a Collection under a different parent, or back to the top level |
| **Delete** | Remove a Collection and its sub-collections (the assets inside are not deleted) |

To file assets, drag a selection from the grid onto a Collection in the rail. When a Collection is selected, a **Drop assets here to file** target appears under it as a clear place to aim. Re-filing an asset into a Collection it's already in does nothing — no duplicates.

Some Collections are shared across the whole studio rather than scoped to one brand. A shared Collection shows a small diamond marker next to its name, so you can tell studio-wide structure from brand-specific folders at a glance. Studio admins manage shared Collections.

Each Collection shows a count. Turn on **Include nested** to roll sub-collection counts up into the parent; leave it off to count only what's filed directly. The rail also has whole-Library lenses at the top — **All assets**, **Recently added**, and **Unfiled** — so you can find files that still need a home.

## Tagging

Tags are a flat label you can attach to any asset, independent of which Collection it sits in. Each tag has a name, an optional color, and an optional category for grouping.

Add tags from an asset's detail panel:

1. Click an asset in the grid to open its detail panel.
2. Under **Tags**, start typing in the tag field.
3. Pick an existing tag from the list, or type a new name and choose **Create** to make one on the spot.

Tags are shared across your whole studio, so the same label stays consistent everywhere it's used. Studio admins manage the full tag list under **Settings → Tags**, where they can recolor a tag, set its category, rename it (the new name updates everywhere the tag appears), merge two tags into one, or delete a tag. To learn how tags drive search and filtering, see [Finding assets](/guides/finding-assets/).

## Bulk actions

When you're working through a large drop, act on many assets at once instead of one at a time.

Build a selection in the grid:

- Click the checkbox on a tile to select it.
- Shift-click another tile to select the whole range between them.
- Press Cmd/Ctrl+A to select every asset currently loaded.
- Press Esc to clear the selection.

A bar floats at the bottom of the screen showing how many assets are selected. From it you can:

- **Tag** — add or remove tags across the selection.
- Add the selection to a **Collection**.
- Add the selection to a campaign (one brand at a time). See [Campaigns](/guides/campaigns/).
- **Move to brand** — reassign the selection to another brand.
- **Download (zip)** — download every selected file as a single ZIP.
- **Delete** — remove the selection.

The bar also carries review actions (**Submit**, **Approve**, **Request changes**, **Archive**); a control is dimmed when nothing in your selection qualifies. Bulk actions run up to 200 assets at a time — larger selections are handled in batches.

## Curating a large shoot

For culling and rating a big drop, open the first asset to bring up its detail panel, then step through with the **←** and **→** arrow keys. Rate each one 1 to 5 with the star control (click the current rating again to clear it). Rating, tagging, and arrow-stepping let you triage a shoot in one pass without leaving the panel.
