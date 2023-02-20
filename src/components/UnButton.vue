<template>
  <button class="un-button" hover-class="hover-normal" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.un-button{
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 45rpx;
  color: #fff;
  letter-spacing: 2rpx;
  font-size: $font-size-lg;
  background-color: $main-color;
  &::after{
    border: none;
  }
}
</style>
