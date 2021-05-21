/*
 * @Author: lux
 * @Date: 2021-05-21 11:11:49
 * @LastEditTime: 2021-05-21 11:31:51
 * @LastEditors: lux
 * @FilePath: \luxUtil\src\modules\tools\index.js
 */
module.exports = {
  /**
   * @description: JSON 深拷贝
   * @param {Object} data 拷贝的数据
   * @return {Object} 复制后生成的对象
   */
  deepCopy(data) {
    return JSON.parse(JSON.stringify(data))
  },
  /**
   * @description: 递归深拷贝
   * @param {Object} data 拷贝的数据
   * @return {Object} 复制后生成的对象
   */
  deppCopyBy(data) {
    const t = getType(data)
    let o
    if (t === 'array') {
      o = []
    } else if (t === 'object') {
      o = {}
    } else return data

    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key]
        if (typeof element === 'object') o[key] = deppCopyBy(element)
        else o[key] = element
      }
    }
    return o
  },
  /**
   * @description: 获取对象中的指定key
   * @param {Object} data 目标对象
   * @param {Array} keys 指定获取的key数组
   * @return {Object} 指定key组成的新对象
   */
  getObjKeys(data, keys = []) {
    if (!Array.isArray(keys)) return console.error('param type is Array')
    return JSON.parse(JSON.stringify(data, keys))
  },
  /**
   * 将手机号中间部分替换为星号
   * @param phone{string}: 手机号码
   */
  formatPhone: function (phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  }
}

// 类型检测
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
