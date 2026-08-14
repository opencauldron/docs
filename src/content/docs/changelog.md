---
title: Changelog
description: Release history and notable changes for Cauldron.
---

## 2026-08-12

### Upscale and Remove background

- **Upscale** adds resolution and detail to any image; **Remove background** cuts the subject out onto a transparent background. One image, one button, no prompt and no settings.
- Both live under the new **Tools** section in the sidebar alongside Reframe, and you can start either from an image you're already looking at in your Library.
- Results save to your Library next to the original and land in the same collections. The original is never touched.
- A before/after view shows what changed, at 100% zoom — an upscale is invisible at screen size.
- Drag a file in from your desktop and it's added to your Library first, so nothing ends up floating outside it.
- Running the same tool on the same image twice shows you the result you already have instead of charging again.
- Free to use, like generating images.

### Upscale and Remove background from connected AI tools

- Connected AI tools can now upscale an image or remove its background — point one at an image in your Library and the result saves back beside it, same as if you'd done it in the studio.
- They can find the image first with the existing search, so you can just say "remove the background from that product shot".
- Everything the studio refuses, a connected tool refuses too — including upscaling a cutout, which would fill the transparency back in with white.

### Remove members, rename brands

- Studio owners and admins can remove someone from the studio via the **⋯** menu next to a member on Settings → Members. They lose access to the studio and every brand in it; their generations and uploads stay where they are.
- You can't remove yourself, and only an owner can remove another owner — so a studio can never end up with nobody in charge.
- Brands can be renamed: the **Kit** tab has a **Name** field. The new name shows everywhere, and the brand's link stays the same so existing bookmarks keep working.

### Google's image models, brought up to date

- The Google card is now **Gemini**, with three tiers: **Flash** for everyday work, **Pro** for studio-grade 4K, and **Lite** for cheap, fast iteration.
- Google switched Imagen 4 off on August 17. Anything you made with it still lives in your Library, and re-running an old Imagen recipe quietly uses the closest Gemini model instead of failing.
- Wide and tall crops work properly now: 21:9, 4:5, 2:3 and the rest used to be offered and then rejected. Flash and Lite also take banner shapes down to 8:1.
- Pro renders true 4K; Flash goes up to 4K or down to a fast 512px draft.
- Seed, negative prompt, and watermark controls no longer appear on Gemini models — they were doing nothing.
- Downloads now carry the right file type. Every generated image used to be saved as `.png` regardless of what it actually was.

---

## 2026-08-09

### Connect your AI tools to the studio

- MCP-capable AI tools can now connect directly to your studio — they can search your Library, read your brand kits, browse models, and generate images that land in your Library like any other generation.
- Create a key under **Connected AI Tools** in your account settings. You're shown it once, it works only for the studio you're in when you create it, and you can revoke it at any time.
- Everything a connected tool does respects your existing brand permissions, billing status, and daily limits.

### Studios can now subscribe

- New **Billing** tab in Settings: subscribe your studio per creator seat and you're unlocked the moment payment clears.
- Only people who create count as seats — client reviewers and shared campaign pages stay free and unlimited.
- Card changes, invoices, plan switches, and cancellation are all self-serve, and adding or removing teammates adjusts your bill automatically.
- Video generation runs on prepaid credits with a published rate card. Credits never expire.
- Your storage use now shows on the billing page, and going over never blocks or deletes anything.

### Workflow pages: shape the LoRA stack and tune every setting

- Workflow pages show the LoRA stack the workflow ships with — reorder, adjust strength, remove, or add compatible LoRAs from the catalog before you generate, and reset to the defaults any time.
- Sampler, steps, guidance and the rest moved into a collapsed **Advanced settings** section that starts from the workflow's tuned defaults and shows how many settings you've changed.
- Studio owners and admins can add or remove workflows for their studio right on the Workflows page.
- Studio operators can tune each workflow's default LoRA stack and settings centrally; new sessions pick the changes up immediately.
- Adult LoRAs stay invisible in studios that haven't enabled mature content — in the catalog, on workflow pages, and at generation time.

### Pick your studio's look — color schemes and light mode

- Four new color schemes join the default look: **Starry Night**, **Kelvin**, **Blueprint**, and **Arc** — pick one under Preferences on your profile.
- **Alchemy**, the bright magical-indigo the studio launched with, is back as a scheme.
- **Dracula** joins too, built from the official palette, with the full chart cast.
- Every scheme comes in both light and dark, with a new **Light / Dark / System** toggle next to the picker.
- Your choice applies instantly, sticks on this device, and doesn't touch anyone else's view.

---

## 2026-08-08

### Slack review threads now sync both ways

- Comments on an asset mirror into the Slack thread under its review message — with your name and avatar, so clients read a conversation, not a bot feed.
- Replies in the Slack thread land back on the asset in the studio, attributed to whoever wrote them — including clients on Slack Connect who don't have a studio account.
- Reactions, edits, and deletes follow along in both directions, and Slack replies ring the submitter's notification bell.

### Folder import got a whole new home

- Importing a folder now takes over the screen instead of squeezing into a small dialog — a rail on the left keeps the destination, progress, and what draft vs approved means in view the whole way through.
- The first step shows the actual files you dropped and a collapsible walkthrough of what happens next.
- Progress feels alive: a big live count, a stage-by-stage timeline, and your own files lighting up as each one is processed — plus honest screens when something waits, disconnects, or fails.
- Review is one collection at a time: pick a collection on the left, see its photos and tags on the right, and choose **Approve now** or **Leave as draft**.
- Run several folder imports at once — minimized imports stack as cards in the corner, each with live progress and a **Review** button when ready.
- Closed the window mid-review? A banner in the Library (and the bell notification) brings the exact review screen back.
- Imports stopped writing junk: the dropped folder's machine name is no longer added as a tag on every file, and collections get a searchable title from what's actually in the photos.
- There's now a visible **Import a folder** button in the Library toolbar — no more knowing to drag a folder.

