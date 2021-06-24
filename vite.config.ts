import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * 对于使用 "export = Mod" 方式导出的模块
 * 必须使用 "import * as Mod from '<ModPath>'" 方式引入
 */
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
