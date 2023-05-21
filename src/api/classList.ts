import { get, post } from '@/api'
import type { ResClassList } from './interface'

// 获取分类列表
export const getClassListApi = () => {
  return get<ResClassList[]>('/getClassList')
}
