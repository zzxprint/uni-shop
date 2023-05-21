<template>
  <div class="tools-container">
    <div class="tools-pad">
      <UnClassButton
        class="tool-btn"
        text="个人信息"
        icon="person"
        icon-color="#fbc02d"
        width="230rpx"
      />
      <navigator class="tool-btn" url="/pages/address/address">
        <UnClassButton text="收货地址" icon="position" icon-color="#fbc02d" width="230rpx" />
      </navigator>
      <UnClassButton
        class="tool-btn"
        text="客服中心"
        icon="service"
        icon-color="#fbc02d"
        width="230rpx"
      />
      <UnClassButton
        class="tool-btn"
        text="设置"
        icon="setting"
        icon-color="#fbc02d"
        width="230rpx"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UnClassButton from '@/components/UnClassButton.vue'
</script>

<style lang="scss" scoped>
.tools-container {
  padding: 0 $padding-base;
  margin-top: 30rpx;
  .tools-pad {
    display: flex;
    background: #fff;
    border-radius: $radius-base;
    flex-wrap: wrap;
    .tool-btn {
      margin: 30rpx 0;
    }
  }
}
</style>
