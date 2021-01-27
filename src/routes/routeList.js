const LayOut = () => import(/* webpackChunkName: "Layout" */ '@v/layout');
const Animation = () => import(/* webpackChunkName: "Animation" */ '@v/cssStudy/animation');
const Communicate = () => import(/* webpackChunkName: "Communicate" */ '@v/communicate/index');
const Reactive = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/reactive');
const ReactiveDetail = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/reactiveDetail');
const CompostionApi = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/compostionApi');
// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@c/ErrorPage/NotFound');
// 快应用落地页
// const Login = () => import(/* webpackChunkName: "Login" */ '@v/login/index');

const routes = [{
    path: '/',
    redirect: '/qy'
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
                path: 'reactive',
                name: 'Reactive',
                component:Reactive
            },
            {
                path: 'reactiveDetail',
                name: 'ReactiveDetail',
                component:ReactiveDetail
            },
            {
                path: 'compostionApi',
                name: 'CompostionApi',
                component:CompostionApi
            }
        ],
    },
];

routes.push({
    path: '/*',
    component: NotFound
});

export default routes;
