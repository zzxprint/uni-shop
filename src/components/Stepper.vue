<template>
  <div class="stepper">
    <button class="minus-btn" @click="minusValue">-</button>
    <input class="step-input" type="number" v-model="value" />
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
.stepper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40rpx;
  .minus-btn,
  .plus-btn {
    padding: 0;
    margin: 0;
    width: 50rpx;
    height: 40rpx;
    background: #fff;
    line-height: 40rpx;
    &::after {
      border: none;
    }
  }
  .step-input {
    width: 60rpx;
    height: 40rpx;
    min-height: 40rpx;
    font-size: 24rpx;
    text-align: center;
    background: #eee;
  }
}
</style>
