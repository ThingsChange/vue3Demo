import { createPinia } from 'pinia'
import router from '@/routes'
import { App } from 'vue'

const pinia = createPinia()

export const steupPinia = (app: App) => {
    pinia.use(({ store }) => {
        //这里可以安装各种插件
        store.$router = router
    })
    app.use(pinia)
}

export * from './useAuthUserStore'
