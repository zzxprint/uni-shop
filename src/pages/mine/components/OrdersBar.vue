<template>
  <div class="orders-bar">
    <div class="orders-bar-pad">
      <navigator class="tool-btn" url="/pages/orders/orders?tab=tobePaid">
        <ClassificationButton
          text="待付款"
          icon="wallet"
          icon-color="#fbc02d"
          width="136rpx"
        />
      </navigator>
      <navigator class="tool-btn" url="/pages/orders/orders?tab=tobeReceived">
        <ClassificationButton
          text="待收货"
          icon="car"
          icon-color="#fbc02d"
          width="136rpx"
        />
      </navigator>
      <navigator class="tool-btn" url="/pages/orders/orders?tab=finish">
        <ClassificationButton
          text="已完成"
          icon="finish-order"
          icon-color="#fbc02d"
          width="136rpx"
        />
      </navigator>
      <ClassificationButton
        text="售后"
        icon="refund"
        icon-color="#fbc02d"
        width="136rpx"
      />
      <div class="all-orders">
        <navigator class="tool-btn" url="/pages/orders/orders?tab=all">
          <ClassificationButton
            text="全部"
            icon="order"
            icon-color="#fbc02d"
            width="136rpx"
          />
        </navigator>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClassificationButton from '@/components/ClassificationButton.vue'
</script>

<style lang="scss" scoped>
.orders-bar {
  margin-top: 30rpx;
  padding: 0 30rpx;
  width: 100%;
  height: 180rpx;
  box-sizing: border-box;
  .orders-bar-pad {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    border-radius: $radius-base;
    background: #fff;
    overflow: hidden;
    .all-orders {
      display: flex;
      position: relative;
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
