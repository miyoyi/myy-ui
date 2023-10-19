import { myyTable } from './components/table'
import { myyMenu } from './components/menu'

const elmUiComponents = [
  myyTable,
  myyMenu
]

export const installer = (Vue) => {
  elmUiComponents.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
}
