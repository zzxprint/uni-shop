<!-- 商品横向卡片 -->
<template>
  <div class="good-list-card">
    <!-- 商品图片 -->
    <div class="good-img"></div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <UnTag text="标签" />
        商品名称-商品名称扩写，文字超出范围怎么显示
      </div>
      <!-- 商品价格 -->
      <div class="good-price">
        <span class="final-price">￥99</span>
        <span class="origin-price">￥999</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnTag from './UnTag.vue'
</script>

<style lang="scss" scoped>
.good-list-card {
  display: flex;
  padding: 10rpx 20rpx;
  width: 100%;
  height: 220rpx;
  background: #fff;
  box-sizing: border-box;
  .good-img {
    width: 200rpx;
    height: 200rpx;
    background: #f5f5f5;
    border-radius: $radius-base;
    flex-shrink: 0;
  }
  .good-info {
    display: flex;
    justify-content: space-between;
    margin-left: 10rpx;
    flex-direction: column;
    .good-text {
      display: -webkit-box;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 30rpx;
      .good-tag {
        color: red;
      }
    }
  }
  .good-price {
    margin-top: 10rpx;
    .final-price {
      color: red;
      font-weight: 500;
    }
    .origin-price {
      margin-left: 5rpx;
      font-size: 24rpx;
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>
