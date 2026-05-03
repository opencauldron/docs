---
title: Threads
description: Per-asset conversation threads — leave notes, @-mention teammates, and attach media right next to the work.
---

Every asset in OpenCauldron has a Thread — a persistent conversation surface attached to that asset. Use it to leave feedback, ask questions, loop in a teammate, or attach a reference file, all in context.

Threads are scoped to your workspace. Anyone who can view the asset can read and post in its thread.

## Where threads appear

A **Thread** tab is available anywhere assets are viewed:

- **[Library](/guides/library/)** — open any asset in the detail panel, then click the **Thread** tab
- **[Gallery](/guides/gallery/)** — open any asset in the lightbox, then click the **Thread** tab
- **[Review modal](/guides/review/)** — open any asset in the review queue; the **Thread** tab is available alongside the approve/reject controls

The thread is the same conversation regardless of where you open it. A message posted from the Gallery lightbox appears instantly in the Library detail panel and the Review modal.

## Real-time messaging

Messages appear in real time using a persistent connection to the server — no refresh needed. When a teammate posts, their message lands in your thread without any action on your part.

The connection uses Server-Sent Events (SSE). If the connection drops, the client reconnects automatically and backfills any messages posted during the gap.

## Sending a message

Type your message in the composer at the bottom of the thread panel. Press `⌘↵` on Mac or `Ctrl+↵` on Windows to send. `Enter` inserts a newline.

Messages are limited to 4,000 characters. A character counter appears near the limit.

## Replying to a message

Click **Reply** on any message to set it as your reply target. A pill above the composer shows who you are replying to and a snippet of their message. Your reply posts as a top-level message in the timeline but carries a "Replying to" badge pointing back to the original.

Replies attach to the root message. If you reply to a reply, your message still attaches to the original parent.

Press `Esc` to clear the reply target before sending.

## Reactions

Hover over any message to reveal the reaction control. Click it to open the emoji picker and select any standard emoji. Click a reaction chip below a message to toggle your own reaction on or off.

Reaction counts update in real time for everyone in the thread. Custom emoji are not supported in v1.

## @-mentions

Type `@` anywhere in the composer to open the mention typeahead. It filters workspace members as you type — by display name or handle. Use `↑` / `↓` to navigate, `Enter` or `Tab` to select, `Esc` to dismiss.

When you select a member, their handle is inserted as `@handle` in the message body. The typeahead shows up to 8 matches.

When a message is sent with a mention, that workspace member receives a **thread mention** notification in their bell. The notification carries a deep link that opens the asset and scrolls to the message.

## Thread reply notifications

When someone replies to your message, you receive a **thread reply** notification in your bell. Like mention notifications, it links directly to the asset and the reply.

## Attachments

You can attach files to any message in three ways:

- **Paste** — paste an image or video clip from your clipboard directly into the composer
- **Drag and drop** — drag files onto the composer; a drop target indicator appears
- **File picker** — click the attachment icon in the composer toolbar to choose files

Accepted file types are: `image/png`, `image/jpeg`, `image/webp`, `image/gif`, `video/mp4`, `video/quicktime`, `video/webm`.

Attachment limits per message:

| Limit | Value |
|---|---|
| Max attachments | 10 |
| Max size per file | 25 MB |
| Max total per message | 100 MB |

Attachments upload in the background while you finish writing. The **Send** button is disabled until all uploads resolve. If an upload fails, a retry option appears on the attachment tile.

### Attaching from Library

Click the **Library** icon in the composer toolbar to open the asset picker. Select any asset from your [Library](/guides/library/) to attach it as an `asset_ref` link. Asset references bypass the file size limits — no upload occurs.

## Editing and deleting messages

Hover over one of your own messages to reveal the **Edit** and **Delete** controls.

- **Edit** — opens an inline editor. Save to update the message; a small "edited" marker appears.
- **Delete** — removes the message body. The row remains as a placeholder so reply chains stay coherent.

Workspace `owner` and `admin` roles can delete any member's message.

## Viewing older messages

The thread loads the most recent messages first. If there are older messages above the visible window, scroll to the top of the list to load them. Loading happens automatically as you approach the top.

## Access

Threads are workspace-scoped. You can read and post in a thread if you have access to the underlying asset. Access is determined by the asset's brand membership — see [Brand management](/guides/brands/) for how brand members and roles are configured.

If you open a thread you don't have access to, the panel displays an error message rather than thread content.
