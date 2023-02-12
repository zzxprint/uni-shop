<template>
  <div
    class="search-input"
    :style="{
      height: props.height,
      borderRadius: props.height
    }"
    @click="toSearchPage"
  >
    <Icon icon="search" size="40rpx" color="#fbc02d"/>
    <span class="place-holder">{{ placeholder }}</span>
    <div
      v-show="!hideBtton"
      class="search-btn"
      :style="{
        height: props.height,
        lineHeight: props.height,
        borderRadius: props.height
      }"
    >
      搜索
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '64rpx'
  },
  hideBtton: {
    type: Boolean,
    default: false
  }
})

// 去往搜索页面
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
  border: 4rpx solid $main-color;
  box-sizing: border-box;
  overflow: hidden;
  .place-holder{
    width: 100%;
    padding-left: 10rpx;
    text-align: left;
    font-size: 26rpx;
    color: #999;
  }
  .search-btn{
    position: absolute;
    top: -4rpx;
    right: -4rpx;
    flex-shrink: 0;
    padding: 0 30rpx;
    width: auto;
    font-size: 28rpx;
    color: #666;
    background: $main-color;
  }
}
</style>
