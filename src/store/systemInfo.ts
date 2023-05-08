import { defineStore } from "pinia";

type SystemInfo = Partial<UniApp.GetSystemInfoResult>

export const useSystemInfoStore = defineStore({
  id: 'systemInfo',
  state: (): SystemInfo => ({
    screenWidth: 0,
    devicePixelRatio: 0,
    osName: '',
    safeAreaInsets: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }),
  getters: {
    // 屏幕宽度
    screenWidthGet: state => state.screenWidth,
    // 安全区域
    safeAreaInsetsGet: state => state.safeAreaInsets
  },
  actions: {
    getSystemInfo () {
      uni.getSystemInfo({
        success: (res) => {
          const { screenWidth, devicePixelRatio, osName, safeAreaInsets } = res
          this.screenWidth = screenWidth
          this.devicePixelRatio = devicePixelRatio
          this.osName = osName
          this.safeAreaInsets = safeAreaInsets
        }
      })
    }
  }
})