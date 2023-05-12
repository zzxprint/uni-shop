<template>
  <!-- 小程序不支持$attrs -->
  <div class="un-container" :style="props.bindStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

// 不能使用style兼容小程序
const props = defineProps<{
  bindStyle?: StyleValue
}>()
</script>

<style lang="scss" scoped>
.un-container {
  padding: $padding-base;
  width: 100%;
  box-sizing: border-box;
}
</style>