### Workflows are back — and now curated per studio

- The Workflows section is live again: tuned generation pipelines, each with its own page and settings.
- Workflows are enabled per studio from a central registry — your studio only sees the workflows added for it.
- New studios start with a clean slate; ask your administrator to add workflows from the registry.

### "Reject" is now "Request changes"

- Review actions across the studio say **Request changes** instead of Reject — clearer that the work comes back for revision, not a dead end. Its status reads **Changes requested**.
- Same everywhere: the review queue, bulk actions, filters, status badges, and the Slack buttons.

### Studios are now invite-only

- New accounts no longer get an automatic starter studio — you land directly in the studio you were invited to.
- Accept an invite to a team studio and the untouched starter studio from your signup is cleaned up automatically. Anything you actually used is never touched.

---

## 2026-08-07

### A cleaner sidebar: studio switcher on top, account menu below

- Your studio now lives in a chip at the top of the sidebar — click it to switch studios or jump to **Studio settings**, **Manage brands**, and **Usage**.
- The account menu at the bottom is down to the essentials: What's New, Account settings, help, your XP, and log out.
- Interface scale moved to Account settings under Preferences — same control, same per-device behavior.

### Approve reviews right from Slack

- Submitted-for-review messages in Slack carry **Approve** and **Request changes** buttons, with the asset image shown inline.
- **Request changes** opens a dialog for your feedback note (required), and the submitter gets notified exactly as if you'd reviewed in-app.
- After a decision the Slack message updates in place — who decided, and when, in your own timezone.

### Connect your Slack account

- Link Slack from your profile settings — studio Slack updates then @-mention you instead of just showing your name.
- Your linked identity is also what lets reviews be handled straight from Slack.
- Disconnect any time from the same place.

### Studio wins in Slack

- Pick a Slack channel in Studio settings and your studio's fun moments post there automatically — level-ups, feats (including 7- and 30-day streaks), and new members joining.
- On the 1st of each month, the studio's top creator from last month gets a leaderboard shout-out in the same channel.
- Off by default — nothing posts until an admin sets the channel.

---

## 2026-08-06

### Slack notifications for asset reviews

- Connect a Slack channel and your studio posts a message whenever an asset is submitted for review, approved, or sent back with change requests — with the asset image attached and a link that opens it in the studio.
- Each brand can post to its own Slack channel — set it in the brand kit page, ideal for per-client channels. Brands without one use the studio default.

### Folder imports show live progress again

- Importing a folder shows real progress the whole way through, instead of sitting at 0 while the import quietly finished in the background.
- Type your own tags when importing — the tags field takes free text, alongside the folder suggestion and common-tag chips.

---

## 2026-07-03

### Fixed image edits failing with a false "flagged as sensitive" error

- Image generations — especially edits that use a reference image, like swapping a background — no longer fail intermittently with a "flagged as sensitive" error on ordinary prompts.
- The overly-strict filter behind those false alarms is gone.

---

## 2026-06-27

### Browse your Library by date

- Your Library groups by date automatically — newest first under **Today**, **Yesterday**, **Earlier this week**, and month headers, plus a **Jump to** rail to skip to any period.
- Switch between **Uploaded** and **Captured** to organize by when files were added or when photos were actually taken.
- Click **Timeline** to reveal an upload-volume chart — drag across it, or pick Last 7 days / Last 30 days / This month, to narrow the grid to a date range alongside your other filters.
- Time-filtered views are shareable — the date range lives in the URL.

### Upload assets from anywhere with ⌘K

- Open the command palette (⌘K) and pick **Upload assets** to start an upload from any page.
- Choose files for a plain upload into your active brand, or choose a folder to run the organize-it-for-me import.

---

## 2026-06-26

### We're now called Cauldron

- The studio is now called Cauldron — the new name shows on the sign-in screen, the browser tab, the About dialog, and the emails we send you.
- Same studio, same sign-in, same library, brands, and history — only the name changed.

---

## 2026-06-24

### Drop a whole folder into your Library and it organizes itself

- Drag a folder onto your Library and import every file into one brand in a single pass, instead of uploading and tagging batch by batch.
- Each image and video is auto-tagged and grouped into a handful of collections, with anything uncertain set aside in a Needs-review group — **and no folders are ever created**.
- Pick where it lands by name: the destination step shows your brand (and optional campaign) clearly, so you always know the access boundary before importing.
- Review the result a collection at a time — rename, fix tags, include or skip a group.
- Long imports keep running in the background: minimize to a card, keep working, and get notified when it's ready. Re-dropping the same folder fills only the gaps.

---

## 2026-06-21

### The Assistant can search your library and look things up

- Ask the Assistant to "find my…" or "search my library" and it pulls from your assets, uploaded references, collections, brews, and LoRAs.
- It can look up your brands and their kits, saved brews, and LoRAs on request.
- Ask what a model costs or what it's good for and the Assistant can explain and compare models before you generate.
- Ask it to "polish" or "tighten" a prompt and it rewrites it for you.

### The Assistant can reframe your work and show it to you

