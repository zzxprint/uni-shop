<template>
  <UnCard @click="toAddress">
    <div class="order-address">
      <div class="address-info">
        <div class="info">浙江省 杭州市 滨江区</div>
        <div class="info important">浦沿街道XX小区X幢X单元X</div>
        <div class="info">蜘蛛侠 157****0057 <UnTag round fill type="main" text="家" /></div>
      </div>
      <UnIcon icon="arrow" color="#999" :rotate="-90" />
    </div>
  </UnCard>
</template>

<script setup lang="ts">
import UnCard from '@/components/UnCard.vue'
import UnIcon from '@/components/UnIcon.vue'
import UnTag from '@/components/UnTag.vue'

const toAddress = () => {
  uni.navigateTo({
    url: '/pages/address/address'
  })
}
</script>

<style lang="scss" scoped>
.order-address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding-base;
  .address-info {
    font-size: $font-size-sm;
    color: $font-color-light;
    .info {
      margin-top: 10rpx;
    }
    .important {
      font-size: $font-size-base;
      color: $font-color-base;
      font-weight: bold;
    }
  }
}
</style>
