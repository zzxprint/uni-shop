<template>
  <div class="label">
    {{ props.text }}
  </div>
</template>

<script setup lang='ts'>
const props = defineProps(['text'])
</script>

<style lang='scss' scoped>
.label{
  display: inline-flex;
  padding: 0 4rpx;
  height: 32rpx;
  line-height: 30rpx;
  width: auto;
  font-size: 22rpx;
  color: red;
  border: 2rpx solid red;
  border-radius: 4rpx;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
