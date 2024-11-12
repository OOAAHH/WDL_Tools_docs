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
  link: '/01_10X_Genomics', // 网页链接
  sidebar: [
        // side bar 1，导引
        {
          text: '导引',
          link: 'README.md', 
        },
        // side bar 2，单细胞转录组测序/scRNA-seq
        {
          text: 'scRNA-seq',
          link: 'scRNA-seq.md', // 相对路径, 最终拼接
        },

        // - [ATAC-seq](./ATAC-seq.md)
        {
          text: 'ATAC-seq',
          link: 'ATAC-seq.md', // 相对路径, 最终拼接
        },
        // - [VDJ-seq](./VDJ-seq.md)
        {
          text: 'V(D)J-seq',
          link: 'VDJ-seq.md', // 相对路径, 最终拼接
        },
        // - [Spatial-seq](./Spatial-seq.md)
        {
          text: 'SpaceRanger',
          link: 'Spatial-seq.md', // 相对路径, 最终拼接
        },
        // - [Arg multi data](./Arg-multi-data.md)
        {
          text: 'Arg multi data',
          link: 'Arg-multi-data.md', // 相对路径, 最终拼接
        },
      ],
    },
)

// 02_othersNot10XGenomics
const zhOther = defineNoteConfig({
  dir: '02_othersNot10XGenomics', // 目录名
  link: '/02_othersNot10XGenomics', // 网页链接
  sidebar: 'auto',
    },
)

// 04_codeStyle
const zhCodeStyle = defineNoteConfig({
  dir: '04_codeStyle', // 目录名
  link: '/04_codeStyle', // 网页链接
  sidebar: [
        // side bar 1，导引
        {
          text: '导引',
          link: 'README.md', 
        },
        // side bar 2，GPT辅助编码
        {
          text: 'GPT辅助编码',
          link: 'meandAI.md', // 相对路径, 最终拼接
        },
      ],
    },
)


export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhDemoNote,
    zh10xDemoNote,
    zhOther,
    zhCodeStyle,
  ],
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

