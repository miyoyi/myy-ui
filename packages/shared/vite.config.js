import * as path from 'path'
import { alias } from '../../scripts'
import {defineConfig} from 'vite'

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, './index.ts'),
        name: 'myyFn',
        fileName: 'myy-fn',
        formats: ['es', 'cjs', 'umd', 'iife']
      },
      outDir: path.join('../../','dist','fn')
    },
    resolve: {
      alias: await alias()
    }
  }
})