- The Assistant can reframe your assets into every social format and notifies you when the crops are ready.
- Ask to "show me my last creation" and it displays the actual image inline, with the usual open-full-size and download controls.
- Ask for "my recent work" and it reaches back past today, so "show me what I made" finds it even if you haven't generated since yesterday.

### Dark mode: muted text is easier to read

- Secondary and helper text in dark mode is brighter, clearing WCAG AA contrast with room to spare.

---

## 2026-06-20

### Reframe, redesigned — a live preview and aspect ratios for any size

- Reframe opens as a full composer: controls on the left, a live preview on the right that updates as you toggle formats and fit.
- Pick by social format **and** by raw aspect ratio (1:1, 4:5, 9:16, 16:9, 2:3, 3:2, 1.91:1, 21:9), so web banners and print sizes aren't stuck behind platform names.
- Formats that share a ratio make a single crop tagged for all of them — Story, Reel, and TikTok become one 9:16 file, not three duplicates.
- Reframing a collection? The preview steps through your images one by one so you can spot-check the batch.
- Download the new crops as a zip from the result, or jump to them in your Library, already filtered and tagged by format.

### Choose the Assistant's chat model — and the model that makes your images

- Two clearly-labeled model menus: a **Chat model** in the message box that powers the conversation, and an **Image model** on the Generate card that makes the picture.
- Pick a specific image model before you generate, or leave it on **Auto**. Your pick sticks for the rest of the conversation.

### A calmer, clearer Assistant

- While the Assistant is thinking or making an image, you see a live status with an elapsed timer instead of a bare spinner — and if it's taking unusually long, it says so and offers to retry.
- If a generation hits a snag, the chat shows a friendly explanation with a **Try again** button instead of a raw error code.
- Replies break into proper paragraphs and wrap at a comfortable reading width. Headings, lists, quotes, and code blocks have clearer rhythm.
- Sending a prompt jumps the chat to the newest message, and the view auto-scrolls as a reply streams — unless you've scrolled up to read.
- Asking for several images in one message now shows all of them.

### Rate the Assistant's answers

- Every Assistant reply and generated image has a quiet thumbs up / thumbs down.
- Thumbs-down opens an optional note (Off-prompt, Wrong style, Bad quality, Not what I meant), or you can skip it.
- Your ratings stick: reopen a conversation and the thumbs you gave are still there.

---

## 2026-06-19

### Reframe — crop a whole shoot for every social format at once

- New **Reframe** tool: crop and resize images into Instagram, Story · Reel · TikTok, and YouTube formats in one go — pick a collection, several images, or a single image.
- Choose **Smart crop** (fills the frame, tracks the subject), **Fit whole image** (pads so nothing is cut off), or **Auto** (both).
- Start it from the sidebar, a collection's ⋯ menu, the library multi-select bar, an image's Tools panel, or by asking the Assistant.
- Watch live progress while it runs, and get a notification when it finishes.
- Outputs land back in the same collection, tagged by format — no new folders.

---

## 2026-06-12

### Cleaner thumbnails

- Thumbnails in the Library and Gallery are uncluttered: the type, status, brand, and creator badges fade in when you hover a tile instead of always sitting on top of the artwork.

---

## 2026-06-06

### Notifications you can actually scan — and act on

- Every notification leads with a thumbnail of the asset it's about.
- Click a review notification and the exact asset opens instantly, right where you are. Approve or request changes without leaving the spot.
- Mentions and replies open straight to the asset's comment thread, focused on the message you were tagged in.
- New **Needs you** tab gathers just the items waiting on you — reviews to do, invites to answer, changes to make — with a count.
- Notifications group by time (Today / This week / Earlier), and approvals read green while change requests read red.

### A faster ⌘K

- ⌘K includes the Assistant, so you can jump straight to chat from anywhere.
- Image and video results show a real thumbnail with the file name and its brand chip.
- Commands split into **Quick actions** and **Go to** navigation, so the two kinds of results read as distinct.

---

## 2026-06-05

### One consistent preview for everything you generate

- Open a result in the Image, Video, or Workflow studio and it appears in the same rich preview you get everywhere else — a big view with zoom, prompt details, ratings, tags, and collections.
- Flip through everything from your session with ← / → right inside the preview.
- Regenerate is one click from the preview, and on images **Use as input** drops the result straight back into your composer.
- Comment threads, downloads, and **Find similar** are available on freshly generated results too.

### Open any asset in place

- Pick an image from ⌘K search and it opens right where you are, in a full preview with all its details.
- The same in-place preview opens from chat results, campaign pages, and profiles.

### Bring your own image — and @-mention — into the Assistant

- Drop a picture into the chat composer — upload, paste, or pick from your library — and the Assistant edits that image.
- New **Use from your library** button opens your workspace images so you can iterate without re-uploading.
- Type `@` to reference an asset or a brand: `@` an image to edit or build from it, `@` a brand to keep the result on-brand.
- Attach up to four images per message.

### Image batches that all show up

- Ask for more than one image and you get all of them — a batch of 2, 3, or 4 no longer quietly comes back with just one when the image service is busy.

---

## 2026-06-04

### Redesigned Home — search, or describe what to create

- Home opens with a personal greeting and a single bar — type to search everything in your studio, or describe something to make.
- The bar opens the ⌘K palette: your matches appear as you type, with "Create an image of …" and "Create a video of …" right below.
- Below the search bar, a **Fresh from the cauldron** feed shows your studio's latest activity.
- A **Your momentum** panel shows your pieces this week, day streak, level, monthly rank, and badges.
- Tap the mic to dictate what you're looking for, or the paperclip to attach an image and go straight to editing, animating, or generating from it.

