<template>
  <div class="class-bar">
    <div class="class-bar-pad">
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
      <ClassificationButton text="文字" width="130rpx" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ClassificationButton from '@/components/ClassificationButton.vue'
</script>

<style lang="scss" scoped>
.class-bar {
  margin-top: 20rpx;
  padding: 0 30rpx;
  width: 100%;
  height: 320rpx;
  box-sizing: border-box;
  .class-bar-pad {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    border-radius: $radius-base;
    background: #fff;
    box-shadow: 2rpx 2rpx 10rpx #f5f5f5;
  }
}
</style>
