<template>
  <div class="cart">
    <CartGoodCard />
  </div>
  <!-- 结算栏 -->
  <SubmitBar />
</template>

<script setup lang="ts">
import CartGoodCard from '@/pages/cart/components/CartGoodCard.vue'
import SubmitBar from '@/pages/cart/components/SubmitBar.vue'
</script>

<style lang="scss">
.cart {
  padding: 30rpx;
}
</style>
