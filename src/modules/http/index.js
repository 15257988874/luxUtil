import axios from 'axios'
import { httpCode } from '../../const/httpCode'
import { localStorage } from '../localStorage'

let instance = axios.create({})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urllencoded'
instance.interceptors.request.use(
  config => {
    if (localStorage.get('token')) config.headers['authorization'] = 'Bearer ' + localStorage.get('token')
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  response => response,
  err => {
    if (err && err.response) {
      if (err.response.status === 401) {
        // todo
      }
    }
    return Promise.reject(err.response && error.response.data)
  }
)
// 处理网络请求带来的校验
function checkStatus(response) {
  // 如果 http 状态码正常, 则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data || httpCode.NET_ERROR
  }
  return httpCode.NET_ERROR
}

// 校验服务器返回数据
function checkCode(res) {
  return res
}
const request = (url, param, config, method) => instance[method](url, param, Object.assign({}, config)).then(checkStatus).then(checkCode)
export default {
  init(option = { withCredentials: true }) {
    instance.defaults.baseURL = option.url
    instance.defaults.timeout = option.timeout || 20000
    instance.defaults.withCredentials = option.withCredentials
  },
  get: (url, param, config = {}) => request(url, param, config, 'get'),
  post: (url, param, config = {}) => request(url, param, config, 'post')
}
