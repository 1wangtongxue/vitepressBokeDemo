import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaconf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "my-boke-demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/docs/public/head.jpg',
    nav: nav,

    sidebar:sidebar , //侧边栏
    outline:{  //右边侧边栏的跳转目录
      level: [1, 60],
      label: '目录'
    },
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
