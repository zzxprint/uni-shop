<template>
  <div class="cart-good-card">
    <!-- 勾选区域 -->
    <div class="select-container">
      <CheckBox v-model="select" />
    </div>
    <!-- 商品图片 -->
    <div class="good-img"></div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <UnTag text="标签" />
        商品名称-商品名称扩写，文字超出范围怎么显示
      </div>
      <!-- 商品价格及数量 -->
      <div class="good-price-operate">
        <div class="good-price">
          <span class="final-price">￥99</span>
          <span class="origin-price">￥999</span>
        </div>
        <Stepper v-model="count" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from '@/components/CheckBox.vue'
import UnTag from '@/components/UnTag.vue'
import Stepper from '@/components/Stepper.vue'
import { ref } from 'vue'

const count = ref(2)
const select = ref(false)
</script>

<style lang="scss" scoped>
.cart-good-card {
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  width: 100%;
  height: 240rpx;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  .select-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20rpx;
    height: 100%;
    flex-shrink: 0;
  }
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
    height: 200rpx;
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
    .good-price-operate {
      display: flex;
      justify-content: space-between;
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
}
</style>
