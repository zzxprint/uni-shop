<template>
  <!-- 分类栏 -->
  <Tabs v-model:active="active" :tabList="tabList" />
  <!-- 订单信息 -->
  <div class="orders-container">
    <OrderCard />
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import OrderCard from './components/OrderCard.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 分类栏信息
const tabList = [
  { text: '待付款', value: 'tobePaid' },
  { text: '待收货', value: 'tobeReceived' },
  { text: '已完成', value: 'finish' },
  { text: '全部', value: 'all' }
]

// 加载时自动选取tab
const active = ref('')
onLoad((option) => {
  if (option && option.tab && tabList.some(e => e.value === option.tab)) {
    active.value = option.tab
  } else {
    active.value = 'all'
  }
})
</script>

<style lang="scss" scoped>
.orders-container{
  padding: 30rpx;
}
</style>
