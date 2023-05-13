<template>
  <!-- 搜索框 -->
  <SearchContainer @getHeight="setClassHeight" />
  <div class="classification" :style="{ height: classHieght }">
    <!-- 分类列表 -->
    <UnSideBar v-model="activeClass" :list="classList" />
    <!-- 商品列表 -->
    <GoodsContainer />
  </div>
</template>

<script setup lang="ts">
import SearchContainer from './components/SearchContainer.vue'
import UnSideBar from '@/components/UnSideBar.vue'
import GoodsContainer from './components/GoodsContainer.vue'
import { onPullDownRefresh } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取分类容器高度
const classHieght = ref('100%')
const setClassHeight = (height: string) => {
  classHieght.value = height
}

// 获取分类列表信息
const classList = [
  { label: '分类名称1', value: 'class1' },
  { label: '分类名称2', value: 'class2' },
  { label: '分类名称3', value: 'class3' },
  { label: '分类名称4', value: 'class4' }
]

// 当前激活的分类
const activeClass = ref('class1')

// 下拉刷新
onPullDownRefresh(() => {
  console.log('下拉刷新')
  uni.stopPullDownRefresh()
})
</script>

<style>
page {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.classification {
  display: flex;
  height: 100%;
}
</style>
