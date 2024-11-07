import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },

  {
    text: '文档目录',
    items: [{ text: '示例', link: '/notes/demo/README.md' },
            { text: '数据来自 10X Genomics', link: '/notes/01_10X_Genomics/README.md' },
            { text: '你的数据不是来自10X Genomics', link: '/notes/02_othersNot10XGenomics/README.md' },
            { text: '数据管理', link: '/notes/03_dataArrangement/README.md' },
            { text: '设计模式?', link: '/notes/04_codeStyle/README.md' },
          ]
  },

  {
    text: '简介和更新日志',
    link: '/notes/intruction.md' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  {
    text: 'Docs Directory',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

