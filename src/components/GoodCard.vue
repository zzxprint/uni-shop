<!-- 商品卡片 -->
<template>
  <div class="good-card" @click="gotoDetail">
    <!-- 商品图片 -->
    <div class="good-img"></div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <UnTag text="标签" />
        商品名称-商品名称扩写，文字超出范围
      </div>
    </div>
    <!-- 商品价格 -->
    <div class="good-price">
      <span class="final-price">￥99</span>
      <span class="origin-price">￥999</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnTag from './UnTag.vue'

// 去往商品详情
const gotoDetail = () => {
  uni.navigateTo({
    url: '/pages/goodsDetail/goodsDetail'
  })
}
</script>

<style lang="scss" scoped>
.good-card {
  width: 330rpx;
  height: auto;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  .good-img {
    width: 330rpx;
    height: 330rpx;
    background: #eee;
    border-radius: $radius-base $radius-base 0 0;
  }
  .good-info {
    padding: 20rpx;
    .good-text {
      display: -webkit-box;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 30rpx;
    }
  }
  .good-price {
    padding: 0 20rpx 20rpx;
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
