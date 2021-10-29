declare global {
  interface ViteEnv {
    VITE_ENV: string
    VITE_APP_TITLE: string
    VITE_PUBLIC_PATH: string
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
  }
}

export {}
