<!-- 商品横向卡片 -->
<template>
  <div class="good-list-card">
    <!-- 商品图片 -->
    <div class="good-img"></div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <Tag text="标签" />
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
import Tag from './Tag.vue'
</script>

<style lang="scss" scoped>
.good-list-card{
  display: flex;
  padding: 10rpx 20rpx;
  height: 220rpx;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  .good-img{
    flex-shrink: 0;
    height: 200rpx;
    width: 200rpx;
    border-radius: $radius-base;
    background: #f5f5f5;
  }
  .good-info{
    margin-left: 10rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .good-text{
      display: -webkit-box;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 30rpx;
      .good-tag{
        color: red;
      }
    }
  }
  .good-price{
    margin-top: 10rpx;
    .final-price{
      color: red;
      font-weight: 500;
    }
    .origin-price{
      margin-left: 5rpx;
      font-size: 24rpx;
      color: #999;
      text-decoration: line-through;
    }
  }
}
</style>
