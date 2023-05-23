import { get } from '@/api'
import type { ResGoodsInfo } from './interface/index'

// 获取热门推荐
export const getRecommendApi = () => {
  return get<ResGoodsInfo[]>('/getRecommend')
}
