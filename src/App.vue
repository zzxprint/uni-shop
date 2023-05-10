<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { useSystemInfoStore } from './store/systemInfo'
onLaunch(() => {
  console.log('App Launch')
  // 获取用户系统信息
  const systemInfoStore = useSystemInfoStore()
  systemInfoStore.getSystemInfo()
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import '@/static/icon/iconfont.css';
page {
  background: $background-color;
  font-size: 30rpx;
  color: #333;
}
</style>
