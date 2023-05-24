<template>
  <!-- Logo及搜索按钮 -->
  <div class="search-container" :style="{ paddingTop: searchPaddingTop }">
    <div class="logo-container" :style="{ height: logoHeight }">
      <img class="logo" src="@/static/logo.png" />
    </div>
    <FakeSearchInput />
  </div>
  <!-- 分类 -->
  <ClassBar />
  <!-- 热门推荐 -->
  <HotRecommend />
</template>

<script setup lang="ts">
import FakeSearchInput from '@/components/FakeSearchInput.vue'
import ClassBar from '@/pages/home/components/ClassBar.vue'
import HotRecommend from './components/HotRecommend.vue'
import { ref, onMounted } from 'vue'
import { onPullDownRefresh } from '@dcloudio/uni-app'

// 获取右上角胶囊位置并控制搜索栏高度和位置
let logoHeight = ref('30px')
let searchPaddingTop = ref('0px')
onMounted(() => {
  if (uni.getMenuButtonBoundingClientRect) {
    let { top, height } = uni.getMenuButtonBoundingClientRect()
    logoHeight.value = height + 'px'
    searchPaddingTop.value = top + 'px'
  }
})

// 下拉刷新
onPullDownRefresh(() => {
  console.log('下拉刷新')
  uni.stopPullDownRefresh()
})
</script>

<style lang="scss" scoped>
.search-container {
  position: sticky;
  top: 0;
  padding: 10rpx 30rpx;
  background: #fff;
  box-sizing: border-box;
  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 10rpx;
    .logo {
      height: 50rpx;
      width: 50rpx;
    }
  }
}
</style>
