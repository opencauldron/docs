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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/opencauldron/opencauldron' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/opencauldron' },
      ],
      editLink: {
        baseUrl: 'https://github.com/opencauldron/docs/edit/main/',
      },
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
          label: 'Open source & self-hosting',
          collapsed: true,
          items: [
            { slug: 'self-hosting' },
            { slug: 'installation' },
            { slug: 'configuration' },
            { slug: 'setup-wizard' },
            { slug: 'guides/api-keys' },
            { slug: 'guides/storage' },
            { slug: 'guides/database' },
            { slug: 'guides/deploying' },
          ],
        },
        {
          label: 'Contributing',
          collapsed: true,
          items: [
            { slug: 'contributing' },
            { slug: 'contributing/development-setup' },
            { slug: 'guides/adding-providers' },
            { slug: 'contributing/contributing-to-docs' },
            { slug: 'contributing/code-style' },
            { slug: 'contributing/issues-and-requests' },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          autogenerate: { directory: 'reference' },
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
