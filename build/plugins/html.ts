/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite'

import html from 'vite-plugin-html'

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean): Plugin[] {
  const { VITE_APP_TITLE, VITE_ENV } = env

  const htmlPlugin = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      injectData: {
        env: VITE_ENV,
        title: VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
