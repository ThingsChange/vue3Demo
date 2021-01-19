// import './routes/class-component-hooks';
import SvgIcon from "@/components/SvgIcon.vue";
import {createApp} from 'vue'
import Element3 from 'element3'
import axios from 'axios'
import 'element3/lib/theme-chalk/index.css'
import GlobalComponent from '@/components/index.ts'
import './common/_import';
// @ts-ignore
import i18n from '@/plugins/i18.js'
// @ts-ignore
import Storage from '@/plugins/storage.js'
import App from './App.vue'
// @ts-ignore
import router from './routes/index'
// @ts-ignore
const app = createApp(App)
//第一种给全局实例挂载方法
const myMixin = {
    data() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
}
app.use(Storage);
app.mixin({
    methods: {
        $axios2: axios,
        $hahha: function () {
        },
    }
})
app.use(Element3);
//第二种给全局实例挂载方法
app.use(i18n)
// import "@/icons";

app.use(GlobalComponent);
app.component('svg-icon', SvgIcon)
app.use(router).mount('#app')

