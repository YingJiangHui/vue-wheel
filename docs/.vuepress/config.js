module.exports = {
    base:'/eagle-ui-docs/',
    title: 'Eagle UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/get-started/',]
            },

            {
                title: '组件',
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/layout',
                    '/components/grid',
                    '/components/toast',
                    '/components/collapse',
                    '/components/popover',
                ]
            },
        ],
        nav: [
            { text: '主页', link: '/' },
            { text: '快速安装', link: '/install/' },
            { text: 'GitHub', link: 'https://google.com' },
        ]
    },
    markdown: {
        lineNumbers: true
    },

}