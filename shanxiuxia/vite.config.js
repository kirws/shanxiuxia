import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/douyu': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
        target: "http://open.douyucdn.cn/api/RoomApi",
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace('/douyu', '') // 重写匹配的字段，如果不需要放在请求路径上，可以重写为""
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  },
  css: {
    loaderOptions: {
      scss: { // 如果配置为"additionalData"无效，请到官网查阅最新配置信息
        additionalData: `
         @import '@/assets/sass/global.scss';
        `
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  },
 
})
