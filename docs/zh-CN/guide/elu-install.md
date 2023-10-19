# 使用 `myy-element-ui`

本节将介绍如何在项目中使用 myy Element Ui。

## 环境支持
::: tip 当前封装所使用的库版本
- element-plus 版本为： `2.15.+`
- vue 版本为： `2.6.+`
  :::

## 安装

### 1. 使用包管理器
```shell
# NPM
npm install xxx

# Yarn
yarn install xxx

# pnpm
pnpm install xxx
```

## 快速开始
### 1. 完整引入
`myy-element-ui` 将会在Vue应用中进行**全局组件注册**。

```js
// main.js
import Vue from 'vue'
import myyElementUi from '@myy-element-ui'
import '@myy-element-ui/dist/style.css'

Vue.use(myyElementUi)
```

### 2. 按需引入
1. 需要在使用组件的地方手动对 `myy组件` 进行导入。
    ```html
    <!-- App.vue -->
    <template>
      <myy-table>
        <el-table-column ... />
      </myy-table>
    </template>
    
    <script>
      import { myyTable } from '@myy-element-ui'
      
      export default {
        name: 'App',
        components: { myyTable }
      }
    </script>
    ```
   
2. 在全局中进行 `myy组件` 部分注册
    ```js
    import Vue from 'vue';
    import { myyTable } from '@myy-element-ui';
    import App from './App.vue';
    
    Vue.component(myyTable.name, myyTable);
    /* 或写为
     * Vue.use(myyTable)
     */
    
    new Vue({
      el: '#app',
      render: h => h(App)
    });
    ```

## 注意事项
::: danger 关于原生库
组件库打包时会对第三方包如 `element-ui` 、`vue` 进行 `externals` 处理，所以务必保证使用组件的项目中导入必须要的第三方库。
:::
