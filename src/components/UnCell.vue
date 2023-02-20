<template>
  <div class="un-cell">
    <div class="un-cell-container">
      <div class="un-cell-label">{{ props.label }}</div>
      <div class="un-cell-content">
        <slot></slot>
        <Icon
          v-if="isLink"
          icon="arrow"
          color="#999"
          size="32rpx"
          :rotate="-90"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
const props = defineProps({
  label: String,
  // 是否展示向右箭头
  isLink: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang="scss" scoped>
.un-cell{
  padding: 0 30rpx;
  .un-cell-container{
    display: flex;
    align-items: center;
    height: 80rpx;
    width: 100%;
    line-height: 80rpx;
    border-bottom: 1px solid #f5f5f5;
  }
  .un-cell-label{
    flex: 1;
    color: $font-color-light;
    font-size: $font-size-base;
  }
  .un-cell-content{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    text-align: right;
  }
}
</style>
