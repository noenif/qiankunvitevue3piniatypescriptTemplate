import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import qiankun from 'vite-plugin-qiankun';
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createPlugins } from './build/plugins/plugins'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  const envObj = wrapperEnv(env)

  const { VITE_PUBLIC_PATH, VITE_ENV } = envObj

  const flagProd = VITE_ENV === 'prod'

  // console.log(command)
  // console.log(env)

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [...createPlugins(envObj),qiankun('myMicroAppName',{useDevMode:true})],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './types'),
      },
    },
    css: {
      preprocessorOptions: {
        // 使用sass就不会生效 应该是vite的问题
        scss: {
          // sassOptions: {
          //   includePaths: [resolve(__dirname, './src/scss/')],
          // },
          additionalData: `@import "@/scss/_variables";@import "@/scss/_mixins";`,
        },
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api/': {
          target: ' http://api.test.com', // 代理地址，这里设置的地址会代替axios中设置的baseURL
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          secure: false,
        },
      },
    },
  }
}
