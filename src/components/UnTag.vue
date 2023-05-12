<template>
  <div
    :class="['label', `${props.type}-color`, props.fill ? 'fill-color' : '']"
    :style="{
      color: fontColor,
      fontSize: props.size,
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
      borderRadius: round ? '20rpx' : '4rpx',
      padding: round ? '2rpx 8rpx' : '2rpx 4rpx'
    }"
    @click="emit('click')"
  >
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type TagType = 'default' | 'main' | 'success' | 'important'

interface Props {
  // 是否为填充模式
  fill?: boolean
  // 是否为圆角模式
  round?: boolean
  // 颜色类型枚举
  type: TagType
  // 填充文字
  text: string
  // 自定义颜色，传入时自带颜色不展示
  color?: string
  // 文字大小
  size: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: '22rpx'
})

const emit = defineEmits(['click'])

// 计算文字颜色和填充颜色
const fontColor = computed(() => {
  if (!props.color) return ''
  if (props.fill) return '#fff'
  return props.color
})

const backgroundColor = computed(() => {
  if (props.fill) return props.color
  return ''
})
</script>

<style lang="scss" scoped>
.label {
  display: inline-flex;
  justify-content: center;
  padding: 2rpx 4rpx;
  width: auto;
  min-width: 50rpx;
  line-height: 1.2;
  border: 2rpx solid;
  box-sizing: border-box;
  overflow: hidden;
}
@mixin tag-color($color) {
  color: $color;
  border-color: $color;
  &.fill-color {
    color: #fff;
    background-color: $color;
  }
}
.default-color {
  @include tag-color(#999);
}
.main-color {
  @include tag-color($main-color);
}
.success-color {
  @include tag-color($success-color);
}
.important-color {
  @include tag-color($important-color);
}
</style>
