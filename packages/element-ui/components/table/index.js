import Table from './table.vue'

Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

export const myyTable = Table

export default myyTable

export * from './'
