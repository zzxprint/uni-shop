<template>
  <div class="goods-detail" :style="{ paddingBottom: paddingBottom }">
    <!-- 滚动图 -->
    <GoodsSwiper />
    <!-- 简介 -->
    <GoodsInfo />
    <!-- 详情 -->
    <GoodsIntro />
  </div>
  <!-- 操作 -->
  <GoodsAction :paddingBottom="safeAreaInsets?.bottom || 0" />
</template>

<script setup lang="ts">
import GoodsSwiper from './components/GoodsSwiper.vue'
import GoodsInfo from './components/GoodsInfo.vue'
import GoodsIntro from './components/GoodsIntro.vue'
import GoodsAction from './components/GoodsAction.vue'
import { useSystemInfoStore } from '@/store/systemInfo'
import { rpx2px } from '@/utils/index'

// 获取安全区域
const systemInfoStore = useSystemInfoStore()
const safeAreaInsets = systemInfoStore.safeAreaInsetsGet

// 计算操作栏需要空出的高度
const paddingBottom = `${(safeAreaInsets?.bottom || 0) + rpx2px(140)}px`
</script>

<style lang="scss" scoped>
</style>
