export const redirects = JSON.parse("{\"/quickstart.html\":\"/quickstart/\",\"/preview/custom-component.example.html\":\"/article/3d8imd0d/\",\"/preview/markdown.html\":\"/article/f659up3p/\",\"/notes/intruction.html\":\"/news/\",\"/notes/onProgress.html\":\"/notes/onProgress/\",\"/en/preview/custom-component.example.html\":\"/en/article/ml5w8aoh/\",\"/en/preview/markdown.html\":\"/en/article/ux3egthv/\",\"/notes/01_10X_Genomics/scRNA-seq.html\":\"/article/ze67032e/\",\"/notes/demo/\":\"/demo/news/\",\"/notes/demo/bar.html\":\"/demo/0bkg7fdz/\",\"/notes/demo/foo.html\":\"/demo/qxmbevac/\",\"/en/notes/demo/\":\"/en/demo/\",\"/en/notes/demo/bar.html\":\"/en/demo/6dqs79xt/\",\"/en/notes/demo/foo.html\":\"/en/demo/sraz55bk/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/quickstart/", { loader: () => import(/* webpackChunkName: "quickstart_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/quickstart/index.html.js"), meta: {"title":"快速开始"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":""} }],
  ["/article/3d8imd0d/", { loader: () => import(/* webpackChunkName: "article_3d8imd0d_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/article/3d8imd0d/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/f659up3p/", { loader: () => import(/* webpackChunkName: "article_f659up3p_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/article/f659up3p/index.html.js"), meta: {"title":"Markdown"} }],
  ["/news/", { loader: () => import(/* webpackChunkName: "news_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/news/index.html.js"), meta: {"title":"Introduction"} }],
  ["/notes/onProgress/", { loader: () => import(/* webpackChunkName: "notes_onProgress_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/notes/onProgress/index.html.js"), meta: {"title":"onPress"} }],
  ["/en/article/ml5w8aoh/", { loader: () => import(/* webpackChunkName: "en_article_ml5w8aoh_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/article/ml5w8aoh/index.html.js"), meta: {"title":"Custom Component"} }],
  ["/en/article/ux3egthv/", { loader: () => import(/* webpackChunkName: "en_article_ux3egthv_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/article/ux3egthv/index.html.js"), meta: {"title":"Markdown"} }],
  ["/article/ze67032e/", { loader: () => import(/* webpackChunkName: "article_ze67032e_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/article/ze67032e/index.html.js"), meta: {"title":"10X Genomics scRNA-seq 数据分析"} }],
  ["/demo/news/", { loader: () => import(/* webpackChunkName: "demo_news_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/demo/news/index.html.js"), meta: {"title":"Introduction"} }],
  ["/demo/0bkg7fdz/", { loader: () => import(/* webpackChunkName: "demo_0bkg7fdz_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/demo/0bkg7fdz/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/qxmbevac/", { loader: () => import(/* webpackChunkName: "demo_qxmbevac_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/demo/qxmbevac/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/en/demo/6dqs79xt/", { loader: () => import(/* webpackChunkName: "en_demo_6dqs79xt_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/demo/6dqs79xt/index.html.js"), meta: {"title":"bar"} }],
  ["/en/demo/sraz55bk/", { loader: () => import(/* webpackChunkName: "en_demo_sraz55bk_index.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/en/demo/sraz55bk/index.html.js"), meta: {"title":"foo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/hughes/docs/WDL_Tools_docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
