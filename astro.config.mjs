// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.opencauldron.ai',
  redirects: {
    '/': '/introduction/',
    '/guides/teams': '/getting-started/',
    '/guides/prompting': '/guides/prompts/',
    '/guides/prompting/flux': '/guides/prompts/',
    // Cauldron is a hosted product; the self-hosting and contributing docs are
    // gone. These URLs were public and are likely bookmarked and indexed, so
    // they land somewhere useful instead of 404ing.
    '/self-hosting': '/introduction/',
    '/installation': '/sign-up/',
    '/configuration': '/introduction/',
    '/setup-wizard': '/getting-started/',
    '/contributing': '/introduction/',
    '/contributing/development-setup': '/introduction/',
    '/contributing/contributing-to-docs': '/introduction/',
    '/contributing/code-style': '/introduction/',
    '/contributing/issues-and-requests': '/introduction/',
    '/guides/deploying': '/introduction/',
    '/guides/database': '/introduction/',
    '/guides/storage': '/guides/library/',
    '/guides/adding-providers': '/guides/models/',
    // Env-var reference was a self-hosting artifact: connection strings and
    // storage credentials for an instance the reader no longer runs.
    '/reference/environment-variables': '/introduction/',
  },
  integrations: [
    starlight({
      title: 'Cauldron',
      logo: {
        src: './public/favicon.svg',
      },
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },
      // No GitHub link and no "edit this page" affordance: Cauldron is a hosted
      // product, not an open-source project, so both would advertise a public
      // repo to contribute to. Discord stays — a community channel is normal
      // for a hosted product.
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/opencauldron' },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Get started',
          items: [
            { slug: 'introduction' },
            { slug: 'sign-up' },
            { slug: 'getting-started' },
            { slug: 'concepts' },
          ],
        },
        {
          label: 'Brands & your team',
          items: [
            { slug: 'guides/brands' },
            { slug: 'settings/members' },
            { slug: 'guides/campaigns' },
          ],
        },
        {
          label: 'Your asset library',
          items: [
            { slug: 'guides/library' },
            { slug: 'guides/uploading' },
            { slug: 'guides/finding-assets' },
            { slug: 'guides/gallery' },
          ],
        },
        {
          label: 'Creating',
          items: [
            { slug: 'guides/creating-images' },
            { slug: 'guides/image-editing' },
            { slug: 'guides/tools' },
            { slug: 'guides/creating-video' },
            { slug: 'guides/models' },
            { slug: 'guides/references' },
            { slug: 'guides/brews' },
            { slug: 'guides/loras' },
            { slug: 'guides/prompts' },
            { slug: 'guides/parameters' },
          ],
        },
        {
          label: 'Reviewing & collaborating',
          items: [
            { slug: 'guides/review' },
            { slug: 'guides/threads' },
            { slug: 'guides/activity' },
          ],
        },
        {
          label: 'You & your progress',
          items: [
            { slug: 'guides/profile' },
            { slug: 'guides/xp-and-feats' },
            { slug: 'guides/usage-and-limits' },
          ],
        },
        {
          label: 'Connect your AI tools',
          items: [
            { slug: 'guides/connected-ai-tools' },
            { slug: 'guides/api-keys' },
          ],
        },
        {
          label: 'Managing your studio',
          items: [
            { slug: 'settings/studio' },
            { slug: 'guides/admin' },
          ],
        },
        {
          label: 'Enterprise',
          collapsed: true,
          items: [
            { slug: 'enterprise' },
          ],
        },
        {
          label: 'Releases',
          collapsed: true,
          items: [
            { slug: 'changelog' },
          ],
        },
      ],
      lastUpdated: true,
    }),
  ],
});
