<template>
  <div class="class-bar">
    <div class="class-bar-pad">
      <div class="class-bar-container" v-for="(item, index) in classList" :key="index">
        <UnClassButton
          width="130rpx"
          :text="item.className"
          :img="item.classIcon"
          @click="toPageClass(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UnClassButton from '@/components/UnClassButton.vue'
import type { ResClassList } from '@/api/interface/index'
import { getClassListApi } from '@/api/classList'
import { useStorageStore } from '@/store/storage'

const classList = ref<ResClassList[]>()
getClassListApi().then(res => {
  classList.value = res.data
})

const toPageClass = (classId: string) => {
  const storageStore = useStorageStore()
  storageStore.setChoosedClassId(classId)
  uni.switchTab({
    url: '/pages/class/class'
  })
}
</script>

<style lang="scss" scoped>
.class-bar {
  padding: 0 $padding-base;
  margin-top: 20rpx;
  width: 100%;
  height: 320rpx;
  box-sizing: border-box;
  .class-bar-pad {
    display: grid;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: $radius-base;
    box-shadow: 2rpx 2rpx 10rpx #f5f5f5;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(2, 50%);
    .class-bar-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
