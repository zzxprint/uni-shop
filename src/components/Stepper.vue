<template>
  <div class="stepper">
    <button class="minus-btn" @click="minusValue">-</button>
    <input
      class="step-input"
      type="number"
      v-model="value"
    >
    <button class="plus-btn" @click="plusValue">+</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const minusValue = () => {
  emit('update:modelValue', props.modelValue - 1)
}

const plusValue = () => {
  emit('update:modelValue', props.modelValue + 1)
}
</script>

<style lang="scss" scoped>
.stepper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rpx;
  width: auto;
  .minus-btn, .plus-btn{
    padding: 0;
    width: 50rpx;
    height: 40rpx;
    line-height: 40rpx;
    margin: 0;
    background: #fff;
    &::after{
      border: none;
    }
  }
  .step-input{
    height: 40rpx;
    width: 60rpx;
    background: #eee;
    font-size: 24rpx;
    text-align: center;
    min-height: 40rpx;
  }
}
</style>
