<template>
  <!-- 收货信息 -->
  <UnCard>
    <UnCell label="收货人">
      <input class="un-label-input" type="text" :value="'123'">
    </UnCell>
    <UnCell label="手机号码">
      <input class="un-label-input" type="text" :value="'13888888888'">
    </UnCell>
    <picker mode="region" @change="bindRegionChange">
      <UnCell label="所在地区" isLink>
      </UnCell>
    </picker>
    <UnCell label="详细地址">
      <input class="un-label-input" type="text" :value="'详细地址'">
    </UnCell>
  </UnCard>
  <!-- 标签 -->
  <UnCard>
    <UnCell label="地址标签"></UnCell>
  </UnCard>
  <!-- 默认地址 -->
  <UnCard>
    <UnCell label="设为默认收货地址"></UnCell>
  </UnCard>
  <div class="btn-container">
    <UnButton>保存并使用</UnButton>
  </div>
</template>

<script setup lang="ts">
import UnCard from '@/components/UnCard.vue'
import UnCell from '@/components/UnCell.vue'
import UnButton from '@/components/UnButton.vue'
import { ref } from 'vue'

// 所在地区
const region = ref('')
const bindRegionChange = (e: any) => {
  region.value = e.detail.value.join(' ')
}
</script>

<style lang="scss" scoped>
.btn-container{
  padding: 0 30rpx;
}
</style>