### Voice typing

- Dictate instead of type — tap the mic in the prompt box and speak your idea; the words drop in at your cursor for you to review and edit before you generate. Nothing sends on its own.
- Dictation knows your setup: the brand, model, and LoRAs you've picked are used to spell tricky names and trigger words correctly.
- The same mic shows up in asset thread replies and in ⌘K search.
- If a recording doesn't go through, your audio is kept so you can retry with one tap.

### The studio fits your screen

- On large and ultrawide monitors, pages use the extra width instead of stranding everything in a narrow center column.
- On big displays the whole interface scales up a notch automatically.
- Choose your own interface scale — Auto, or 90% up to 125%. It's remembered per device.
- Reading and settings pages stay comfortably narrow on purpose.

### A smarter Assistant

- The Assistant writes its own rich, detailed prompts from your idea instead of echoing your words.
- It can see the image it just made, so "make it warmer" or "now at night" iterates on that picture instead of starting over.
- Voice dictation works in the chat composer.
- Rename, archive, or delete any chat from the thread header, and your full history is a click away.

---

## 2026-06-03

### Getting Started quest board

- The first-run setup screen is now **Getting Started** at `/getting-started`. Old `/welcome` links redirect here.
- Your four essentials — complete your profile, create a brand, upload an asset, and make your first piece — are four prominent cards with a progress tally.
- Everything else moved to a separate, optional Bonus list that never counts against your setup.

### Redesigned Brands page with Gallery and List views

- The Brands page has two views you can switch between — a **Gallery** of brand cards and a compact **List** — and it remembers which one you prefer.
- Each brand shows more at a glance: its color, your team's avatars, your role, asset and campaign counts, and when it was last active.
- A search box filters brands by name in either view, and List lets you sort by name or asset count.

---

## 2026-05-31

### Flux 2 Pro is the new default image model

- With the image model set to **Auto**, the studio uses Flux 2 Pro for everything — plain text-to-image, generating from reference images, and editing.
- Flux 2 Pro can work from up to 8 reference images in a single generation.
- The Flux card leads with Flux 2 Pro, with **Klein** (fast, low-cost, LoRA-friendly) and **Kontext** (editing) still selectable. Flux Pro 1.1 and Flux Dev are no longer offered for new generations.

### Your studio's name and logo in the sidebar

- The top of the left sidebar shows your studio's name and logo — set them in Studio settings.
- The account card at the bottom shows your display name instead of your email.

---

## 2026-05-30

### Assistant moved into the main sidebar

- Chat is now **Assistant**, a regular item in the left sidebar right below Home — your studio tools stay visible the whole time you chat.
- Your chat history opens from a **History** button, with a search box, chats grouped by Today / Yesterday / Last week / Older, and a collapsible Archived section.

### Pick your brand once, everywhere

- Brand is now a global control in the top bar, next to the notifications bell — choose it once and it sticks as you move between the Library, the composer, and the gallery.
- Your choice is remembered across page reloads.
- Pick **All brands** to see everything at once, or a specific brand to focus.
- The separate brand pickers inside the Library are gone — the top-bar control is the single place to switch brand.

### Quick actions in ⌘K search

- The ⌘K palette opens with a **Quick actions** section that leads with Create image and Edit image.
- Navigation rows read as verbs — "Go to Library", "Go to Gallery".

---

## 2026-05-29

### Library viewer is now a lightbox

- Opening a Library asset fills the screen with a large, centered viewer instead of a narrow side panel — the image shows full size on a dark stage, at its true shape.
- Click the image to zoom to actual size, scroll to zoom, and drag to pan.
- Step between assets with the arrow keys or on-screen arrows, and press Esc to close.
- Everything from the old panel is still here — rename, rate, tag, collections, campaigns, pin to brand, Find similar, Use as input, Download, Delete, and the Thread tab.

### Workflows now have dedicated pages

- Each workflow opens on its own page with a description of what it does, how long it typically takes, the settings it exposes, and the reference images it needs.
- Settings are tuned per workflow — you only see the controls that matter.
- Workflows that need reference images won't let you generate until you've added them.

### Tidier Library toolbar and reference search

- Text, Hybrid, and Similar search ranking now live behind a single search-settings button that shows your current choice.
- Pressing `/` still jumps your cursor into the Library search box.
- The **Add reference** picker has a search box — search follows the tab you're on, and History shows every match rather than just your most recent.

---

## 2026-05-28

### Composer redesign — model first, simpler settings

- The model picker sits at the top of the composer, above the prompt — pick what you're generating with first, then describe it.
- References are one tap away: a single **Add reference** button opens a unified picker where you can drag and drop, upload, or browse past uploads and your gallery.
- Aspect ratio and image count stay in view; the rest tuck into an **Advanced settings** panel.
- The same refresh landed in the video studio, with first-frame references.

### Generate up to 4 at once — results on the same page

- Results stream in right next to the composer instead of replacing it — your settings stay put and you can keep generating.
- New image-count stepper (1–4) makes several variations in a single click.
- Hover any image in the results feed to download it or use it as a reference, or click to open it full size.
- Your recent generations are restored in the feed when you reload the page.

### Find similar, and search by meaning

