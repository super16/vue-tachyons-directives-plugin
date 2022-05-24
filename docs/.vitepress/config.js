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
          link: 'typography/type-scale',
          text: 'Type Scale', 
        },
        {
          link: 'typography/text-align',
          text: 'Text Align', 
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
      text: 'Elements',
      children: [
        {
          link: 'elements/lists',
          text: 'Lists', 
        },
        {
          link: 'elements/forms',
          text: 'Forms', 
        },
      ],
    },
  ]
};
