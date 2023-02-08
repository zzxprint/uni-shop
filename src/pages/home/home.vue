<template>
  <!-- Logo及搜索按钮 -->
  <div class="search-container" :style="{ paddingTop: searchPaddingTop }">
    <div class="logo-container" :style="{ height: logoHeight }">
      Logo <div class="iconfont icon-home"></div>
    </div>
    <FakeSearchInput />
  </div>
  <!-- 分类 -->
  <ClassBar />
  <!-- 热门推荐 -->
  <div class="hot-container">
    <GoodCard class="good-card"/>
    <GoodCard class="good-card"/>
    <GoodCard class="good-card"/>
    <GoodCard class="good-card"/>
    <GoodCard class="good-card"/>
  </div>
</template>

<script setup lang="ts">
import FakeSearchInput from '@/components/FakeSearchInput.vue'
import GoodCard from '@/components/GoodCard.vue'
import ClassBar from '@/pages/home/components/ClassBar.vue'
import { ref, onMounted } from 'vue'
import { onPullDownRefresh } from "@dcloudio/uni-app"

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
.search-container{
  position: sticky;
  top: 0;
  padding: 10rpx 30rpx;
  background: #fff;
  box-sizing: border-box;
  .logo-container{
    display: flex;
    align-items: center;
    margin-bottom: 10rpx;
  }
}
.hot-container{
  padding: 30rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .good-card{
    margin-bottom: 30rpx;
  }
}
</style>
