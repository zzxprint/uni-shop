<template>
  <div class="address-card">
    <div class="address-info">
      <div class="user-info">
        <span class="user-name">张大千</span>
        157****0057
      </div>
      <div class="address-detail">
        浙江省 杭州市 滨江区 浦沿街道联庄公寓8幢2单元501
      </div>
    </div>
    <Icon icon="edit" size="38rpx" color="#666" @click="toEditAddressPage" />
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
// 去往编辑页面
const toEditAddressPage = () => {
  uni.navigateTo({
    url: '/pages/address/editAddress/editAddress'
  })
}
</script>

<style lang="scss" scoped>
.address-card {
  display: flex;
  align-items: center;
  padding: 40rpx;
  margin: 20rpx 0;
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: $radius-base;
  box-sizing: border-box;
  .address-info {
    width: 100%;
    .user-info {
      font-size: 30rpx;
      .user-name {
        font-size: 32rpx;
      }
    }
    .address-detail {
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #666;
      letter-spacing: 2rpx;
    }
  }
  .edit-btn {
    flex-shrink: 0;
    width: 80rpx;
    text-align: right;
  }
}
</style>
