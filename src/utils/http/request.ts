import { AxiosRequestConfig } from 'axios'
import axios from './Axios'

const http = {
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    return axios.get(url, config)
  },

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    return axios.post(url, data, config)
  },

  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    return axios.delete(url, config)
  },
}

export default http
