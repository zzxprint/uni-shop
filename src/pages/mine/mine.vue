<template>
  <div class="user-info" :style="{ paddingTop }">
    <div class="user-avatar"></div>
    <div class="user-name">用户名</div>
  </div>
  <!-- 订单列表 -->
  <OrdersBar />
  <!-- 工具区域 -->
  <ToolsContainer />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onPullDownRefresh } from '@dcloudio/uni-app'
import OrdersBar from '@/pages/mine/components/OrdersBar.vue'
import ToolsContainer from '@/pages/mine/components/ToolsContainer.vue'

// 获取右上角胶囊位置并控制用户信息位置
let paddingTop = ref('10px')
onMounted(() => {
  if (uni.getMenuButtonBoundingClientRect) {
    let { top } = uni.getMenuButtonBoundingClientRect()
    paddingTop.value = top + 10 + 'px'
  }
})

// 下拉刷新
onPullDownRefresh(() => {
  console.log('下拉刷新')
  uni.stopPullDownRefresh()
})
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  padding: 0 $padding-base;
  box-sizing: border-box;
  .user-avatar {
    width: 100rpx;
    height: 100rpx;
    background: #eee;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 20rpx;
  }
}
</style>
