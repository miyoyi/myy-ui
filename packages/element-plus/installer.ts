import {App} from 'vue'
import { myyTable } from './components/table'
import { myyMenu } from './components/menu'

const elmPlusComponents = [
  myyTable,
  myyMenu
]

export const installer = (app: App) => {
  elmPlusComponents.forEach((comp) => app.use(comp))
}
