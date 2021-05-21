/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 */

/*
 * @Author: lux
 * @Date: 2021-05-21 11:06:55
 * @LastEditTime: 2021-05-21 11:39:54
 * @LastEditors: lux
 * @FilePath: \luxUtil\src\modules\localStorage\index.js
 */
module.exports = {
  get(name) {
    if (!name) return null
    return window.localStorage.getItem(name)
  },
  set(name, content) {
    if (!name) return
    if (['object', 'function'].includes(typeof content)) content = JSON.stringify(content)
    window.localStorage.seItem(name, content)
  },
  delete(name) {
    if (!name) return window.localStorage.clear()
    window.localStorage.removeItem(name)
  }
}