- New **Find similar** action on any asset surfaces the closest visual matches in your library — good for spotting variants and near-duplicates across a shoot.
- Works for both uploaded photos and AI generations.
- The search bar has a **Text / Hybrid / Similar** toggle: Text matches exact words, Similar ranks by visual meaning, and Hybrid (the default) blends both.
- If an asset is brand-new and still being indexed, Find similar tells you to check back shortly.

---

## 2026-05-27

### A new way to create — dedicated Image, Edit, and Video studios

- The **Create** button in the sidebar opens a menu: jump straight to a new image, an image edit, a new video, or the Assistant.
- Each is its own focused workspace instead of one crowded page.
- New **Auto** model setting picks the best model for your prompt automatically — or open **Browse models** to filter by provider, capability, and what each model is best for, with speed, max resolution, and reference support shown at a glance.
- Brand kits, references, LoRAs, and every generation setting work exactly as before.

### Library, now with nested collections

- The Library has a left rail: browse your collections as a folder tree and click any collection to filter the grid.
- Create, rename, move, and delete collections right from the rail, and nest them inside one another.
- Deleting a collection removes it and everything nested inside it, but never touches the underlying assets.
- The separate Assets and Collections sidebar items are now a single **Library** entry.
- Gallery now shows only generated media — uploads and imports live in the Library.
- Rate assets 1–5 stars, and filter by star rating or by source (generated / uploaded / imported).
- Select multiple assets to tag, set status, move between brands, add to a collection, download as a zip, or delete.
- Drag a selection of assets straight onto a collection in the rail to file them there.

### A cleaner Home — now a launchpad

- Home is built around what you want to make: a big search/command bar (⌘K), tool tiles, and your most-used Brews as one-click starting points.
- The recent-activity feed, drafts, the review queue, and the weekly throughput card moved to Activity, Gallery, and Review.

### Creators can start campaigns

- Anyone with the **Creator** role on a brand can now create campaigns — previously only Brand Managers could.
- Editing and deleting campaigns is still limited to Brand Managers and studio admins.

---

## 2026-05-26

### No more blacked-out generations

- The Flux, Kling, and Wan models moved to a host that doesn't blank results when its content filter trips.
- Same models, same prompts and reference images — the old provider would silently return a solid-black image.

---

## 2026-05-22

### Brands page opens the real configurator

- Clicking a brand on the Brands page opens its full configurator — color, brand kit, palette, prompt rules, members, and campaigns — instead of a stripped-down name-and-color popup.
- Creating a brand drops you straight into its setup.

---

## 2026-05-21

### Stuck brews clear themselves

- Brews stranded "brewing" — usually when a generation was interrupted before it could start — now time out and clear instead of piling up in your queue.

---

## 2026-05-16

### Search anything from anywhere with ⌘K

- Press ⌘K (or Ctrl+K) from any page to open the search palette — find brands, brews, and assets by name or by meaning.
- Type a word and get instant matches; assets and brews stream in as the search runs.
- An empty palette shows your most recent pages, so jumping back is one keystroke.

### Library search now finds assets by meaning

- Search the library for what an asset looks like, not just what's in its filename or tags — "sunset on a beach" surfaces the right images even if nothing says "sunset".
- Every asset gets a **Find similar** affordance.
- Works on images and short videos; all of your existing assets get processed automatically.

---

## 2026-05-15

### Invite teammates and switch between studios

- New **Settings → Members** tab: invite people by email, change roles, toggle who can generate video, and resend or revoke pending invitations.
- Invitation emails carry a secure 14-day link.
- Strict email match on accept — if the invite went to one address and you're signed in as another, the page tells you to switch accounts first.
- A studio switcher lets you move between studios you belong to.

### Assign brands when you invite someone

- The invite dialog has an **Add to brands** picker — toggle any team brand and the invitee lands as a creator on each one the moment they accept.
- Brand assignments show on each pending invitation row.

### Edit your display name and avatar

- Open your profile and hit **Edit profile** — the same dialog updates your display name and uploads a new avatar in one go.
- Avatars accept PNG, JPEG, or WebP up to 2 MB, and the change shows up everywhere as soon as you save.

### Sidebar redesign — quieter, more focused

- Notifications live in a bell in the top-right of every page header.
- Queue collapses to a small "N brewing" pill next to **+ Create**, and disappears when nothing is in flight. Press `Q` to toggle it from anywhere.
- What's New, Help & docs, and a new Keyboard shortcuts dialog moved into the user menu.
- New **Discover** section at the bottom of the sidebar, with Leaderboard.

---

## 2026-05-13

### Tags and collections in the library

- Tags are first-class — each has a name, a color, and an optional category, and renaming a tag updates it everywhere it's used.
- Open any asset and tag it from the detail panel: type to find an existing tag, or press Enter on a new name to create one.
- New **Tag** and **Collection** buttons in the bulk action bar — select multiple assets and add or remove from up to 200 at once.
- Collections give you reusable, manually curated groups.
- Two new admin pages: **Settings → Tags** (rename, recolor, recategorize, merge, delete) and **Settings → Collections**.

### Consistent asset tiles, and a bulk bar that fits

- Gallery, Library, campaign pages, your profile, and the studio overview share one tile — same layout, hover behavior, and metadata corners.
- The bulk action bar no longer runs off the right edge: the four organize actions collapse into a single **⋯ Organize** menu.
- Disabled actions are dimmed but readable, and the tooltip tells you exactly why each one is unavailable.

---

## 2026-05-12

### Redesigned sign-in emails and "Check your email" page

