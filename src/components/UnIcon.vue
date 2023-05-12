<template>
  <div
    :class="['iconfont', `icon-${props.icon}`]"
    :style="{
      color: props.color,
      fontSize: props.size,
      transform: `rotate(${rotate}deg)`
    }"
    @click="emit('click')"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '32rpx'
  },
  rotate: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['click'])
</script>
