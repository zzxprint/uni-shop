export interface ResultData<T = any> {
  code: number
  data: T
  success: boolean
  message?: string
}

const BASE_URL = 'https://mock.mengxuegu.com/mock/646070707ba95d67784d6ec1'

export const get = <T>(url: string, data?: any): Promise<ResultData<T>> => {
  return request<T>(url, 'GET', data)
}

export const post = <T>(url: string, data?: any): Promise<ResultData<T>> => {
  return request<T>(url, 'POST', data)
}

/**
 * 封装通用请求方法
 * @param url 请求地址
 * @param method 请求方法
 * @param data 请求参数
 * @returns 请求结果
 */
const request = <T>(url: string, method: 'GET' | 'POST', data?: any): Promise<ResultData<T>> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      method,
      data,
      success: res => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResultData<T>)
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
