<template>
  <!-- 搜索框 -->
  <div ref="searhDom" class="search-container" :style="{ paddingTop: searchPaddingTop, paddingRight: searchPaddingRight }">
    <FakeSearchInput placeholder="搜索商品" :height="searchHeight" :hide-btton="true" />
  </div>
  <div class="classification" :style="{ height: classHieght }">
    <scroll-view
      class="class-container"
      scroll-y
    >
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
      <div class="class-btn">分类名称</div>
    </scroll-view>
    <scroll-view
      class="goods-container"
      scroll-y
    >
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
    </scroll-view>
  </div>
</template>

<script setup lang="ts">
import GoodListCard from "@/components/GoodListCard.vue"
import FakeSearchInput from "@/components/FakeSearchInput.vue"
import { onPullDownRefresh } from "@dcloudio/uni-app"
import { ref, onMounted } from 'vue'

// 获取右上角胶囊位置并控制搜索栏高度和位置、分类页面高度
const searchHeight = ref('65rpx')
const searchPaddingTop = ref('10rpx')
const searchPaddingRight = ref('30rpx')
const classHieght = ref('100%')
onMounted(() => {
  if (uni.getMenuButtonBoundingClientRect) {
    let { top, height, left } = uni.getMenuButtonBoundingClientRect()
    searchHeight.value = height + 'px'
    searchPaddingTop.value = top + 'px'
    searchPaddingRight.value = `calc(100% - ${left}px + 30rpx)`
  }
  classHieght.value = `calc(100% - ${searchHeight.value} - ${searchPaddingTop.value} - 10rpx)`
})

// 下拉刷新
onPullDownRefresh(() => {
  console.log('下拉刷新')
  uni.stopPullDownRefresh()
})
</script>

<style>
page{
  height: 100%;
}
</style>

<style lang="scss" scoped>
.search-container{
  width: 100%;
  padding: 10rpx 30rpx;
  background: #fff;
  box-sizing: border-box;
}
.classification{
  display: flex;
  height: 100%;
  .class-container{
    flex-shrink: 0;
    width: 180rpx;
    height: 100%;
    background: #fff;
    .class-btn{
      padding-left: 20rpx;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 26rpx;
    }
  }
  .goods-container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
