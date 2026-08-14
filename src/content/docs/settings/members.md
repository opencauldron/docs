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
| Guest | Browse and comment on the brands you add them to — and sign off on work if you make them an Approver. Guests can never generate anything |

Only an Owner can assign the Owner role. Admins can invite and manage Members and other Admins.

### Guests are free

**Guest** is the role for a client or an outside stakeholder. A Guest can look at the brands you add them to, comment in threads, and — paired with the brand **Approver** role — approve work or request changes. What a Guest can never do is create: no generating, no matter which brand role they hold.

Because they don't create, Guests don't take a seat and cost nothing. Guests also only ever see the brands you add them to, never the rest of your studio.

You can switch an existing member to Guest and back at any time. Their past work stays where it is, and their brand assignments are remembered for when you switch them back.

### Video generation permission

Each studio member has a separate **Video** switch. Image generation is on for everyone; video is off by default and you turn it on per person. You can set it when you invite someone, or flip it later in the **Members** list. Image and video models are picked for you by **Auto** unless you choose one yourself — see [Models](/guides/models/).

### Inviting people to the studio

1. Go to **Settings → Members** and click **Invite people**.
2. Enter the person's email address.
3. Choose their studio role: **Guest**, **Member**, **Admin**, or **Owner** (Owner is available only if you're an owner).
4. Turn on **Allow video generation** if they need it. This doesn't appear for a Guest, who can't generate at all.
5. Optionally select one or more brands to add them to. A Member, Admin, or Owner joins each selected brand as a **Creator**; a Guest joins as an **Approver**. Leave this blank to invite them to the studio only — though a Guest with no brands sees nothing.
6. Click **Send invitation**.

Each invite creates a secure link that's valid for 14 days. If email delivery is set up, the invitation is emailed automatically. If it isn't, you'll get a prompt to copy the link and share it yourself.

### Pending invitations

Invitations that haven't been accepted yet appear in the **Pending invitations** list, showing the role, the expiry date, and any brands attached. Open the menu next to an invite to:

- **Copy accept link** — copy the secure link to share directly.
- **Resend email** — send the invitation again and refresh its expiry.
- **Revoke** — cancel the invitation so the link no longer works.

### Removing someone from the studio

Open the **⋯** menu next to a member in the list and choose **Remove from studio**, then confirm. They lose access to the studio and to every brand in it. Their generations and uploads stay exactly where they are, and you can invite them back at any time.

Two guardrails keep a studio from ending up with nobody in charge: you can't remove yourself, and only an Owner can remove another Owner.

## Brand members

Brand membership controls what someone can do on a specific brand: generate, manage the brand kit, or only look. You manage it from a brand's **Members** page, reached from the [brand](/guides/brands/) itself. Brand managers and studio admins can make changes here; everyone else sees a read-only view.

### Brand roles

| Role | What they can do |
|---|---|
| Brand manager | Invite and remove members, edit the brand kit, and approve assets |
| Creator | Generate, save to the gallery, and propose assets for review |
| Approver | Approve work or request changes on it — and nothing else. The right role for a client |
| Viewer | Read-only access to this brand |

Brand managers and Approvers handle approvals — see [Review](/guides/review/) for how work moves from proposed to approved. An Approver sees the brand's review queue and its pending badge just like a manager does, but can't touch the brand kit, the roster, or anything else.

### Adding members to a brand

1. Open the brand and go to its **Members** page.
2. Under **Invite by email**, enter the teammate's email address.
3. Choose a role: **Brand manager**, **Creator**, **Approver**, or **Viewer**.
4. Click **Invite**.

To change someone's role later, pick a new role from the dropdown next to their name. To remove someone, use the remove control on their row and confirm.

Every brand needs at least one Brand manager. You can't demote or remove the last Brand manager on a brand — promote another member first.

Personal brands aren't shared, so they have no member management. Create a team brand to invite collaborators.

## Two layers, together

- **Studio role** decides whether someone can sign in, whether they can create at all, and how much of the studio they can administer.
- **Brand role** decides what they can do on each brand they belong to.

The two are independent axes, not one ladder — which is what makes a free client reviewer possible. A client is a **Guest** on the studio and an **Approver** on their brand: they sign off on their own campaigns, they can't generate, and they cost nothing.

A typical setup: invite a teammate to the studio as a **Member**, then add them to the brands they'll work on as a **Creator**, and promote a lead on each brand to **Brand manager** so they can approve work. Invite the client as a **Guest** on just their brand. For studio-wide settings beyond members, see [Studio settings](/settings/studio/).
