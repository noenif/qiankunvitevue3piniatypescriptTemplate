import type { GlobEnvConfig, GlobConfig } from '#/config'

export function getAppEnvConfig(): GlobConfig {
  const ENV = (import.meta.env as unknown) as GlobEnvConfig

  const { VITE_API_DOMAIN, VITE_API_URL } = ENV

  const env: Readonly<GlobConfig> = {
    apiDomain: VITE_API_DOMAIN,
    apiUrl: VITE_API_URL,
  }

  return env as Readonly<GlobConfig>
}

/**
 * @description: Whether to open mock
 * @returns:
 * @example:
 */
export function isUseMock(): boolean {
  return import.meta.env.VITE_USE_MOCK === 'true'
}

export function isDev(): boolean {
  return import.meta.env.VITE_ENV === 'dev'
}
