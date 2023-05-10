import { useSystemInfoStore } from '@/store/systemInfo'

export const rpx2px = (rpx: number) => {
  const systemInfo = useSystemInfoStore()
  const screenWidth = systemInfo.screenWidthGet || 0
  return (screenWidth * rpx) / 750
}

export const px2rpx = (px: number) => {
  const systemInfo = useSystemInfoStore()
  const screenWidth = systemInfo.screenWidthGet || 0
  return (750 * px) / screenWidth
}
