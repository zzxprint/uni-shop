<template>
  <div class="un-cell">
    <div class="un-cell-container">
      <div
        class="un-cell-label"
        :style="{
          width: props.labelWidth
        }"
      >
        {{ props.label }}
      </div>
      <div class="un-cell-content">
        <slot></slot>
        <span class="un-cell-placeholder" v-if="value === ''">{{ placeholder }}</span>
        <span class="un-cell-value">{{ value }}</span>
        <Icon
          class="un-cell-icon"
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
import type { placeholder } from '@babel/types';
import Icon from './Icon.vue'
const props = defineProps({
  label: String,
  value: String,
  placeholder: String,
  labelWidth: {
    type: String,
    default: '315rpx'
  },
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
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
    width: 100%;
    line-height: 80rpx;
    border-bottom: 1px solid #f5f5f5;
  }
  .un-cell-label{
    color: $font-color-light;
    font-size: $font-size-base;
  }
  .un-cell-content{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    font-size: $font-size-base;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .un-cell-placeholder{
      color: #999;
    }
    .un-cell-value{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
