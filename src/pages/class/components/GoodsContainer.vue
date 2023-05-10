<template>
  <scroll-view class="goods-container" scroll-y>
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
    <GoodListCard />
  </scroll-view>
</template>

<script setup lang="ts">
import GoodListCard from '@/components/GoodListCard.vue'
</script>

<style lang="scss" scoped>
.goods-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
