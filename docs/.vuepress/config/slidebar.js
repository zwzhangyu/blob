// 侧边栏
module.exports = {
    // 不同子路径下的页面会使用不同的侧边栏
    '/pages/learnJTs/': [
        {
            text: '使用教程',
            children: ['install_guide.md', 'detail_usage.md'],
        },
    ],
    '/pages/other/': [
        {
            text: 'other',
            children: ['other.md'],
        },
    ],
    '/pages/algorithm/': [
        {
            text: 'algorithm',
            children: ['index.md'],
        },
    ],
}

 