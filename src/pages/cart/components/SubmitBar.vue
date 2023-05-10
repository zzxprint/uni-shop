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
      <UnButton class="submit-btn">结算</UnButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckBox from '@/components/CheckBox.vue'
import UnButton from '@/components/UnButton.vue'
</script>

<style lang="scss" scoped>
.submit-bar {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30rpx;
  height: 120rpx;
  width: 100%;
  border-top: 2rpx solid #f8f8f8;
  box-sizing: border-box;
  background: #fff;
  .select-container {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .operation-container {
    display: flex;
    align-items: center;
    height: 100%;
    .total-price {
      margin-right: 20rpx;
    }
    .submit-btn {
      height: 90rpx;
      line-height: 90rpx;
      width: 240rpx;
      border-radius: $radius-lg;
      &::after {
        border: none;
      }
    }
  }
}
</style>
