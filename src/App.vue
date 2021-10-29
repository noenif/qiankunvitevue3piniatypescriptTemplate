<template>
  <!-- https://next.router.vuejs.org/guide/migration/index.html#router-view-keep-alive-and-transition -->
  <router-view v-slot="{ Component, route }">
    <transition>
      <keep-alive v-if="route.meta?.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { getAppEnvConfig } from '@/utils/env'

import { useAppStore } from '@/store/modules/app'

export default defineComponent({
  name: 'App',
  setup(props) {
    const appStore = useAppStore()

    onMounted(() => {
      const { apiDomain } = getAppEnvConfig()
      console.log(apiDomain)

      appStore.initApp()
    })
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: 100%;
  overflow: auto;
}
</style>
