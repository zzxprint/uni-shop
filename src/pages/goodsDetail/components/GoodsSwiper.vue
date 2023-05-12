<template>
  <div class="swiper-content">
    <swiper class="swiper" circular @change="swiperChange">
      <swiper-item>
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
    <div class="step-info">
      <span class="step-detail">{{ current }}</span>
      <span class="step-detail">/</span>
      <span class="step-detail">3</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 当前激活页
const current = ref(1)
const swiperChange = (e: any) => {
  current.value = e.detail.current + 1
}
</script>

<style lang="scss" scoped>
.swiper-content {
  position: relative;
  height: 750rpx;
  .swiper {
    height: 100%;
    background: #eee;
  }
  .step-info {
    position: absolute;
    right: 30rpx;
    bottom: 20rpx;
    display: flex;
    padding: 0 10rpx;
    width: 90rpx;
    height: 45rpx;
    font-size: $font-size-sm;
    text-align: center;
    color: #eee;
    background: rgba($color: #000, $alpha: 30%);
    border-radius: 25rpx;
    line-height: 45rpx;
    box-sizing: border-box;
    .step-detail {
      flex: 1;
    }
  }
}
</style>
