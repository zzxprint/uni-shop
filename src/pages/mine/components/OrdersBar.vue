<template>
  <div class="orders-bar">
    <div class="orders-bar-pad">
      <navigator class="tool-btn" url="/pages/orders/orders?tab=tobePaid">
        <UnClassButton text="待付款" icon="wallet" icon-color="#fbc02d" width="136rpx" />
      </navigator>
      <navigator class="tool-btn" url="/pages/orders/orders?tab=tobeReceived">
        <UnClassButton text="待收货" icon="car" icon-color="#fbc02d" width="136rpx" />
      </navigator>
      <navigator class="tool-btn" url="/pages/orders/orders?tab=finish">
        <UnClassButton text="已完成" icon="finish-order" icon-color="#fbc02d" width="136rpx" />
      </navigator>
      <UnClassButton text="售后" icon="refund" icon-color="#fbc02d" width="136rpx" />
      <div class="all-orders">
        <navigator class="tool-btn" url="/pages/orders/orders?tab=all">
          <UnClassButton text="全部" icon="order" icon-color="#fbc02d" width="136rpx" />
        </navigator>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnClassButton from '@/components/UnClassButton.vue'
</script>

<style lang="scss" scoped>
.orders-bar {
  padding: 0 $padding-base;
  margin-top: 30rpx;
  width: 100%;
  height: 180rpx;
  box-sizing: border-box;
  .orders-bar-pad {
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    height: 100%;
    background: #fff;
    border-radius: $radius-base;
    .all-orders {
      position: relative;
      display: flex;
      width: 136rpx;
      &::before {
        position: absolute;
        left: 0;
        content: '';
        width: 4rpx;
        height: 100%;
        box-shadow: -4rpx 0 4rpx #f5f5f5;
      }
    }
  }
}
</style>
