<template>
  <UnCard>
    <UnCell label="商品总价">
      <span><span class="price-symbol">￥</span> 99</span>
    </UnCell>
    <UnCell label="运费">
      <span>包邮</span>
    </UnCell>
  </UnCard>
</template>

<script setup lang="ts">
import UnCard from '@/components/UnCard.vue'
import UnCell from '@/components/UnCell.vue'
</script>

<style lang="scss" scoped>
.price-symbol {
  font-size: $font-size-sm;
}
</style>
