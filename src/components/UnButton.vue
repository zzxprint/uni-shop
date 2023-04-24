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
.un-button{
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 45rpx;
  color: #fff;
  text-align: center;
  font-size: $font-size-lg;
  background-color: $main-color;
  &::after{
    border: none;
  }
}
.un-button-text{
  text-align: center;
  letter-spacing: 4rpx;
}
</style>
