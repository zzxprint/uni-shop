<template>
  <button class="un-button" hover-class="hover-normal" @click="emit('click')">
    <span class="un-button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.un-button {
  height: 90rpx;
  font-size: $font-size-lg;
  text-align: center;
  color: #fff;
  background-color: $main-color;
  border-radius: 45rpx;
  line-height: 90rpx;
  &::after {
    border: none;
  }
}
.un-button-text {
  text-align: center;
  letter-spacing: 4rpx;
}
</style>
