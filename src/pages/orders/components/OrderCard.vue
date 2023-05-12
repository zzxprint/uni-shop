<template>
  <div class="order-card">
    <!-- 订单基本信息 -->
    <div class="order-base">
      <div class="order-img"></div>
      <div class="order-info">
        <div class="order-text">商品名称-商品名称扩写，文字超出范围怎么显示</div>
      </div>
      <div class="order-count">共2件</div>
    </div>
    <!-- 订单状态、付款信息 -->
    <div class="order-state">
      <UnTag text="已完成" color="#73c97b" />
      <div class="order-payment">
        实付款<span class="small">￥</span>99.<span class="small">00</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnTag from '@/components/UnTag.vue'
</script>

<style lang="scss" scoped>
.order-card {
  padding: 20rpx;
  height: 240rpx;
  width: 100%;
  border-radius: $radius-base;
  box-sizing: border-box;
  background: #fff;
  .order-base {
    display: flex;
    align-items: center;
    .order-img {
      flex-shrink: 0;
      height: 140rpx;
      width: 140rpx;
      border-radius: $radius-base;
      background: #f5f5f5;
    }
    .order-info {
      margin: 0 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 140rpx;
      .order-text {
        display: -webkit-box;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 30rpx;
      }
    }
    .order-count {
      width: 100rpx;
      font-size: 24rpx;
      color: #999;
    }
  }
  .order-state {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60rpx;
    line-height: 60rpx;
    .order-payment {
      text-align: right;
      font-weight: 500;
      font-size: 28rpx;
      .small {
        font-size: 24rpx;
      }
    }
  }
}
</style>
