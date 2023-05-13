<template>
  <UnContainer bindStyle="padding-top: 0">
    <!-- 收货信息 -->
    <UnCard>
      <UnCell label="收货人">
        <input placeholder-class="placeholder" type="text" placeholder="请输入收货人" />
      </UnCell>
      <UnCell label="手机号码">
        <input placeholder-class="placeholder" type="text" placeholder="请输入手机号码" />
      </UnCell>
      <picker mode="region" @change="bindRegionChange">
        <UnCell label="所在地区" :value="region" placeholder="请选择所在地区" labelWidth="300rpx" />
      </picker>
      <UnCell label="详细地址">
        <input placeholder-class="placeholder" type="text" placeholder="请输入详细地址" />
      </UnCell>
    </UnCard>
    <!-- 标签 -->
    <UnCard>
      <UnCell label="地址标签">
        <div class="tag-container">
          <UnTag
            fill
            round
            :color="tag === 'home' ? '#fbc02d' : '#ccc'"
            text="家"
            @click="chooseTag('home')"
          />
          <UnTag
            fill
            round
            :color="tag === 'company' ? '#fbc02d' : '#ccc'"
            text="公司"
            @click="chooseTag('company')"
          />
          <UnTag
            fill
            round
            :color="tag === 'school' ? '#fbc02d' : '#ccc'"
            text="学校"
            @click="chooseTag('school')"
          />
        </div>
      </UnCell>
    </UnCard>
    <!-- 默认地址 -->
    <UnCard>
      <UnCell label="设为默认收货地址">
        <switch checked color="#fbc02d" style="transform: scale(0.9) translateX(10rpx)" />
      </UnCell>
    </UnCard>
    <!-- 保存按钮 -->
    <UnButton>保存并使用</UnButton>
  </UnContainer>
</template>

<script setup lang="ts">
import UnContainer from '@/components/UnContainer.vue'
import UnCard from '@/components/UnCard.vue'
import UnCell from '@/components/UnCell.vue'
import UnTag from '@/components/UnTag.vue'
import UnButton from '@/components/UnButton.vue'
import { ref } from 'vue'

// 所在地区
const region = ref('')
const bindRegionChange = (e: any) => {
  region.value = e.detail.value.join(' ')
}

// 地址标签
const tag = ref('home')
const chooseTag = (tagName: string) => {
  tag.value = tagName
}
</script>

<style lang="scss" scoped>
.tag-container {
  display: flex;
  justify-content: space-around;
  width: 220rpx;
}
</style>
