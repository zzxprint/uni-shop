<template>
  <div class="address" :style="{ paddingBottom: bottomPadding }">
    <AddressCard />
    <AddressCard />
  </div>
  <UnBottomBar @getHeight="getBottomHeight">
    <UnButton class="add-btn" @click="toEditAddress">新增收货地址</UnButton>
  </UnBottomBar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddressCard from '@/pages/address/components/AddressCard.vue'
import UnBottomBar from '@/components/UnBottomBar.vue'
import UnButton from '@/components/UnButton.vue'

// 计算底部距离
const bottomHeight = ref(0)
const bottomPadding = ref('')
const getBottomHeight = (height: number, paddingBottom: number) => {
  bottomHeight.value = height
  bottomPadding.value = `${paddingBottom}px`
}

// 去往新增收货地址
const toEditAddress = () => {
  uni.navigateTo({
    url: '/pages/address/editAddress/editAddress'
  })
}
</script>

<style lang="scss" scoped>
.address {
  padding: 0 $padding-base;
  overflow: hidden;
}
.add-btn {
  width: 100%;
}
</style>
