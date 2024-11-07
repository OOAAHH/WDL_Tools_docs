import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

// 示例
const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: 'auto',
})

// 10X Genomics
const zh10xDemoNote = defineNoteConfig({
  dir: '01_10X_Genomics', // 目录名
  link: '/01_10X_Genomics/', // 网页链接
  sidebar: [
        // side bar 1，导引
        {
          text: '导引',
          link: 'README.md', 
        },
        // side bar 2，单细胞转录组测序/scRNA-seq
        {
          text: '单细胞转录组测序/scRNA-seq',
          link: 'scRNA-seq.md', // 相对路径, 最终拼接
        },
      ],
    },
)

// 02_othersNot10XGenomics
const zhOtherDemoNote = defineNoteConfig({
  dir: '02_othersNot10XGenomics',
  link: '/02_othersNot10XGenomics/',
  sidebar: [
    // side bar 1，导引
    {
      text: '导引',
      link: 'README.md',
    },
  ],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote,zh10xDemoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

