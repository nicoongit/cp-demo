/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  flow1: [
    {
      type: "category",
      label: "Flow1",
      link: {
        type: "generated-index",
        slug: "/flow1",
      },
      collapsed: true,
      items: [
        "flow1/overview",
        "flow1/initial-user-flow",
      ],
    },
  ],

  flow2: [
    {
      type: 'category',
      label: 'Flow2',
      link: {
      type: 'generated-index',
      slug: "flow2"
            },
     collapsed: true,
        items: [
          'flow2/overview',
          'flow2/overview1',
          'flow2/initial-user-flow',

        ],
    },
  ],

  flow3: [
    {
      type: 'category',
      label: 'Flow3',
      link: {
      type: 'generated-index',
      slug: "flow3"
            },
     collapsed: true,
        items: [
          'flow3/overview',
          'flow3/overview1',
          'flow3/initial-user-flow',

        ],
    },
  ],


};

module.exports = sidebars;
