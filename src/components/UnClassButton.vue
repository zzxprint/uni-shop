<template>
  <div class="class-button" @click="emit('click')">
    <div class="class-img">
      <UnIcon v-if="icon" :icon="icon" :color="iconColor" size="60rpx" />
      <div v-else-if="img" class="url-img">
        <img class="img" :src="img" />
      </div>
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
  },
  img: {
    type: String
  }
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.class-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: v-bind(width);
  background: #fff;
  flex-direction: column;
  box-sizing: border-box;
  .class-img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 90rpx;
    height: 90rpx;
    border-radius: $radius-base;
    .fake-img,
    .url-img {
      width: 100%;
      height: 100%;
      background: #eee;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .class-text {
    overflow: hidden;
    margin-top: 10rpx;
    width: v-bind(width);
    font-size: 24rpx;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
