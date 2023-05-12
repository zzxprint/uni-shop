<template>
  <div class="submit-bar">
    <!-- 全选框 -->
    <div class="select-container">
      <CheckBox />
    </div>
    <div class="operation-container">
      <!-- 合计金额 -->
      <div class="total-price">
        <span>合计：</span>
        <span>￥99</span>
      </div>
      <!-- 结算按钮 -->
      <UnButton class="submit-btn" @click="toOrderConfirm">结算</UnButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from '@/components/CheckBox.vue'
import UnButton from '@/components/UnButton.vue'

const toOrderConfirm = () => {
  uni.navigateTo({
    url: '/pages/orderConfirm/orderConfirm'
  })
}
</script>

<style lang="scss" scoped>
.submit-bar {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 $padding-base;
  width: 100%;
  height: 120rpx;
  background: #fff;
  border-top: 2rpx solid #f8f8f8;
  box-sizing: border-box;
  .select-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
  }
  .operation-container {
    display: flex;
    align-items: center;
    height: 100%;
    .total-price {
      margin-right: 20rpx;
    }
    .submit-btn {
      width: 240rpx;
      height: 90rpx;
      border-radius: $radius-lg;
      line-height: 90rpx;
      &::after {
        border: none;
      }
    }
  }
}
</style>
