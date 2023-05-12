<template>
  <div class="goods-detail" :style="{ paddingBottom: bottomPadding }">
    <!-- 滚动图 -->
    <GoodsSwiper />
    <!-- 简介 -->
    <GoodsInfo />
    <!-- 详情 -->
    <GoodsIntro />
  </div>
  <!-- 操作 -->
  <GoodsAction @getHeight="getBottomHeight" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GoodsSwiper from './components/GoodsSwiper.vue'
import GoodsInfo from './components/GoodsInfo.vue'
import GoodsIntro from './components/GoodsIntro.vue'
import GoodsAction from './components/GoodsAction.vue'

// 计算底部距离
const bottomHeight = ref(0)
const bottomPadding = ref('')
const getBottomHeight = (height: number, paddingBottom: number) => {
  console.log('height', height)
  bottomHeight.value = height
  bottomPadding.value = `${paddingBottom}px`
}
</script>
