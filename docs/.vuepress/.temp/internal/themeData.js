export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"介绍\",\"link\":\"/pages/introduce.md\"},{\"text\":\"教程\",\"children\":[{\"text\":\"安装指南\",\"link\":\"/pages/learnJTs/install_guide.md\",\"activeMatch\":\"/pages/learnJTs/install_guide.md\"},{\"text\":\"API使用\",\"link\":\"/pages/learnJTs/detail_usage.md\",\"activeMatch\":\"/pages/learnJTs/detail_usage.md\"},{\"text\":\"待定...\",\"link\":\"/pages/other/other.md\"}]},{\"text\":\"算法\",\"link\":\"/pages/algorithm/index.md\"}],\"repo\":\"https://github.com/zwzhangyu\",\"sidebar\":{\"/pages/learnJTs/\":[{\"text\":\"使用教程\",\"children\":[\"install_guide.md\",\"detail_usage.md\"]}],\"/pages/other/\":[{\"text\":\"other\",\"children\":[\"other.md\"]}],\"/pages/algorithm/\":[{\"text\":\"algorithm\",\"children\":[\"index.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
