import Axios from 'axios'
import { Toast } from 'antd-mobile'
const service = Axios.create({
  baseURL: '/api',
  timeout: 200000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return err
  }
)
service.interceptors.response.use(
  response => {
    const { data } = response
    if (data.msgCode === '40000') {
    }
    if (data.msgCode === '50000') {
      Toast.fail(data.msg)
      return Promise.reject(data.msg)
    }
    return data.data
  },
  error => {
    return error
  }
)

export default service
