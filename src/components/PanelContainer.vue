<template>
  <section class="panel">
    <header class="panel__header">
      <span class="panel__header-title">
        <slot name="title">{{ title }}</slot>
      </span>
      <span class="panel__header-control">
        <slot name="control" />
      </span>
    </header>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'PanelContainer',

  props: {
    title: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.panel {
  padding: 13px 18px;
  margin: 10px;
  background: #fff;
  border-radius: 6px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__header-title {
    font-size: 18px;
    font-weight: 500;
    color: #0a72e2;
  }
}
</style>
