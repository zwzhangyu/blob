export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"年轻人的第一个JS工具库\",\"tagline\":\"一点一滴都是进步/我的读书列表\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/pages/introduce.md/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"个人学习\",\"details\":\"JS工具类方法，手写常用JS方法汇总，建造一个属于自己的工具库；不追求大而全，目标是小而实用\"},{\"title\":\"成长记录\",\"details\":\"每一个函数都能正常调用。写这个库的目的是为了更好的学习JS，所以每行代码都有注释，并且有详细解释，好记性不如烂笔头。\"},{\"title\":\"读书笔记\",\"details\":\"使用目前极为先进的Vue3和vuepress搭建文档;js工具库100%单元测试覆盖，工具库方法使用JS编写，后期将会使用TS改造\"},{\"title\":\"经验总结\",\"details\":\"使用目前极为先进的Vue3和vuepress搭建文档;js工具库100%单元测试覆盖，工具库方法使用JS编写，后期将会使用TS改造\"}]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
