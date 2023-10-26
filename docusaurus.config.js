// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to docs',
  tagline: 'Select the product to proceed',
  favicon: 'img/favicon.ico',

  url: 'http://test.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-includes',
      {
        sharedFolders: [
          { source: '../../_shared', target: '../docs/shared'},
        ],

        postBuildDeletedFolders: ['shared'],

        replacements: [
          { key: '{ProductName}', value: 'My long product name for XYZ' },
          { key: '{ShortName}', value: 'XYZ' },
        ],

        embeds: [
          {
            key: 'myAwesomePlugin',
            embedFunction: function(code) { 
              return `...`;
            }
          }
        ],
        injectedHtmlTags: {
          preBodyTags: [`<link rel="stylesheet" href="https://cdn.example.com/style.css" type="text/css">`]
        }
      },
    ],
  ],


  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({

    image: 'img/inimco-social-card.png',
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About this portal',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/inimco/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/inimcocom',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/inimco/',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} docs`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
