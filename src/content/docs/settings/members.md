---
title: Members & roles
description: Invite your team, set studio roles, and give each brand the right managers, creators, and viewers
---

Cauldron has two layers of access. Your **Studio** is the team's shared workspace — everyone who can sign in belongs to it. Inside the studio, each [brand](/guides/brands/) has its own members and its own roles. Adding someone to the studio lets them sign in; adding them to a brand decides what they can do with that brand's work.

Keep both layers in mind: a studio Admin still needs to be a brand Manager to approve work on a given brand, and a studio Member can have a different role on every brand they join.

## Studio members

Studio membership controls who can sign in to your studio. Manage it under **Settings → Members**. The page is owner and admin only — if you're a studio Member, you'll see a note asking you to contact an owner or admin.

### Studio roles

You set a studio role when you invite someone, and you can change it later from the **Members** list.

| Role | What they can do |
|---|---|
| Owner | Full control of the studio, including managing members and assigning the Owner role |
| Admin | Manage members and brands across the studio |
| Member | Sign in and work on the brands they belong to |

Only an Owner can assign the Owner role. Admins can invite and manage Members and other Admins.

### Video generation permission

Each studio member has a separate **Video** switch. Image generation is on for everyone; video is off by default and you turn it on per person. You can set it when you invite someone, or flip it later in the **Members** list. Image and video models are picked for you by **Auto** unless you choose one yourself — see [Models](/guides/models/).

### Inviting people to the studio

1. Go to **Settings → Members** and click **Invite people**.
2. Enter the person's email address.
3. Choose their studio role: **Member**, **Admin**, or **Owner** (Owner is available only if you're an owner).
4. Turn on **Allow video generation** if they need it.
5. Optionally select one or more brands to add them to. They join each selected brand as a **Creator**. Leave this blank to invite them to the studio only.
6. Click **Send invitation**.

Each invite creates a secure link that's valid for 14 days. If email delivery is set up, the invitation is emailed automatically. If it isn't, you'll get a prompt to copy the link and share it yourself.

### Pending invitations

Invitations that haven't been accepted yet appear in the **Pending invitations** list, showing the role, the expiry date, and any brands attached. Open the menu next to an invite to:

- **Copy accept link** — copy the secure link to share directly.
- **Resend email** — send the invitation again and refresh its expiry.
- **Revoke** — cancel the invitation so the link no longer works.

## Brand members

Brand membership controls what someone can do on a specific brand: generate, manage the brand kit, or only look. You manage it from a brand's **Members** page, reached from the [brand](/guides/brands/) itself. Brand managers and studio admins can make changes here; everyone else sees a read-only view.

### Brand roles

| Role | What they can do |
|---|---|
| Brand manager | Invite and remove members, edit the brand kit, and approve assets |
| Creator | Generate, save to the gallery, and propose assets for review |
| Viewer | Read-only access to this brand |

Brand managers handle approvals — see [Review](/guides/review/) for how work moves from proposed to approved.

### Adding members to a brand

1. Open the brand and go to its **Members** page.
2. Under **Invite by email**, enter the teammate's email address.
3. Choose a role: **Brand manager**, **Creator**, or **Viewer**.
4. Click **Invite**.

To change someone's role later, pick a new role from the dropdown next to their name. To remove someone, use the remove control on their row and confirm.

Every brand needs at least one Brand manager. You can't demote or remove the last Brand manager on a brand — promote another member first.

Personal brands aren't shared, so they have no member management. Create a team brand to invite collaborators.

## Two layers, together

- **Studio role** decides whether someone can sign in and how much of the studio they can administer.
- **Brand role** decides what they can do on each brand they belong to.

A typical setup: invite a teammate to the studio as a **Member**, then add them to the brands they'll work on as a **Creator**, and promote a lead on each brand to **Brand manager** so they can approve work. For studio-wide settings beyond members, see [Studio settings](/settings/studio/).
