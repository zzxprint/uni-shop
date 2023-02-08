<template>
  <div class="address">
    <AddressCard />
    <AddressCard />
  </div>
</template>

<script setup lang='ts'>
import AddressCard from '@/pages/address/components/AddressCard.vue';
</script>

<style lang='scss' scoped>
.address{
  padding: 0 30rpx;
  overflow: hidden;
}
</style>
