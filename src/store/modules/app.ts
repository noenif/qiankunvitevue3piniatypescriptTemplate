import { defineStore } from 'pinia'
import { store } from '@/store'

import { UserAgent } from '../type'

import { getUserList } from '@/api'
import { UserListResultModel } from '@/api/model/appModel'

interface AppState {
  ua: UserAgent | null
  userList: UserListResultModel
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    ua: null,
    userList: [],
  }),
  getters: {
    getUserListByIndex(index: number) {
      return this.userList[index]
    },
  },
  actions: {
    initApp() {
      this.checkUA()
    },
    checkUA() {
      const ua = navigator.userAgent
      const uaInfo = {
        // 是否为移动终端
        mobile:
          !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/),
        // ios终端
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        // android终端
        android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,

        wx: ua.indexOf('MicroMessenger') > -1,
      }
      // console.log(uaInfo)
      this.ua = uaInfo
    },

    async getUserList() {
      try {
        const res = await getUserList()
        this.userList = res
      } catch (error) {
        console.log(error)
      }
    },
  },
})

// Need to be used outside the setup
export function useAppStoreOut() {
  return useAppStore(store)
}
