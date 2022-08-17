/**
 *
 * @author  晴云
 * @create 2021-01-30 7:33
 * @note 干什么的呢？
 **/

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs') //mockjs 导入依赖模块
// eslint-disable-next-line @typescript-eslint/no-var-requires
const util = require('../src/utils/file') //自定义工具模块
//返回一个函数，改函数在 vue项目配置文件中 devServe 配置项使用
module.exports = function (app) {
    //监听http请求
    app.get('/mock/dota', function (req, res) {
        console.log('这里是 123 的结果-------------', 123)
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('../../mocks/dota.json')
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        // res.json(Mock.mock(json))
        setTimeout(() => {
            res.json(json)
        }, 3000)
        // res.json(json)
    })
}
