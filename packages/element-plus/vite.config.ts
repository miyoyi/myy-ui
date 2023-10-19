import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { alias } from '../../scripts'

export default defineConfig(async ({ command, mode }) => {
  let docsBuild
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-plus'
    }
  }
  return {
    server: {
      port: '3001'
    },
    plugins: [vue()],
    build: {
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'myyUi',
        fileName: 'myy-element-plus',
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        external: [
          'element-plus',
          'vue',
          'vue-router',
          '@element-plus/icons-vue'
        ],
        output: [
          {
            format: 'es',
            dir: path.join('../../', 'dist','element-plus','es'),
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: './components',
            exports: 'named'
          },
          {
            format: 'cjs',
            dir: path.join('../../', 'dist','element-plus','lib'),
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
