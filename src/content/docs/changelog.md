---
title: Changelog
description: Release history and notable changes for Cauldron.
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
- Self-host setup wizard defaults the R2 bucket to `opencauldron`.

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

### Self-hosted Docker distribution

- Self-host OpenCauldron with Docker — `docker compose up -d` and you're running.
- Pre-built multi-arch images for Apple Silicon, Intel/AMD, and Raspberry Pi 4+.
- Database migrations and admin bootstrap run automatically on first boot.
- One-line upgrade path — `docker compose pull && docker compose up -d`.

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
- Powered by Mistral — set `MISTRAL_API_KEY` in your env to enable it.
- Tuned per model — gpt-image, Imagen, Flux, and video providers get model-specific phrasing tips.

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
- Workspace switcher up top for users in multiple workspaces (hosted only).
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

## 2026-04-26

### License updated to Sustainable Use License v1.0

- OpenCauldron is now under the Sustainable Use License v1.0 (the same license used by n8n).
- Free for your own internal business use, non-commercial use, and personal use.
- Free distribution permitted for non-commercial purposes.
- Commercial hosting as a competing service requires a separate agreement.

---

## 2026-04-25

### OpenAI image models

- Added gpt-image-1.5, gpt-image-1, and gpt-image-1-mini.
- Native transparent PNG output for product and logo work.
- Add `OPENAI_API_KEY` to `.env` to enable.

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
- Optional `CIVITAI_API_KEY` for higher Civitai API rate limits.

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
