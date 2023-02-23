<template>
  <div class="goods-info-container">
    <div class="goods-price">
      <span class="small">￥</span>
      <span>99</span>
      <span class="initial-price">￥199</span>
    </div>
    <div class="goods-info">
      <div class="goods-title">商品名称商品名称商品名称商品名称商品名称商品名称</div>
      <div class="goods-detail">商品简介商品简介商品简介商品简介商品简介</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.goods-info-container{
  padding: 30rpx;
  background: #fff;
  .goods-price{
    font-size: 44rpx;
    color: red;
    font-weight: 500;
    .small{
      font-size: $font-size-lg;
    }
    .initial-price{
      margin-left: 10rpx;
      font-size: $font-size-base;
      text-decoration: line-through;
      color: $font-color-faint;
    }
  }
  .goods-info{
    margin-top: 20rpx;
    .goods-title{
      font-size: $font-size-lg;
      letter-spacing: 2rpx;
      font-weight: 500;
    }
    .goods-detail{
      margin-top: 10rpx;
      font-size: $font-size-sm;
      letter-spacing: 2rpx;
      color: $font-color-faint;
    }
  }
}
</style>
