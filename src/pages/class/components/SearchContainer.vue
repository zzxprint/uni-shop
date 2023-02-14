<template>
  <div class="search-container" :style="{ paddingTop: searchPaddingTop, paddingRight: searchPaddingRight }">
    <FakeSearchInput placeholder="搜索商品" :height="searchHeight" :hide-btton="true" />
  </div>
</template>

<script setup lang="ts">
import FakeSearchInput from "@/components/FakeSearchInput.vue"
import { ref, onMounted } from 'vue'

const emit = defineEmits(['getHeight'])

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
  emit('getHeight', classHieght)
})
</script>

<style lang="scss" scoped>
.search-container{
  width: 100%;
  padding: 10rpx 30rpx;
  background: #fff;
  box-sizing: border-box;
}
</style>
