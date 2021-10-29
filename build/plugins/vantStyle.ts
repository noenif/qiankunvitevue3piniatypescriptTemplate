import type { Plugin } from 'vite'

import styleImport from 'vite-plugin-style-import'

export function vantStylePlugin(): Plugin | Plugin[] {
  return styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `vant/es/${name}/style`
        },
      },
    ],
  })
}
