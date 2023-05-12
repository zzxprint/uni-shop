<template>
  <div class="un-card" @click="emit('click')">
    <div class="un-card-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.un-card {
  margin: 20rpx 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  .un-card-container {
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: $radius-base;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2rpx;
      background: #fff;
    }
  }
}
</style>
