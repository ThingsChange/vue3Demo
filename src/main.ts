// import './routes/class-component-hooks';
// @ts-ignore
import Food from '@/common/BabelOptimize.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import SvgIcon from '@/components/SvgIcon.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import axios from 'axios'
import 'element-plus/dist/index.css'
import GlobalComponent from '@/components/index'
import globalRegister from '@/plugins/globalRegister.js'
import './common/_import'
// @ts-ignore
import i18n from '@/plugins/i18.js'
// @ts-ignore
import Storage from '@/plugins/storage.js'
import App from './App.vue'
// @ts-ignore
import router from './routes/index'
import { steupPinia } from '@/stores/index'
// @ts-ignore
const app = createApp(App)
app.use(steupPinia)
const varWidth = 100
//第一种给全局实例挂载方法
const myMixin = {
    data() {
        return {
            message: 'hello',
            foo: 'abc',
        }
    },
}
app.use(Antd)
app.use(Storage)
app.mixin({
    /*    methods: {
        $axios2: axios,
        $hahha: function () {
        },
    }*/
})

window['haha'] = 1
// app.use(ElementPlus)
//第二种给全局实例挂载方法
app.use(i18n)
// import "@/icons";

app.use(GlobalComponent)
app.use(globalRegister, { status: '好特么的困啊' })
app.component('SvgIcon', SvgIcon)
app.use(router).mount('#app')
