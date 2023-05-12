<template>
  <UnContainer :bindStyle="{ paddingTop: 0 }">
    <!-- 地址 -->
    <OrderAddress />
  </UnContainer>
  <!-- 付款栏 -->
  <UnBottomBar>
    <div class="pay-btn-container">
      <span>合计</span>
      <UnButton class="pay-btn">付款</UnButton>
    </div>
  </UnBottomBar>
</template>

<script setup lang="ts">
import UnContainer from '@/components/UnContainer.vue'
import OrderAddress from './components/OrderAdress.vue'
import UnBottomBar from '@/components/UnBottomBar.vue'
import UnButton from '@/components/UnButton.vue'
</script>

<style lang="scss" scoped>
.pay-btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .pay-btn {
    width: 200rpx;
  }
}
</style>
