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
        <Tag text="标签" />
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
import Tag from '@/components/Tag.vue'
import Stepper from '@/components/Stepper.vue'
import { ref } from 'vue'

const count = ref(2)
const select = ref(false)
</script>

<style lang="scss" scoped>
.cart-good-card{
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  height: 240rpx;
  width: 100%;
  border-radius: $radius-base;
  box-sizing: border-box;
  background: #fff;
  .select-container{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20rpx;
    height: 100%;
  }
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
    height: 200rpx;
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
    .good-price-operate{
      display: flex;
      justify-content: space-between;
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
}
</style>
