<template>
  <UnContainer :bindStyle="{ paddingTop: 0 }">
    <!-- 地址 -->
    <OrderAddress />
    <!-- 商品列表 -->
    <GoodsList />
    <!-- 邮费+总价 -->
    <GoodsTotalPrice />
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
import GoodsList from './components/GoodsList.vue'
import GoodsTotalPrice from './components/GoodsTotalPrice.vue'
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
