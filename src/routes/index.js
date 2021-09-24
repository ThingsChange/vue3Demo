import routes from './routeList'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    routes,
    history: createWebHistory(),
    base: process.env.BASE_URL,
})
export default router
