import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'

// 获取md5加密
export function getEncryptMd5(str: string): string {
  return md5(str).toString()
}

// 获取sha1加密
export function getEncryptSha1(str: string): string {
  return sha1(str).toString()
}
