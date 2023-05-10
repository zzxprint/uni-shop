<template>
  <div
    class="goods-action"
    :style="{ paddingBottom: props.paddingBottom + 'px' }"
  >
    <div class="cart-button" @click="toShopingCart">
      <Icon icon="shoping-cart" size="50rpx" />
      <span>购物车</span>
    </div>
    <div class="order-button-container">
      <button class="order-button left" hover-class="hover-normal">
        <span class="un-button-text"> 加入购物车 </span>
      </button>
      <button class="order-button right" hover-class="hover-normal">
        <span class="un-button-text"> 立即购买 </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'

const props = defineProps({
  paddingBottom: Number
})

// 去购物车
const toShopingCart = () => {
  console.log('aaa')
  uni.switchTab({
    url: '/pages/cart/cart'
  })
}
</script>

<style lang="scss" scoped>
.goods-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 120rpx;
  padding: 0 30rpx;
  width: calc(100% - 60rpx);
  background: #fff;
  .cart-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20rpx;
    letter-spacing: 2rpx;
  }
  .order-button-container {
    display: flex;
    .order-button {
      height: 90rpx;
      line-height: 90rpx;
      border-radius: 45rpx;
      padding: 0 40rpx;
      &.left {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &.right {
        color: #fff;
        background-color: $main-color;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &::after {
        border: none;
      }
    }
    .un-button-text {
      font-size: 28rpx;
      text-align: center;
      letter-spacing: 4rpx;
    }
  }
}
</style>
