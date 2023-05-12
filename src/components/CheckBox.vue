<template>
  <div class="check-box" :class="{ selected: modelValue }" @click="toggle">
    <UnIcon v-show="modelValue" icon="tick" size="28rpx" color="#fff" />
  </div>
</template>

<script setup lang="ts">
import UnIcon from './UnIcon.vue'
const props = defineProps({
  modelValue: {
    type: [Boolean, String],
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

// 勾选、取消勾选
const toggle = () => {
  const value = !props.modelValue
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.check-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rpx;
  height: 40rpx;
  background: #fff;
  border: 2rpx solid #ccc;
  border-radius: 50%;
  &.selected {
    background: $main-color;
    border-color: $main-color;
  }
}
</style>
