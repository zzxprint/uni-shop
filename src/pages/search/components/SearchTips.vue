<template>
  <div class="search-tips">
    <div class="title">{{ props.title }}</div>
    <div class="tips-container">
      <TipTag
        v-for="name in props.tagList"
        :key="name"
        :tagName="name"
        @choose="name => emit('choose', name)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TipTag from './TipTag.vue'
const props = defineProps(['title', 'tagList'])
const emit = defineEmits(['choose'])
</script>

<style lang="scss" scoped>
.search-tips {
  padding: 40rpx 20rpx 0 20rpx;
  .title {
    font-weight: bold;
  }
  .tips-container {
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;
    .tips-tag {
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
