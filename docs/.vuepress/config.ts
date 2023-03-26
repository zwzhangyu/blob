import {defineUserConfig, defaultTheme} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

import sidebar from './config/slidebar.js'

export default ({
    // 项目的基础路径
    base: '/blob/',
    lang: 'zh-CN',
    title: 'ZWZhangYu',
    description: '个人学习、成长记录、读书笔记、经验总结',
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),
    ],
    theme: defaultTheme({
        // tab栏的图标; 图片 / 会自动去public文件夹里找图片
        logo: '/images/logo.png',
        // 顶部导航条
        navbar: [
            {
                text: '介绍',
                link: '/pages/introduce.md',
            },
            // 导航菜单组
            {
                text: '教程',
                children: [
                    {
                        text: '安装指南',
                        link: '/pages/learnJTs/install_guide.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '/pages/learnJTs/install_guide.md',
                    },
                    {
                        text: 'API使用',
                        link: '/pages/learnJTs/detail_usage.md',
                        activeMatch: '/pages/learnJTs/detail_usage.md',
                    },
                    {
                        text: '待定...',
                        link: '/pages/other/other.md',
                    },
                ],
            },
            // 算法的导航
            {
                text: '算法',
                link: '/pages/algorithm/index.md',
            },
        ],
        repo: 'https://github.com/zwzhangyu',
        // 侧边栏
        sidebar: sidebar
    }),

})