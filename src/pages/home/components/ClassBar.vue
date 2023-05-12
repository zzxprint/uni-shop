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
  padding: 0 $padding-base;
  margin-top: 20rpx;
  width: 100%;
  height: 320rpx;
  box-sizing: border-box;
  .class-bar-pad {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background: #fff;
    border-radius: $radius-base;
    box-shadow: 2rpx 2rpx 10rpx #f5f5f5;
    flex-wrap: wrap;
  }
}
</style>
