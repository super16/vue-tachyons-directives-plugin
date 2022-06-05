module.exports = {
  base: '/vue-tachyons-directives-plugin/',
  lang: 'en-US',
  title: 'Vue Tachyons Directives Plugin',
  description: 'Plugin for Vue.js 3.x to use Tachyons CSS UI Kit',
  themeConfig: {
    repo: 'super16/vue-tachyons-directives-plugin',
    docsDir: 'docs',
    docsBranch: 'main',
    sidebar: {
      '/': docsSidebar(),
    },
  },
};

function docsSidebar() {
  return [
    {
      text: 'Typography',
      children: [
        {
          link: 'typography/font-style',
          text: 'Font Style', 
        },
        {
          link: 'typography/text-align',
          text: 'Text Align', 
        },
        {
          link: 'typography/text-transform',
          text: 'Text Transform', 
        },
        {
          link: 'typography/tracking',
          text: 'Tracking', 
        },
        {
          link: 'typography/type-scale',
          text: 'Type Scale', 
        },
      ],
    },
    {
      text: 'Layout',
      children: [
        {
          link: 'layout/basic-grid',
          text: 'Basic Grid', 
        },
        {
          link: 'layout/clearfix',
          text: 'Clearfix', 
        },
        {
          link: 'layout/floats',
          text: 'Floats', 
        },
      ],
    },
    {
      text: 'Theming',
      children: [
        {
          link: 'theming/background-size',
          text: 'Background Size', 
        },
        {
          link: 'theming/border-radius',
          text: 'Border Radius', 
        },
        {
          link: 'theming/box-shadow',
          text: 'Box Shadow', 
        },
        {
          link: 'theming/hovers',
          text: 'Hovers', 
        },
        {
          link: 'theming/opacity',
          text: 'Opacity', 
        },
      ],
    },
    {
      text: 'Elements',
      children: [
        {
          link: 'elements/forms',
          text: 'Forms', 
        },
        {
          link: 'elements/images',
          text: 'Images', 
        },
        {
          link: 'elements/links',
          text: 'Links', 
        },
        {
          link: 'elements/lists',
          text: 'Lists', 
        },
        {
          link: 'elements/tables',
          text: 'Tables', 
        },
      ],
    },
  ]
};
