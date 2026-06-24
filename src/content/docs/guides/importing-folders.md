---
title: Importing a folder
description: Drag a whole folder into the Library to import, auto-tag, and group a shoot into one brand — with no folders created.
---

Folder import turns a folder of files into an organized, tagged, searchable set in one pass — straight into one brand, with **zero folders created**. The subfolder names you drop guide how files are grouped, but no folder tree is ever built. It's the fast way to bring in a whole shoot instead of uploading and tagging batch by batch.

## Starting an import

Drag a folder — nested subfolders and all — from your computer onto the Library grid. An import window opens over the Library with a summary of what you dropped: the total file count, a per-type breakdown, and a chip for each top-level subfolder it found.

Dropping loose files (not a folder) still uses the regular [upload](/guides/uploading/). The folder import opens only when your drop contains a folder.

## Step 1 — Destination

Pick the **brand** the import lands in. Brand is the access boundary: everyone on that brand's team sees the import, and only them — there are no per-file permissions. Until you pick a brand, **Import** stays disabled. (Importing into your Personal brand keeps it to just you.)

Optionally, you can also:

- Choose a **campaign** to file the import under — pre-filled from the dropped folder's name.
- Add **base tags** applied to every file — parsed from the folder name, plus a quick-add row of your studio's common tags.

## Step 2 — Import

Files upload directly to storage, several at a time with automatic per-file retry, then process in the background. You see live progress the whole way: how many files are done, the current stage, and a running activity log. You don't have to wait at the screen — see [Run it in the background](#run-it-in-the-background).

## Step 3 — Review by collection

When processing finishes, the import is grouped into a handful of **collections**, biased toward the subfolder names you dropped. Each is a real, flat, brand-scoped collection — never a nested folder tree. Anything that couldn't be placed or tagged with confidence lands in a **Needs review** group, set aside by default.

Each collection card lets you:

- **Rename** the collection.
- **Add or remove tags** across every file in it.
- **Include or skip** the group when you accept.

Click **Accept all** to approve every included group's files in one step. Skipped groups stay as drafts. The Needs-review group is excluded by default — approve those files whenever you like from the Library's Needs-review filter.

## Step 4 — Done

A short summary shows how many files were imported, how many are waiting in review, and confirms **0 folders created**.

## Run it in the background

Long imports don't need you to wait. **Minimize** the import to a card in the corner that shows live progress and collapses to a pill. Keep working anywhere in the studio — when the import finishes you get a notification and the card flips to **ready to review**. Expand it to pick up at the review step.

## How auto-tagging and grouping work

- Every image and supported video is **auto-tagged from your studio's existing vocabulary first**, only creating a new brand tag for a genuinely new concept — so tags stay consistent across imports.
- Grouping uses how similar files look, weighted heavily toward the **subfolder names** you dropped (those capture how you already think about the shoot).
- **RAW files** are imported and flagged "preview pending" rather than failing the batch.

## Re-dropping and partial failures

If some files fail, the rest still import and you're told the real outcome — for example, "138 of 142 imported, 4 failed." Drop the **same folder again** to heal the gaps: files that already imported are skipped, with no duplicate uploads, tags, or collections, and nothing is re-charged. Only the missing files are processed.

## Self-hosting requirements

If you run OpenCauldron yourself, two pieces of infrastructure must be in place for folder import to work end to end:

- **Object storage CORS.** Files upload straight from the browser to your storage bucket, so the bucket needs a CORS policy that allows your app's origin and the `PUT` method. Without it, uploads fail with *"None of the files could be uploaded."* See [Storage → CORS](/guides/storage/#cors--required-for-folder-import).
- **A running import worker.** When the background processing pipeline is enabled (`TRIGGER_SECRET_KEY` set), imports are handed to a durable worker that does the tagging, grouping, and clustering. That worker must be running (or your tasks deployed) — otherwise an import is accepted but sits on **"Waiting to start…"** and never reaches review. For small local imports you can instead leave the pipeline unconfigured to process them inline. See the project's `AGENTS.md` for the exact setup.
