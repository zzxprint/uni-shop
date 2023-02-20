<template>
  <div class="un-card">
    <div class="un-card-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.un-card{
  padding: 0 30rpx;
  margin: 20rpx 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  .un-card-container{
    position: relative;
    background: #fff;
    border-radius: $radius-base;
    overflow: hidden;
    &::after{
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
