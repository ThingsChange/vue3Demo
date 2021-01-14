import { createApp } from 'vue'
import  Element3 from 'element3'

import  'element3/lib/theme-chalk/index.css'
import GlobalComponent from '@/components/index.ts'
// @ts-ignore
import  i18n from '@/plugins/i18.js'
import App from './App.vue'
// @ts-ignore
import router  from './routes/index'
// @ts-ignore
const  app =createApp(App)
app.use(Element3);
app.use(i18n)
import "@/icons";
app.use(GlobalComponent);
// app.component('svg-icon', SvgIcon)
app.use(router).mount('#app')

