<template>
  <div
    class="label"
    :style="{
      fontSize: props.size,
      color: fill ? '#fff' : props.color,
      backgroundColor: fill ? props.color : '',
      borderColor: props.color,
      borderRadius: round ? '20rpx' : '4rpx',
      padding: round ? '2rpx 8rpx' : '2rpx 4rpx'
    }"
    @click="emit('click')"
  >
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // 是否为填充模式
  fill: Boolean,
  // 是否为圆角模式
  round: Boolean,
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'red'
  },
  size: {
    type: String,
    default: '22rpx'
  }
})
const emit = defineEmits(['click'])
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
</style>
