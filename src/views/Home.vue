<template>
  <PanelContainer>
    <template #default>
      <van-button @click="link">测试按钮</van-button>
    </template>
  </PanelContainer>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { Button } from 'vant'

import PanelContainer from '@/components/PanelContainer.vue'
import { useAppStore } from '@/store/modules/app'

export default defineComponent({
  components: {
    [Button.name]: Button,
    PanelContainer,
  },
  setup: () => {
    const router = useRouter()
    const userStore = useAppStore()

    const link = () => {
      console.log('link')
      // router.push({
      //   path: '/',
      // })
    }

    onMounted(() => {
      // userStore.getUserList()
    })

    return {
      link,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
