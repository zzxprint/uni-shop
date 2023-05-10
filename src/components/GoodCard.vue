<!-- 商品卡片 -->
<template>
  <div class="good-card" @click="gotoDetail">
    <!-- 商品图片 -->
    <div class="good-img"></div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <Tag text="标签" />
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
import Tag from './Tag.vue'

// 去往商品详情
const gotoDetail = () => {
  uni.navigateTo({
    url: '/pages/goodsDetail/goodsDetail'
  })
}
</script>

<style lang="scss" scoped>
.good-card {
  height: auto;
  width: 330rpx;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  .good-img {
    height: 330rpx;
    width: 330rpx;
    border-radius: $radius-base $radius-base 0 0;
    background: #eee;
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
    padding: 0 20rpx 20rpx 20rpx;
    .final-price {
      color: red;
      font-weight: 500;
    }
    .origin-price {
      margin-left: 5rpx;
      font-size: 24rpx;
      color: #999;
      text-decoration: line-through;
    }
  }
}
</style>
