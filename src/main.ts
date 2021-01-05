import { createApp } from 'vue'
import SvgIcon from "@/components/SvgIcon.vue";

import App from './App.vue'
import "@/icons"

const  app =createApp(App)



// 注册到全局

app.mount('#app')
app.component('SvgIcon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./../assets/svg", false, /\.svg$/);
requireAll(req);
