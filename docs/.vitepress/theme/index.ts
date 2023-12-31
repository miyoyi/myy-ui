import { App, Component } from 'vue'
import Theme from 'vitepress/theme'
import '/public/css/custom-style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import myyComponents from '@myy/myy-element-plus'
import { globals } from '../components'

export default {
  ...Theme,
  enhanceApp ({ app }: {app: App}) {
    app.use(myyComponents)

    globals.forEach((comp: Component) => {
      app.component(comp.name as string, comp)
    })
  }
}
