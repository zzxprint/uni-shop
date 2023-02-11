<template>
  <div
    class="label"
    :style="{
      fontSize: props.size,
      color: props.color,
      borderColor: props.color
    }"
  >
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'red'
  },
  size: {
    type: String,
    default: '22rpx'
  }
})
</script>

<style lang="scss" scoped>
.label{
  display: inline-flex;
  padding: 2rpx 4rpx;
  width: auto;
  line-height: 1.2;
  border: 2rpx solid;
  border-radius: 4rpx;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
