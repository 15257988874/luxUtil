# luxutil

> 中后台应用工具库

## 安装

```
npm install luxutil
```

## 使用说明

```
// 方式一 整体引入
import luxutils from 'luxutil'

// 方式二 按需引入
import { http, localStorage, tools} from 'luxutil'

//挂载
Vue.prototype.$axios = luxutils.http
Vue.prototype.$localStorage = luxutils.localStorage
Vue.prototype.$tools = luxutils.tools
```

## API 文档 :stuck_out_tongue_closed_eyes:

### 1.localStorage

- get: 获取 localStorage
- set: 设置 localStorage
- delete: 删除 localStorage

```
import { localStorage } from 'kdutil'

localStorage.get('token')

localStorage.set('token','32sfdff232')

// 删除指定key
localStorage.delete('token')

// 删除所有
localStorage.delete()
```

### 2.sessionStorage

- get: 获取 sessionStorage
- set: 设置 sessionStorage
- delete: 删除 sessionStorage

```
import { sessionStorage } from 'kdutil'

sessionStorage.get('token')

sessionStorage.set('token','32sfdff232')

// 删除指定key
sessionStorage.delete('token')

// 删除所有
sessionStorage.delete()
```

### 3.date

- formatPassTime: 格式化现在已过的时间

```
import { date } from 'kdutil';

date.formatPassTime (1586840260500)

date.formatPassTime (new Date('2019-08-23'))
```

- format:格式化时间

```
import { date } from 'kdutil'

date.formatTime (new Date())  // 默认格式 'yyyy-MM-dd hh:mm:ss'

date.formatTime (new Date(),'yyyy:MM:dd')  // 自定义格式 'yyyy.MM.dd'
```

### 4.http

> 基于 axios 的二次封装

- init: axios 初始化配置 option
- get: get 请求方式
- post: post 请求方式

```
import { http } from 'kdutil'
const option = {
  url: process.env.VUE_APP_URL ,  // 根据不同环节配置初始化baseUrl
}
http.init(option)

export const getUser = async (params = {}) => http.get(`/user/list`, { params })
```

### 5.tools

> 常用函数工具库

- formatPhone: 将手机号中间部分替换为星号

```
 tools.formatePhone('15929323412')
```

- deepCopy 深拷贝
