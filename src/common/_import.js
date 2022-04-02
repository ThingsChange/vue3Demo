/**
 *
 * @author  晴云
 * @create 2021-01-18 12:27
 * @note 干什么的呢？
 **/

module.exports = file => {
    console.log('这里是 file 的结果-------------', file)
    return import('@v/' + file)
}
