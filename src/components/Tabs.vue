<template>
  <div class="tabs">
    <div
      v-for="tab in props.tabList"
      :key="tab.value"
      :class="{ tab: true, active: tab.value === active }"
      @click="changeTab(tab.value)"
    >
      {{ tab.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
type tab = {
  text: string
  value: string
}
interface Props {
  active: string
  tabList: Array<tab>
}
const props = defineProps<Props>()
const emit = defineEmits(['update:active'])

const changeTab = (value: string) => {
  emit('update:active', value)
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
  background: #fff;
  .tab {
    text-align: center;
    flex: 1;
    &.active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 40%;
        height: 6rpx;
        background: $main-color;
        border-radius: 3rpx;
      }
    }
  }
}
</style>
