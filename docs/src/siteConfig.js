// List of projects/orgs using your project for the users page.
export const siteConfig = {
  editUrl: 'https://github.com/anymaniax/orval/edit/master/docs/src/pages',
  copyright: `Copyright © ${new Date().getFullYear()} Victor Bury. All Rights Reserved.`,
  repoUrl: 'https://github.com/anymaniax/orval',
  discordUrl: 'https://discord.gg/6fC2sjDU7w',
  algolia: {
    appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  },
};
