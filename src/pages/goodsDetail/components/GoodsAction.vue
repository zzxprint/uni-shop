<template>
  <!-- 小程序不支持$attrs写法 -->
  <UnBottomBar
    @getHeight="(height: number, paddingBottom: number) =>
    emit('getHeight', height, paddingBottom)"
  >
    <div class="goods-action">
      <div class="cart-button" @click="toShopingCart">
        <UnIcon icon="shoping-cart" size="50rpx" />
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
  </UnBottomBar>
</template>

<script setup lang="ts">
import UnBottomBar from '@/components/UnBottomBar.vue'
import UnIcon from '@/components/UnIcon.vue'

const emit = defineEmits(['getHeight'])

// 去购物车
const toShopingCart = () => {
  uni.switchTab({
    url: '/pages/cart/cart'
  })
}
</script>

<style lang="scss" scoped>
.goods-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
      padding: 0 40rpx;
      height: 90rpx;
      border-radius: 45rpx;
      line-height: 90rpx;
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
