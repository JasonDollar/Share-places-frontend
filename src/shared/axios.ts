import axios, { AxiosResponse, AxiosError } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  responseType: 'json',
})

axiosInstance.defaults.validateStatus = function () {
  return true
}

axiosInstance.interceptors.response.use((response: AxiosResponse) => response, (error:AxiosError) => Promise.reject(error))

export default axiosInstance