<template>
  <div class="classification">
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
    <div class="goods-container">
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
      <GoodListCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodListCard from "@/components/GoodListCard.vue"
import { onPullDownRefresh } from "@dcloudio/uni-app"

// 下拉刷新
onPullDownRefresh(() => {
  console.log('下拉刷新')
  uni.stopPullDownRefresh()
})
</script>

<style lang="scss" scoped>
.classification{
  .class-container{
    position: fixed;
    left: 0;
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
    padding-left: 180rpx;
    box-sizing: border-box;
  }
}
</style>
