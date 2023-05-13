<template>
  <scroll-view class="un-side-bar" scroll-y>
    <div
      class="un-side-bar-item"
      v-for="item in props.list"
      :key="item.value"
      :class="{ active: modelValue === item.value }"
      @click="emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </div>
  </scroll-view>
</template>

<script setup lang="ts">
interface SideBarItem {
  label: string
  value: string
}
interface Props {
  modelValue?: string
  list: Array<SideBarItem>
}
interface Emit {
  (e: 'update:modelValue', value: string): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()
</script>

<style lang="scss" scoped>
.un-side-bar {
  min-width: 180rpx;
  height: 100%;
  background: #fff;
  flex: 0;
  .un-side-bar-item {
    position: relative;
    padding-left: 20rpx;
    height: 100rpx;
    line-height: 100rpx;
    &.active::after {
      position: absolute;
      top: 25%;
      left: 0;
      width: 8rpx;
      height: 50rpx;
      background: $main-color;
      content: '';
    }
  }
}
</style>
