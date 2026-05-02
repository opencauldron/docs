// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.opencauldron.ai',
  redirects: {
    '/': '/introduction/',
  },
  integrations: [
    starlight({
      title: 'OpenCauldron',
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
          label: 'Getting Started',
          items: [
            { slug: 'introduction' },
            { slug: 'installation' },
            { slug: 'setup-wizard' },
            { slug: 'configuration' },
            { slug: 'guides/api-keys' },
          ],
        },
        {
          label: 'Generating',
          items: [
            { slug: 'guides/models' },
            { slug: 'guides/parameters' },
            { slug: 'guides/prompts' },
            { slug: 'guides/image-editing' },
            { slug: 'guides/loras' },
            { slug: 'guides/brews' },
            { slug: 'guides/gallery' },
            { slug: 'guides/references' },
          ],
        },
        {
          label: 'Prompting Guides',
          items: [
            { slug: 'guides/prompting' },
            { slug: 'guides/prompting/flux' },
          ],
        },
        {
          label: 'Team & Usage',
          items: [
            { slug: 'guides/teams' },
            { slug: 'guides/brands' },
            { slug: 'guides/usage-and-limits' },
            { slug: 'guides/xp-and-feats' },
            { slug: 'guides/admin' },
          ],
        },
        {
          label: 'Infrastructure',
          items: [
            { slug: 'guides/storage' },
            { slug: 'guides/database' },
            { slug: 'guides/deploying' },
          ],
        },
        {
          label: 'Contributing',
          items: [
            { slug: 'contributing' },
            { slug: 'contributing/development-setup' },
            { slug: 'contributing/contributing-to-docs' },
            { slug: 'guides/adding-providers' },
            { slug: 'contributing/code-style' },
            { slug: 'contributing/issues-and-requests' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Releases',
          items: [
            { slug: 'changelog' },
          ],
        },
      ],
      lastUpdated: true,
    }),
  ],
});
