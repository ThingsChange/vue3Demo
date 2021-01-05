import {createRouter ,createWebHistory} from 'vue-router'
routes
const router = createRouter({
  routes,
    history: createWebHistory(process.env.BASE_URL),
  mode: 'history'
});


export default router;
