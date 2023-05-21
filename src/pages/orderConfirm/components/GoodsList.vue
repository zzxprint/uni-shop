<template>
  <UnCard>
    <div class="cart-goods-card" v-for="item in 3" :key="item">
      <!-- 商品图片 -->
      <div class="goods-img"></div>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="goods-text">商品名称-商品名称扩写，文字超出范围怎么显示</div>
      </div>
      <!-- 商品价格及数量 -->
      <div class="goods-price">
        <span class="final-price"><span class="price-symbol">￥</span>99</span>
        <span class="goods-count">x1</span>
      </div>
    </div>
  </UnCard>
</template>

<script setup lang="ts">
import UnCard from '@/components/UnCard.vue'
</script>

<style lang="scss" scoped>
.cart-goods-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  width: 100%;
  height: 240rpx;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 40rpx);
    height: 2rpx;
    background: #f5f5f5;
  }
  &:last-child::after {
    height: 0;
  }
  .goods-img {
    width: 200rpx;
    height: 200rpx;
    background: #f5f5f5;
    border-radius: $radius-base;
    flex-shrink: 0;
  }
  .goods-info {
    display: flex;
    justify-content: space-between;
    margin-left: 10rpx;
    height: 200rpx;
    flex-direction: column;
    .goods-text {
      display: -webkit-box;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: $font-size-base;
    }
  }
  .goods-price {
    display: flex;
    align-items: flex-end;
    margin-left: 20rpx;
    height: 200rpx;
    flex-direction: column;
    .final-price {
      font-size: $font-size-hg;
      .price-symbol {
        font-size: $font-size-base;
      }
    }
    .goods-count {
      font-size: $font-size-sm;
      color: $font-color-faint;
    }
  }
}
</style>
