<template>
  <div class="hot-container">
    <GoodCard
      class="good-card"
      v-for="item in goodsList"
      :key="item.id"
      :goods-cover="item.goodsCover"
      :goods-name="item.goodsName"
      :goods-price="item.goodsPrice"
      :origin-price="item.originPrice"
    />
  </div>
</template>

<script setup lang="ts">
import GoodCard from '@/components/GoodCard.vue'
import type { ResGoodsInfo } from '@/api/interface'
import { getRecommendApi } from '@/api/goods'
import { ref } from 'vue'

const goodsList = ref<ResGoodsInfo[]>()
getRecommendApi().then(res => {
  goodsList.value = res.data
  console.log('goodsList.value', goodsList.value)
})
</script>

<style lang="scss" scoped>
.hot-container {
  display: flex;
  justify-content: space-between;
  padding: $padding-base;
  flex-wrap: wrap;
  box-sizing: border-box;
  .good-card {
    margin-bottom: 30rpx;
  }
}
</style>
