const LayOut = () => import(/* webpackChunkName: "Layout" */ '@v/layout');
const Animation = () => import(/* webpackChunkName: "Animation" */ '@v/cssStudy/animation');
const Communicate = () => import(/* webpackChunkName: "Communicate" */ '@v/communicate/index');
const VueNext = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/reactive');
// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@c/ErrorPage/NotFound');
// 快应用落地页
const Login = () => import(/* webpackChunkName: "Login" */ '@v/login/index');

const routes = [{
    path: '/',
    redirect: '/qy'
},
    {
        path: '/qy/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/qy',
        component: LayOut,
        children: [
            {
                path: 'cssStudy',
                component: Animation
            },
            {
                path: 'communicate',
                name: 'Communicate',
                component: Communicate
            },
            {
                path: 'vueNext',
                name: 'vueNext',
                component: VueNext
            },
        ],
    },
];

routes.push({
    path: '/*',
    component: NotFound
});

export default routes;
