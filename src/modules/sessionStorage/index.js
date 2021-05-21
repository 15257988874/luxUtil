module.exports = {
  get(name) {
    if (!name) return null
    return window.sessionStorage.getItem(name)
  },
  set(name, content) {
    if (!name) return
    if (['object', 'function'].includes(typeof content)) content = JSON.stringify(content)
    window.sessionStorage.seItem(name, content)
  },
  delete(name) {
    if (!name) return window.sessionStorage.clear()
    window.sessionStorage.removeItem(name)
  }
}
