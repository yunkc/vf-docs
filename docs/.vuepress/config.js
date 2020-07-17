module.exports = {
    title: 'VF Engine',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ff6600' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/vf-docs/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/vf-docs/icons/safari-pinned-tab.svg', color: '#ff6600' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    description: 'VF Engine 中文文档',
    base: '/vf-docs/',
    themeConfig: {
        logo: '/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/vipkid-edu/',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        lastUpdated: '上次更新', // string | boolean

        sidebar: [
            {
                title: '关于VF',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    '/about/engine.md',
                    '/about/dev.md',
                ]
            },
            {
                title: '快速上手',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/getstart/introduction',
                    '/getstart/demo',
                    '/getstart/advanced-demo'
                ]
            },
            {
                title: '开发指南',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/handbook/option',
                    '/handbook/data',
                    '/handbook/resource',
                    '/handbook/component',
                    '/handbook/style',
                    '/handbook/scene',
                    '/handbook/sound',
                    '/handbook/var',
                    '/handbook/event',
                    '/handbook/action',
                    '/handbook/click',
                    '/handbook/drag',
                    '/handbook/animation',
                    '/handbook/filter',
                    '/handbook/interface',
                    '/handbook/gui-plugs',
                    '/handbook/filter-plugs',
                ]
            },
            {
                title: '常用组件',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/gui/label',
                    '/gui/image',
                    '/gui/button',
                    '/gui/checkbox',
                    '/gui/rect',
                    '/gui/circle',
                    '/gui/textInput',
                    '/gui/slider',
                    '/gui/connectLine',
                    '/gui/spriteAnimated',
                    '/gui/ScrollBar',
                    '/gui/audio.md',
                    '/gui/video',
                    '/gui/particles',
                    '/gui/followLine',
                    '/gui/Tracing',
                    '/gui/textChoice',
                    '/gui/textFillBlanks',
                ]
            },
            {
                title: '常见问题',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/questions/',
                ]
            }
        ]
    }
}
