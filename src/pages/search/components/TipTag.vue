<template>
  <div class="tip-tag" @click="choose">
    {{ props.tagName }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['tagName'])
const emit = defineEmits(['choose'])

const choose = () => {
  emit('choose', props.tagName)
}
</script>

<style lang="scss" scoped>
.tip-tag {
  padding: 0 20rpx;
  margin: 10rpx;
  height: 50rpx;
  font-size: 28rpx;
  background: #e5e5e5;
  border-radius: 25rpx;
  line-height: 50rpx;
}
</style>
