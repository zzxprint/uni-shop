<template>
  <div class="search-input" @click="toSearchPage">
    <Icon icon="search" size="40rpx" color="#fbc02d"/>
    <div class="search-btn">搜索</div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
const toSearchPage = () => {
  uni.navigateTo({
    url: '/pages/search/search'
  })
}
</script>

<style lang="scss" scoped>
.search-input{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20rpx;
  width: 100%;
  height: 64rpx;
  border: 4rpx solid $main-color;
  border-radius: 64rpx;
  box-sizing: border-box;
  overflow: hidden;
  .search-btn{
    position: absolute;
    top: -4rpx;
    right: -4rpx;
    flex-shrink: 0;
    padding: 0 30rpx;
    height: 64rpx;
    line-height: 64rpx;
    width: auto;
    border-radius: 64rpx;
    font-size: 28rpx;
    color: #666;
    background: $main-color;
  }
}
</style>
