<template>
  <scroll-view
    class="side-bar"
    scroll-y
  >
    <div
      class="side-bar-item"
      hover-class="hover-normal"
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
  label: string,
  value: string
}
interface Props {
  modelValue?: string,
  list: Array<SideBarItem>
}
interface Emit {
  (e: 'update:modelValue', value: string): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()
</script>

<style lang="scss" scoped>
.side-bar{
  flex: 0;
  height: 100%;
  background: #fff;
  min-width: 180rpx;
  .side-bar-item{
    position: relative;
    padding-left: 20rpx;
    height: 100rpx;
    line-height: 100rpx;
    &.active::after{
      content: '';
      position: absolute;
      left: 0;
      top: 25%;
      width: 8rpx;
      height: 50rpx;
      background: $main-color;
    }
  }
}
</style>
