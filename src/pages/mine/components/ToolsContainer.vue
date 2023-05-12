<template>
  <div class="tools-container">
    <div class="tools-pad">
      <ClassificationButton
        class="tool-btn"
        text="个人信息"
        icon="person"
        icon-color="#fbc02d"
        width="230rpx"
      />
      <navigator class="tool-btn" url="/pages/address/address">
        <ClassificationButton text="收货地址" icon="position" icon-color="#fbc02d" width="230rpx" />
      </navigator>
      <ClassificationButton
        class="tool-btn"
        text="客服中心"
        icon="service"
        icon-color="#fbc02d"
        width="230rpx"
      />
      <ClassificationButton
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
import ClassificationButton from '@/components/ClassificationButton.vue'
</script>

<style lang="scss" scoped>
.tools-container {
  margin-top: 30rpx;
  padding: 0 $padding-base;
  .tools-pad {
    display: flex;
    flex-wrap: wrap;
    border-radius: $radius-base;
    background: #fff;
    .tool-btn {
      margin: 30rpx 0;
    }
  }
}
</style>