- Sign-in emails match the studio, and tell you which host you're signing in to, that the link expires, and that it's one-time use.
- After submitting your email you land on a branded page that echoes back the address, so you can spot a typo before hunting in your spam folder.
- Gmail, Outlook, iCloud, Yahoo, and Proton users get a one-click link straight to their webmail.

### Asset details and tiles work properly for uploads

- Opening an uploaded image's details no longer says "Generated with upload" — it reads **Uploaded · date** (or **Imported · date**).
- Uploads show a **File name** block instead of a **Prompt** block.
- Per-file upload rows have meaningful states: queued, uploading with real progress, done, or failed with a one-click retry.
- Errors that aren't worth retrying (file too big, wrong type) skip the retry button.

---

## 2026-05-09

### Workflow picker and a cleaner Workflows page

- New workflow picker in the composer: pick the model first, then the workflow.
- **Multi-Reference Edit** landed as a new workflow — upload a scene image plus one or more reference products and it swaps in the references while preserving pose, lighting, and framing.
- The reference-image affordance reads off the active workflow, so switching workflows updates the upload tile in place.
- Every generated asset records which workflow built it.
- Workflow cards are click-anywhere, with a filter bar (All / Text to Image / Image to Image) and counts.

---

## 2026-05-08

### Generation queue — submit and move on

- Submit a brew and the form clears immediately — no more waiting on a spinner before the next prompt.
- New **Queue** page shows what's brewing now and what finished in the last 24 hours, with thumbnails and live elapsed time.
- The sidebar Queue link shows a live count of brews in flight.
- Stuck brews recover automatically, and stale-looking ones dim and flag their elapsed time.

### Workflows directory

- New **Workflows** page in the sidebar. Browse every workflow the studio knows about, see its settings, and drop into the composer with the right configuration applied.
- New **Flux 2 Klein Edit** workflow — image-to-image tuned for stronger reference adherence.

### Asset details fixes

- Klein Edit generations show the reference image you used in the asset details panel.
- The **Enhanced Prompt** section is hidden when it matches your original prompt — no more confusing duplicate text.

---

## 2026-05-07

### Bulk actions in Library and Gallery

- Hover any card to reveal a checkbox — click to select, shift-click to extend a range, ⌘/Ctrl+A to select everything loaded, Esc to clear.
- A floating action bar appears the moment you select something — submit, approve, request changes, archive, delete, move to brand, or assign campaigns to the whole batch.
- Buttons that don't apply to your selection dim with a count tooltip, so you know exactly what an action will affect.
- Approved assets stay protected — bulk delete and bulk move skip them and tell you which ones need a fork.

### Tag assets to campaigns from anywhere

- The campaign picker appears in the review modal, so managers and creators can group assets while triaging.
- After a generation finishes, a campaign picker shows up next to the brand and brew controls.
- Only creators, brand managers, and studio admins see the picker.

---

## 2026-05-02

### Activity feed

- New **Activity** page in the sidebar — a real-time log of everything happening across your workspace.
- Three tabs: **For You** (events relevant to you — your submissions, approvals, rejections, XP, badges), **My Brands** (all events on brands you belong to), and **Workspace** (every event across the studio, admins only).
- Filter chips narrow the feed to specific event types: approvals, drafts, feats, or level-ups.
- Time filter lets you scope to today, the past 7 days, 30 days, or all time.
- Infinite scroll with cursor-based pagination — the feed stays fast as history grows.

### Campaign tagging across the full workflow

- Tag assets with brand campaigns at two entry points: the Generate page (at creation time) and the Library detail panel (after the fact). The Review modal shows campaign assignments read-only.
- Campaign chips appear on asset cards in the Library so you can scan which initiative an asset belongs to without opening it.
- Workspace teammates can now edit tags and campaign assignments on any shared asset — previously limited to the asset's creator.

### Public campaign galleries

- Share a campaign's approved assets with anyone — no login required.
- Each campaign gets a shareable public URL at `/brands/[slug]/campaigns/[campaign-slug]/public`.
- Only approved assets are visible. Draft, in-review, rejected, and archived assets stay private.
- Brand managers control which campaigns have a public gallery.

### Threads everywhere

- Threads (introduced in Library on 2026-05-01) are now available in the **Gallery** and **Review** modal as well — the Thread tab appears on any asset wherever you open it.

---

## 2026-05-01

### Now called OpenCauldron

- The studio is officially OpenCauldron — the styleguide, sidebar branding, and downloaded filenames all carry the new name.
- Saved files now download as `opencauldron-{id}.webp` / `opencauldron-{id}-original.{ext}` (was `cauldron-…`).
- The seed brand previously named "Cauldron" is renamed to "OpenCauldron" in place — same brand, new label, no asset moves.

### Filmstrip in the review modal

- Inside the review modal, a horizontal filmstrip rail at the bottom now shows what's coming next and what just passed — no more guessing where you are in the queue.
- Click any thumbnail to jump to that asset; the active tile auto-scrolls into the center as you walk the queue with j/k.
- Approved/rejected items stay in the strip, dimmed with a check or X marker, and j/k automatically skip over them so you only land on what still needs a decision.
- Hovering a thumbnail shows the asset's prompt as a tooltip — useful when 52–64px thumbs aren't enough on their own.
- Honors `prefers-reduced-motion`: the strip jumps instantly instead of smooth-scrolling when the OS preference is set.

### Threads on every asset

