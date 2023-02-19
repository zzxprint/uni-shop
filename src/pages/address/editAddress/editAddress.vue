<template>
  <div class="edit-address">
    <div class="edit-card">
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text">收货人</span>
          <div class="un-label-content">
            <input class="un-label-input" type="text" :value="'123'">
          </div>
        </div>
      </div>
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text">手机号码</span>
          <div class="un-label-content">
            <input class="un-label-input" type="text" :value="'13888888888'">
          </div>
        </div>
      </div>
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text">所在地区</span>
          <div class="un-label-content">
            <input class="un-label-input" type="text" :value="'浙江省 杭州市 滨江区'">
          </div>
        </div>
      </div>
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text">详细地址</span>
          <div class="un-label-content">
            <input class="un-label-input" type="text" :value="'详细地址'">
          </div>
        </div>
      </div>
    </div>
    <div class="edit-card">
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text" style="width:300rpx">地址标签</span>
        </div>
      </div>
    </div>
    <div class="edit-card">
      <div class="un-label">
        <div class="un-label-container">
          <span class="un-label-text" style="width:300rpx">设为默认收货地址</span>
        </div>
      </div>
    </div>
    <button class="un-button" hover-class="un-button-hover">保存并使用</button>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.edit-address{
  padding: 0 30rpx;
  .edit-card{
    margin: 20rpx 0;
    width: 100%;
    height: auto;
    background: #fff;
    box-sizing: border-box;
    border-radius: $radius-base;
    .un-label{
      padding: 0 30rpx;
      .un-label-container{
        display: flex;
        align-items: center;
        height: 80rpx;
        line-height: 80rpx;
        border-bottom: 1px solid #f5f5f5;
        .un-label-text{
          width: 140rpx;
          flex-shrink: 0;
          color: $font-color-light;
          font-size: $font-size-base;
        }
        .un-label-content{
          display: flex;
          align-items: center;
          padding: 0 20rpx;
          width: 100%;
          height: 100%;
          .un-label-input{
            width: 100%;
          }
        }
      }
    }
  }
  .un-button{
    height: 90rpx;
    line-height: 90rpx;
    border-radius: 45rpx;
    color: #fff;
    letter-spacing: 2rpx;
    font-size: $font-size-lg;
    background-color: $main-color;
    &::after{
      border: none;
    }
    &.un-button-hover{
      &::before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 10%)
      }
    }
  }
}
</style>
