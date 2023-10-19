import elementPlusSideBar from "../pages/element-plus.json"
import elementUiSideBar from "../pages/element-ui.json"

export default {
  '/zh-CN/guide/': [
    {
      text: '快速开始',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'myy-element-plus', link: '/zh-CN/guide/elp-install' },
        { text: 'myy-element-ui', link: '/zh-CN/guide/elu-install' }
      ]
    },
    {
      text: '开发者指南',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'docs项目', link: '/zh-CN/guide/docs-dev' },
        { text: 'element-plus', link: '/zh-CN/guide/elp-dev' },
        { text: 'element-ui', link: '/zh-CN/guide/elu-dev' },
      ]
    }
  ],
  '/zh-CN/components/element-plus': elementPlusSideBar,
  '/zh-CN/components/element-ui': elementUiSideBar
}