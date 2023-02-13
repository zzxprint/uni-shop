<template>
  <div class="search-container">
    <div class="search-input">
      <Icon icon="search" />
      <input
        focus
        auto-focus
        class="input"
        placeholder="搜索商品"
        type="text"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <div
        class="delete-icon"
        @click="emit('update:modelValue', '')"
      >
        <Icon
          v-show="props.modelValue"
          icon="delete"
          color="#999"
        />
      </div>
    </div>
    <span class="search-text" @click="searchClick">搜索</span>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'search'])

const searchClick = () => {
  emit('search')
}
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
      width: 100%;
      margin-left: 20rpx;
      font-size: 28rpx;
    }
    .delete-icon{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50rpx;
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
</style>