- Every Library asset now has a Thread tab — pin a conversation right next to the work itself, not in a separate Slack channel.
- Messages stream in real time, so a teammate's note shows up the moment they hit send.
- React with any emoji, @-mention a workspace member, or reply to a specific message to keep tangents readable.
- Paste or drag images, GIFs, and video clips straight into a message — they upload inline and render in the thread.
- Attach an existing Library asset to a message with one click — the recipient sees a tactile asset card that opens the original.
- Mention notifications drop into your bell with a deep-link that opens the asset and jumps to the message.

### Downloads work again

- Fixed Download in the Gallery and Library failing with a silent error on hosts where the storage bucket isn't CORS-configured.
- Files now stream through the app, so the browser always treats them as a download (with the right filename) instead of opening them in a new tab.

---

## 2026-04-30

### Review queue opens into a gallery

- Picking a brand on `/review` now shows a scannable gallery of pending assets — no more forced single-item modal flow.
- Click any tile (or press Enter on it) to open the existing review modal at that asset.
- Closing the modal returns you to the gallery; only the last asset reviewed pops back to the brand list.
- Loading, empty, and error states get tasteful Card treatments — including a Try again button if the queue fetch fails.

### Faster image previews + pick your download size

- Library and Gallery full-size previews now load a compressed WebP version — typically 90%+ smaller than the original, way faster on slow connections.
- Download button is now a split button: one tap grabs the smaller WebP for sharing, or open the menu to pick the original at full quality.
- File sizes are shown right in the menu so you know what you're getting.
- Mobile gets a single full-width download button that always opens the menu — easier to tap.
- Originals are never modified — the WebP is purely additive and silently falls back to the original if anything goes wrong.

### Library, upgraded for teams

- Workspace admins now see every brand's assets in the Library — not just their own.
- Brand filter shows all the brands you have access to, with personal libraries labelled by member name and avatar so multiple Personals are easy to tell apart.
- Each thumbnail now shows a status chip (Draft, In review, Approved, Rejected, Archived) so you can scan workflow state without opening the asset.
- A creator avatar in the bottom-right of every card shows who uploaded or generated it — hover for their name and the action.

### Send feedback from Slack

- Type `/feedback` in Slack to fire off a quick note, bug report, or Loom link straight to the team.
- A short form keeps your feedback in context — no copy-paste, no lost threads.

---

## 2026-04-29

### Prompt enhancer, redesigned

- Enhance now lives inside the prompt box — one tap rewrites your prompt in place, no extra panel to expand.
- Hit Cmd/Ctrl+E to rewrite without leaving the keyboard.
- Don't love the rewrite? An Undo pill appears for 8 seconds to put your original prompt back.
- Click the ▾ next to Enhance for templates (style, lighting, composition, mood, quality) — selections clear after each run so they don't pile up.
- On phones the options open as a bottom sheet for easier tapping.

### Prompt enhancement is live again

- Click ✨ Enhance on the prompt box to rewrite your idea into a more detailed prompt.
- Tuned per model — each image and video model gets its own phrasing tips.

### Cleaner error messages

- When a provider rejects a generation, the toast now shows the actual reason instead of the raw API response.
- Your prompt and signed asset URLs stay out of error messages.
- Applied across every image and video model.

### OpenAI image editing

- OpenAI gpt-image models can now edit existing images — drop a reference into Generate and they'll follow your edit prompt directly.
- Up to four reference images at once for compositing — describe how each should be used in your prompt.
- gpt-image-1 and gpt-image-1.5 use high input fidelity automatically, tuned to preserve faces and fine detail across edits.
- Defaults updated to follow OpenAI's prompting guide — medium quality and opaque backgrounds for more consistent results.

### OpenAI gpt-image-2

- OpenAI's newest image model is now available — sharper instruction-following and higher-fidelity image inputs.
- Picked automatically when you select OpenAI in Generate; older versions (1.5, 1.0, Mini) live under the variant selector.
- Heads up: gpt-image-2 doesn't support transparent backgrounds yet — use 1.5 if you need an alpha channel.

### In-app notifications

- New bell in the sidebar shows submits, approvals, and rejections as they happen.
- Unread count pill on the bell, with a "Mark all read" action in the popover.
- Click a notification to jump straight to the brand's review queue.
- XP, level-ups, and badge unlocks now toast after every successful generation.

---

## 2026-04-28

### Delete brands you no longer need

- Brand managers can now delete a brand from the brands list (⋯ menu on each row) or from the brand's settings page (new Danger Zone).
- When deleting, choose what happens to the brand's assets and brews: move them to another brand, or delete them along with the brand.
- Type the brand's name to confirm — same pattern as GitHub repo deletes.
- Personal brands are hidden from this flow — they're system-managed and stay tied to your account.
- The brands list also stops showing other teammates' Personal brands; you only see your own.

---

## 2026-04-27

### Home page with quick actions

- Renamed Overview to Home — same page, friendlier name.
- New action strip up top: Text → Image, Image → Image, Text → Video, Animate.
- Each tile drops you into Generate with the right mode preselected — Image → Image even picks Flux Kontext for you and opens the reference picker.

### Move assets between brands

- Asset detail panel now has a "Move to brand…" action so a miscategorized asset can be reassigned to the correct brand.
- Available to the asset's creator, brand managers on the source brand, and workspace admins — approved assets must still be forked, not moved.
- Moving an asset resets its status to draft so the new brand's reviewers can vet it.

### Workspaces are now Studios

- Renamed Workspace to Studio across the app — same thing, friendlier name.
- New Studio settings page at `/settings/studio` for renaming, changing the slug, or pinning a logo URL.
- The sidebar studio row now clicks straight through to Studio settings.

### Campaigns

