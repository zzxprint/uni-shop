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
  width: 100%;
  height: 240rpx;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  .order-base {
    display: flex;
    align-items: center;
    .order-img {
      width: 140rpx;
      height: 140rpx;
      background: #f5f5f5;
      border-radius: $radius-base;
      flex-shrink: 0;
    }
    .order-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10rpx;
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
      font-size: 28rpx;
      text-align: right;
      font-weight: 500;
      .small {
        font-size: 24rpx;
      }
    }
  }
}
</style>
