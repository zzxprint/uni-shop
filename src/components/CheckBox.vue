<template>
  <div class="check-box" :class="{ 'selected': modelValue }" @click="toggle">
    <Icon v-show="modelValue" icon="tick" size="30rpx" color="#fff" />
  </div>
</template>

<script setup lang='ts'>
import Icon from './Icon.vue'
const props = defineProps({
  modelValue: {
    type: [Boolean,String],
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

<style lang='scss' scoped>
.check-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rpx;
  width: 40rpx;
  border: 2rpx solid #ccc;
  border-radius: 50%;
  background: #fff;
  &.selected{
    border-color: $main-color;
    background: $main-color;
  }
}
</style>
