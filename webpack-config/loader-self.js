/**
 *
 * @author  晴云
 * @create 2021-01-13 14:58
 * @note 干什么的呢？
 **/
const {getOptions} = require('loader-utils')

module.exports = function (context) {
    console.log('这里是 context 的结果-------------', context)
    let options = getOptions(this)
    console.log('这里是 options 的结果-------------', options)
    return `export default ${context}`

}
