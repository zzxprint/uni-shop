<template>
  <div class="class-button">
    <div class="class-img">
      <UnIcon v-if="icon" :icon="icon" :color="iconColor" size="60rpx" />
      <div v-else class="fake-img"></div>
    </div>
    <div class="class-text">{{ props.text }}</div>
  </div>
</template>

<script setup lang="ts">
import UnIcon from './UnIcon.vue'
const props = defineProps({
  text: String,
  width: {
    type: String,
    default: '90rpx'
  },
  icon: {
    type: String
  },
  iconColor: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.class-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: v-bind(width);
  background: #fff;
  box-sizing: border-box;
  .class-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90rpx;
    width: 90rpx;
    border-radius: $radius-base;
    overflow: hidden;
    .fake-img {
      height: 100%;
      width: 100%;
      background: #eee;
    }
  }
  .class-text {
    margin-top: 10rpx;
    width: v-bind(width);
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 24rpx;
  }
}
</style>
