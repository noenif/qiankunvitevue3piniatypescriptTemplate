// 解析所有的env变量
export function wrapperEnv(envConf: any) {
  const result: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName

    // if (envName === 'VITE_PORT') {
    //   realName = Number(realName)
    // }
    result[envName] = realName
  }
  return result
}
