---
title: Getting Started
description: A first-time walkthrough — sign in, set up your workspace, invite teammates, create a brand, and generate your first asset
---

OpenCauldron is an AI media generation studio for teams. This guide walks you through the first things to do after the app is running: confirming your workspace, bringing in teammates, organizing work into brands, and generating your first asset.

If OpenCauldron isn't running yet, start with [Installation](/installation/) first.

## Sign in

Navigate to your OpenCauldron instance and click **Sign in with Google**. Authentication is handled by Google OAuth — you'll need a Google account that matches any domain restriction your admin has configured.

After signing in, you land on **Home** (`/overview`). The workspace name appears at the top of the sidebar. If you see "No studio yet," you aren't a member of any workspace — ask an admin to invite you.

## Your workspace

A workspace is the top-level boundary for your team. Everyone you invite, every brand you create, and every asset generated lives inside one workspace. The workspace name is shown in the sidebar header.

Workspace roles control what members can do:

| Role | What they can do |
|---|---|
| `owner` | Full control: manage members, delete the workspace, grant any role |
| `admin` | Manage members and brands; invite teammates |
| `member` | Generate assets and view shared content |

You are the `owner` of any workspace you created. Teammates you invite are `member` by default unless you assign a different role.

## Invite teammates

Only `owner` and `admin` members can invite teammates.

Workspace member management is available via the API at `POST /api/workspaces/{id}/members`. Pass the teammate's email and the desired role (`member` or `admin`). If the email belongs to an existing user they gain access immediately; if not, a user record is created for that email and they gain access when they sign in.

:::note
A dedicated **Members** settings page is in development. Until it ships, use the API or ask your instance administrator.
:::

:::note
Brand-level roles — `brand_manager`, `creator`, and `viewer` — are separate from workspace roles. You assign those when adding teammates to a specific brand. See [Brands](/guides/brands/) for details.
:::

## Create a brand

A [brand](/guides/brands/) is how you organize work within your workspace. Each brand has its own member list, generation settings (Brand Kit), and approval workflow. You must be `owner` or `admin` to create one.

1. Click **Add brand** at the bottom of the sidebar's brand list, or navigate to **Brands** and click **New brand**.
2. Enter a name (required) and choose a color for the brand label.
3. Confirm. The brand is created and you become its first `brand_manager`.

The brand now appears in your sidebar. Other workspace members won't see it until you add them as brand members.

:::note
Your **Personal** brand is created automatically when you first sign in. It's private to you and works as a personal scratch space. It doesn't have an approval workflow or shared members.
:::

## Generate your first asset

Click **Create** at the top of the sidebar — this navigates to the **Generate** page (`/generate`).

On the Generate page:

1. Choose a model from the model selector. Image models (Flux, Imagen, Ideogram, Recraft, etc.) and video models (Veo, Runway, Kling, etc.) are listed separately.
2. Type a prompt in the text field.
3. Select a brand from the **Brand** selector. Choose the brand you created, or leave it on **Personal** to keep the asset in your private space.
4. Click **Generate**.

Image generations complete synchronously — you see the result in seconds. Video generations are submitted as background jobs; the status updates when the job finishes.

When generation completes, the asset is saved with `status: "draft"`. It's visible to you (and brand managers if you tagged it with a brand) but not yet submitted for approval.

For more on model options, aspect ratios, negative prompts, and advanced parameters, see [Generation Parameters](/guides/parameters/).

## Find your asset in Library

Navigate to **Library** in the sidebar. [Library](/guides/library/) shows every asset you've generated or uploaded, in reverse chronological order.

Your new asset appears at the top of the grid. Each card shows a thumbnail, the brand it belongs to, and its current `status`.

To filter what you see:

- Use the **Brand** filter to show only assets from a specific brand.
- Use the **Status** filter to show only `draft` assets.
- Use the search field to match against the original prompt.

Click any asset to open the detail panel. The panel shows the prompt, model, parameters, and metadata. From here you can:

- Edit brand tags
- Add freeform tags
- Open the **Thread** tab to leave a note or start a conversation with your team (see [Threads](/guides/threads/))
- Open the asset in Gallery and click **Submit for review** if it's tagged with a brand that has an approval workflow (see [Review](/guides/review/))
- Download or delete the asset

## Next steps

Once you have your first asset, here's where to go next:

- **Set up your brand kit** — Add a prompt prefix/suffix, banned terms, and a default LoRA to shape every generation in the brand. See [Brands](/guides/brands/).
- **Organize with campaigns** — Group assets for a specific project or launch. See [Campaigns](/guides/campaigns/).
- **Review and approve** — Submit assets for approval and manage the review queue. See [Review](/guides/review/).
- **Explore the Activity feed** — Track generations, approvals, and team events. See [Activity](/guides/activity/).
