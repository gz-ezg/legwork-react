import Axios from 'axios'

const service = Axios.create({
  baseURL: '/test',
  timeout: 200000
})

service.interceptors.request.use(config => {}, err => {})
service.interceptors.response.use(response => {}, error => {})

export default service
