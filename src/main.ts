import { createApp } from 'vue'
import SvgIcon from "@/components/SvgIcon.vue";
import App from './App.vue'
const  app =createApp(App)

import "@/icons";
app.component('svg-icon', SvgIcon)
app.mount('#app')

