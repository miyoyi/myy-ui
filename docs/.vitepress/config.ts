import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'
// import { mdPlugin } from './configs/plugins'

const base = '/'

export default defineConfig({
  title: 'myy-ui',
  description: '',
  appearance: false,
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/myy-icon.svg',
    nav,
    sidebar,
    footer
  }
})
