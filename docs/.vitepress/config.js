module.exports = {
  base: '/vue-tachyons-directives-plugin/',
  lang: 'en-US',
  title: 'Vue Tachyons Directives Plugin',
  description: 'Plugin for Vue.js 3.x to use Tachyons CSS UI Kit',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/vue-tachyons-directives-plugin/favicon.ico'
    }],
  ],
  themeConfig: {
    repo: 'super16/vue-tachyons-directives-plugin',
    docsDir: 'docs',
    docsBranch: 'main',
    sidebar: [
      {
        text: 'Typography',
        collapsible: true,
        items: [
          {
            link: '/typography/font-family',
            text: 'Font Family', 
          },
          {
            link: '/typography/font-style',
            text: 'Font Style', 
          },
          {
            link: '/typography/font-weight',
            text: 'Font Weight', 
          },
          {
            link: '/typography/line-height',
            text: 'Line Height', 
          },
          {
            link: '/typography/measure',
            text: 'Measure', 
          },
          {
            link: '/typography/text-align',
            text: 'Text Align', 
          },
          {
            link: '/typography/text-decoration',
            text: 'Text Decoration', 
          },
          {
            link: '/typography/text-transform',
            text: 'Text Transform', 
          },
          {
            link: '/typography/tracking',
            text: 'Tracking', 
          },
          {
            link: '/typography/type-scale',
            text: 'Type Scale', 
          },
        ],
      },
      {
        text: 'Layout',
        collapsible: true,
        items: [
          {
            link: '/layout/basic-grid',
            text: 'Basic Grid', 
          },
          {
            link: '/layout/clearfix',
            text: 'Clearfix', 
          },
          {
            link: '/layout/floats',
            text: 'Floats', 
          },
        ],
      },
      {
        text: 'Theming',
        collapsible: true,
        items: [
          {
            link: '/theming/background-size',
            text: 'Background Size', 
          },
          {
            link: '/theming/border-radius',
            text: 'Border Radius', 
          },
          {
            link: '/theming/box-shadow',
            text: 'Box Shadow', 
          },
          {
            link: '/theming/hovers',
            text: 'Hovers', 
          },
          {
            link: '/theming/opacity',
            text: 'Opacity', 
          },
        ],
      },
      {
        text: 'Elements',
        collapsible: true,
        items: [
          {
            link: '/elements/forms',
            text: 'Forms', 
          },
          {
            link: '/elements/images',
            text: 'Images', 
          },
          {
            link: '/elements/links',
            text: 'Links', 
          },
          {
            link: '/elements/lists',
            text: 'Lists', 
          },
          {
            link: '/elements/tables',
            text: 'Tables', 
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/super16/vue-tachyons-directives-plugin'
      },
    ],
  },
};
