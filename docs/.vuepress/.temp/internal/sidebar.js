export const sidebar = {"/en/":{"/demo":{"items":["","foo","bar"],"prefix":"/en/notes/demo/"}},"/":{"/demo":{"items":"auto","prefix":"/notes/demo/"},"/01_10X_Genomics":{"items":[{"text":"导引","link":"README.md"},{"text":"单细胞转录组测序/scRNA-seq","link":"scRNA-seq.md"}],"prefix":"/notes/01_10X_Genomics/"},"/02_othersNot10XGenomics":{"items":"auto","prefix":"/notes/02_othersNot10XGenomics/"}},"__auto__":{"/notes/demo/":[{"text":"bar","link":"/demo/0bkg7fdz/","items":[]},{"text":"foo","link":"/demo/qxmbevac/","items":[]}],"/notes/02_othersNot10XGenomics/":[]},"__home__":{"/notes/demo/":"/demo/news/","/notes/02_othersNot10XGenomics/":"/02_othersNot10XGenomics/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
