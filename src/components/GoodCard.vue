<!-- 商品卡片 -->
<template>
  <div class="good-card" @click="gotoDetail">
    <!-- 商品图片 -->
    <div class="good-img">
      <img class="img" :src="props.goodsCover" />
    </div>
    <!-- 商品信息 -->
    <div class="good-info">
      <div class="good-text">
        <!-- 标签 -->
        <UnTag text="标签" />
        {{ props.goodsName }}
      </div>
    </div>
    <!-- 商品价格 -->
    <div class="good-price">
      <span class="final-price">
        <span class="currency-unit">￥</span>{{ formatPrice(props.goodsPrice) }}
      </span>
      <span class="origin-price" v-if="props.originPrice">
        <span class="currency-unit">￥</span>{{ formatPrice(props.goodsPrice) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnTag from './UnTag.vue'
import { formatPrice } from '@/utils/index'

const props = defineProps({
  goodsCover: {
    type: String,
    default: ''
  },
  goodsName: {
    type: String,
    default: ''
  },
  goodsPrice: {
    type: Number,
    default: 0
  },
  originPrice: {
    type: Number,
    default: 0
  }
})

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
    overflow: hidden;
    .img {
      height: 100%;
      width: 100%;
    }
  }
  .good-info {
    padding: 20rpx;
    .good-text {
      display: -webkit-box;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: $font-size-base;
    }
  }
  .good-price {
    padding: 0 20rpx 20rpx;
    .final-price {
      color: red;
      font-weight: 500;
      font-size: $font-size-base;
      .currency-unit {
        font-size: $font-size-tiny;
      }
    }
    .origin-price {
      margin-left: 8rpx;
      font-size: $font-size-tiny;
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>
