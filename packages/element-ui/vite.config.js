import * as path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { alias } from '../../scripts'
import { defineConfig } from 'vite'

export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {}
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-ui'
    }
  }
  return {
    server: {
      port: '3002'
    },
    plugins: [
      createVuePlugin()
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, './components/index.js'),
        name: 'myyUi',
        fileName: 'myy-element-ui',
        formats: ['es','cjs'],
      },
      rollupOptions: {
        external: ['element-ui', 'vue', 'vue-router', '@element-ui/icons-vue'],
        output: [
          {
            format: 'es',
            dir: path.join('../../', 'dist','element-ui','es'),
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: './components',
            exports: 'named'
          },
          {
            format: 'cjs',
            dir: path.join('../../', 'dist','element-ui','lib'),
            entryFileNames: '[name].cjs',
            preserveModules: true,
            preserveModulesRoot: './components',
            exports: 'named'
          }
        ]
      }
    },
    resolve: {
      alias: await alias()
    },
    ...docsBuild
  }
})

