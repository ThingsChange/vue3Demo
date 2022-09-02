/**
 *
 * @author  晴云
 * @create 2022-08-30 9:44
 * @note 干什么的呢？
 **/
import { App } from 'vue'

const install = function (app, options) {
    console.log('这里是 options 的结果-------------', options)
    register(require.context('@/custom-components', true, /.vue/))
    function register(context) {
        console.log('这里是   context  ------------', context)
        context.keys().forEach(cnt => {
            const component = context(cnt)
            const com = component.default || component
            const name = com.name
            console.log('这里是   name  ------------', name)
            app.component(name, com)
        })
    }
}
export default {
    install,
}
