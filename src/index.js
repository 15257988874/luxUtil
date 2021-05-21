// 导出各个模块

let utils = {}
let hasDefault = ['http']

const modules = require.context('./modules/', true, /.js$/)

modules.keys().forEach(modulesKey => {
  let attr = modulesKey.replace('./', '').replace('.js', '').replace('/index', '')
  if (hasDefault.includes(attr)) {
    utils[attr] = modules(modulesKey).default
  } else {
    utils[attr] = modules(modulesKey)
  }
})

module.exports = utils
