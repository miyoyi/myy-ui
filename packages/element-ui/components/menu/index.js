import Menu from './menu.vue'

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

export const myyMenu = Menu

export default myyMenu

export * from './'