- Group assets by initiative — create campaigns under any brand from `/brands/[slug]/campaigns`.
- Brand managers can create, rename, or delete campaigns.
- API for tagging assets with campaigns is live; gallery filter chip ships next.

### Three-level brew visibility

- Brews are now Private (just you), Brand (everyone on the brand), or Public (Explore tab).
- Promoting a brew to Public still requires a brand manager — creators can flip Private↔Brand on their own.
- Every visibility change is logged so you can see who shared what and when.

### Brand-first sidebar + workspace overview

- Sidebar reorganized — Overview, Personal, Review, then a brand list with one row per client/division.
- New `/overview` page shows your drafts, your pending review queue, recently approved work, and personal stats.
- Workspace switcher up top for users in multiple workspaces.
- **+ Add brand** button for workspace admins; new brands land with a kit you can edit at `/brands/[slug]/kit`.
- Per-brand pages live at `/brands/[slug]/{gallery,brews,kit,members,review}`.

### Brand kit panel on the generate page

- See exactly what your brand kit will inject before you submit — prefix, suffix, banned terms, default LoRAs, anchor refs.
- Override toggle dims the panel and skips kit injection for one-off generations.
- Personal brands skip the panel; their kit is empty by design.

### Drag-and-drop uploads

- New Upload button in the gallery — drop existing photos or short videos straight in.
- Up to 50MB per file; supports PNG, JPEG, WebP, GIF, MP4, MOV, WebM.
- Uploads land as drafts on the brand you pick, ready for the review pipeline.
- Per-file progress with a cancel button — no surprise stuck uploads.

### Gallery now scoped to your brands

- Status badges on every tile — draft, in review, approved, rejected, archived.
- Filter the gallery by status or brand; filters survive in the URL so you can deep-link a view.
- You only see assets you created or that live on a brand you're a member of.
- Empty states distinguish "no matches" from "no access to this brand".

### Review queue (early access)

- New Review tab in the sidebar with a pending-count badge for brand managers.
- Submit a draft for review from the asset detail dialog — your brand manager picks it up from the queue.
- Keyboard-driven approve/reject modal: j/k to walk the queue, a to approve, r to reject, n for a note.
- Approved assets are now immutable — use Edit / Fork to start a new draft from an approved version.
- Personal-brand assets stay out of the review pipeline as expected.

---

## 2026-04-25

### OpenAI image models

- Added gpt-image-1.5, gpt-image-1, and gpt-image-1-mini.
- Native transparent PNG output for product and logo work.

### Help menu and sidebar polish

- New Help menu with Documentation, Report a bug, and About.
- Sidebar now collapses to an icon rail (⌘B).
- Reorganized navigation — account & admin moved to the bottom.

---

## 2026-04-24

### Brew sharing

- Public brew pages with shareable links.
- Browse and remix community brews from the Brews tab.

---

## 2026-04-22

### HuggingFace LoRA support

- Browse and load LoRAs directly from HuggingFace.
- Improved LoRA browser with search and filtering.

---

## 2026-03-26

### References

- Every uploaded reference image is now tracked in a references library with full metadata: dimensions, file size, MIME type, thumbnail, and usage count.
- New **/references page** accessible from the sidebar — a browsable gallery of all uploaded reference images with grid view, infinite scroll, lightbox detail view, download, delete, and Use actions.
- The reference image section on the Generate page now offers two options: **Upload** (new file) and **Browse** (pick from existing). The Browse dialog has two tabs — **Uploads** (previously uploaded references) and **Gallery** (past generations to reuse as references).
- Gallery lightbox now shows a **Reference** button on image assets, navigating to the Generate page with that image pre-loaded.
- Gallery lightbox shows the reference image thumbnail in the parameters panel when a reference was used during generation.
- Reference images (`imageInput`) are now saved and restored with Brews, so saved recipes preserve which reference image was used.
- Usage count increments each time a reference image is used in a generation.

### Navigation

- Added **References** entry to the application sidebar.

---

## 2026-03-25

### LoRA support

- Added full LoRA support for Flux image generation via the fal.ai `flux-lora` endpoint.
- The system automatically routes to fal.ai when one or more LoRAs are active — no configuration change required.
- Up to 5 LoRAs can be stacked per generation, each with an independent weight slider (0–4).
- Trigger words are auto-inserted into the prompt when a LoRA is added.

### /loras exploration page

- New dedicated page for browsing the Civitai LoRA catalog.
- Filter by base model: Flux (ready to generate), SDXL, Pony, Illustrious, SD 1.5, Hunyuan Video, Wan Video.
- Sort by Most Downloaded, Highest Rated, or Newest.
- NSFW toggle with preference saved locally per browser.
- Detail modal with image/video gallery, trigger words, stats, and a link to the Civitai listing.
- Video LoRA previews play inline as silent loops.

### Brews

- Brews are saved generation recipes that capture the model, LoRAs and weights, parameters, and optionally the prompt.
- Save a brew from the Generate page after a successful generation using the **Save as Brew** button.
- Load a brew on the Generate page from the **Brew** popover next to the model selector.
- Each brew tracks a usage count that increments each time the brew is loaded.
- Edit brew name/description or delete brews from the /brews management page.

### Save brews from the Gallery

- The asset lightbox in the Gallery now includes a **Brew** button.
- Clicking it opens the Save as Brew dialog pre-filled with the model and parameters from that generation, allowing you to capture a recipe from any past result.

### Navigation

- Added **Brews** and **LoRAs** entries to the application sidebar.
