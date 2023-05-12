<template>
  <div class="un-bottom-bar" :style="{ paddingBottom: `${safeAreaInsets?.bottom || 0}px` }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSystemInfoStore } from '@/store/systemInfo'
import { rpx2px } from '@/utils/index'
import { onMounted } from 'vue'

// 获取安全区域
const systemInfoStore = useSystemInfoStore()
const safeAreaInsets = systemInfoStore.safeAreaInsetsGet

// 获取底部高度（px）
const height = (safeAreaInsets?.bottom || 0) + rpx2px(120)

// 获取建议padding高度
const paddingBottom = (safeAreaInsets?.bottom || 0) + rpx2px(120 + 20)

const emit = defineEmits(['getHeight'])
onMounted(() => {
  emit('getHeight', height, paddingBottom)
})
</script>

<style lang="scss" scoped>
.un-bottom-bar {
  position: fixed;
  padding: 0 $padding-base;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 60rpx);
  height: 120rpx;
  background: #fff;
  z-index: 999;
}
</style>
