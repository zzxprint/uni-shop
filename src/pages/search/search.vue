<template>
  <!-- 搜索框 -->
  <div class="search-container">
    <div class="search-input">
      <Icon icon="search" />
      <input focus auto-focus class="input" placeholder="搜索商品" type="text">
    </div>
    <span class="search-text">搜索</span>
  </div>
  <!-- 搜索历史 -->
  <div class="search-tips">
    <div class="title">搜索历史</div>
    <div class="tips-container">
      <div class="tips-tag">PS5</div>
      <div class="tips-tag">Switch</div>
    </div>
  </div>
  <!-- 推荐搜索 -->
  <div class="search-tips">
    <div class="title">搜索发现</div>
    <div class="tips-container">
      <div class="tips-tag">PS5</div>
      <div class="tips-tag">Xbox One X</div>
      <div class="tips-tag">Switch</div>
      <div class="tips-tag">Wii</div>
      <div class="tips-tag">Wii U</div>
      <div class="tips-tag">3DS</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
</script>

<style lang="scss" scoped>
.search-container{
  display: flex;
  align-items: center;
  padding: 20rpx 0 10rpx 0;
  background: #fff;
  .search-input{
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    margin-left: 20rpx;
    width: 100%;
    height: 65rpx;
    border-radius: 65rpx;
    background: $background-color;
    .input{
      margin-left: 20rpx;
      font-size: 28rpx;
    }
  }
  .search-text{
    flex-shrink: 0;
    padding: 0 15rpx;
    width: 80rpx;
    text-align: center;
    height: 65rpx;
    line-height: 65rpx;
  }
}
.search-tips{
  padding: 40rpx 20rpx 0 20rpx;
  .title{
    font-weight: bold;
  }
  .tips-container{
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;
    .tips-tag{
      height: 50rpx;
      line-height: 50rpx;
      padding: 0 20rpx;
      margin: 10rpx;
      font-size: 28rpx;
      background: #e5e5e5;
      border-radius: 25rpx;
    }
  }
}
</style>
