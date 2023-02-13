<template>
  <!-- 搜索框 -->
  <SearchContainer
    v-model="searchText"
    @search="search"
  />
  <!-- 搜索历史 -->
  <SearchTips
    title="搜索历史"
    :tagList="history"
    @choose="chooseTag"
  />
  <!-- 推荐搜索 -->
  <SearchTips
    title="搜索发现"
    :tagList="discovery"
    @choose="chooseTag"
  />
</template>

<script setup lang="ts">
import SearchContainer from './components/SearchContainer.vue'
import SearchTips from './components/SearchTips.vue'
import { ref } from 'vue'

const history = ['PS5', 'Switch']
const discovery = ['PS5', 'Xbox One X', 'Switch', 'Wii', 'Wii U', '3DS']

// 搜索框内容
const searchText = ref('')

// 选择tag并赋值到输入框
const chooseTag = (tagName: string) => {
  searchText.value = tagName
}

// 搜索
const search = () => {
  console.log('搜索', searchText.value)
}
</script>

<style lang="scss" scoped>

</style>
