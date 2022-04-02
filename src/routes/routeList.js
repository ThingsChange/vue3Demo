const LayOut = () => import(/* webpackChunkName: "Layout" */ '@v/layout')
const Animation = () => import(/* webpackChunkName: "Animation" */ '@v/cssStudy/animation')
const Communicate = () => import(/* webpackChunkName: "Communicate" */ '@v/communicate/index')
const Reactive = () => import(/* webpackChunkName: "reactive" */ '@v/vueNext/reactiveTest')
const ReactiveDetail = () => import(/* webpackChunkName: "reactiveDetail" */ '@v/vueNext/reactiveDetail')
const CompostionApi = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/compostionApi')
const ToRef = () => import(/* webpackChunkName: "Communicate" */ '@v/vueNext/toRef')
const Effect = () => import(/* webpackChunkName: "effect" */ '@v/vueNext/effectTest')
const CustomRef = () => import(/* webpackChunkName: "CustomRef" */ '@v/vueNext/customRef')
const LifeCycle = () => import(/* webpackChunkName: "LifeCycle" */ '@v/vueNext/lifeCycle')
const TSIn = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSIn')
const TSClass = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSClass')
const TSEnum = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSEnum')
const TS变 = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TS变')
const TSFanxing = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSFanxing')
const cleanUP = () => import(/* webpackChunkName: "LifeCycle" */ '@v/vueNext/cleanUP')
const watch相关 = () => import(/* webpackChunkName: "LifeCycle" */ '@v/vueNext/watch相关')

// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@c/ErrorPage/NotFound')

const routes = [
    {
        path: '/',
        redirect: '/qy',
    },
    {
        path: '/qy',
        component: LayOut,
        meta: {
            id: 1,
            text: 'vue3API',
        },
        children: [
            {
                path: 'reactive',
                name: 'Reactive',
                component: Reactive,
                meta: {
                    text: 'reactive',
                },
            },
            {
                path: 'reactiveDetail/:id',
                name: 'ReactiveDetail',
                component: ReactiveDetail,
            },
            {
                path: 'compostionApi',
                name: 'CompostionApi',
                component: CompostionApi,
                meta: {
                    text: '组合API',
                },
            },
            {
                path: 'toRef',
                name: 'ToRef',
                component: ToRef,
                meta: {
                    text: '组合toRef',
                },
            },
            {
                path: 'effect',
                name: 'Effect',
                component: Effect,
                meta: {
                    text: 'Effect',
                },
            },
            {
                path: 'customRef',
                name: 'CustomRef',
                component: CustomRef,
                meta: {
                    text: '自定义Ref',
                },
            },
            {
                path: 'lifeCycle',
                name: 'LifeCycle',
                component: LifeCycle,
                meta: {
                    text: '生命周期',
                },
            },
            {
                path: 'cleanUP',
                name: 'cleanUP',
                component: cleanUP,
                meta: {
                    text: '组合toRef',
                },
            },
            {
                path: 'watch',
                name: 'watch相关',
                component: watch相关,
                meta: {
                    text: 'watch相关',
                },
            },
        ],
    },
    {
        path: '/qy/demo',
        component: LayOut,
        meta: {
            text: '一些Demo',
            id: 2,
        },
        children: [
            {
                path: 'communicate',
                name: 'Communicate',
                component: Communicate,
                meta: {
                    text: '组件之间的通信',
                },
            },
        ],
    },
    {
        path: '/qy/css',
        component: LayOut,
        meta: {
            text: 'css学习',
            id: 3,
        },
        children: [
            {
                path: 'cssStudy',
                component: Animation,
                meta: {
                    text: '动画',
                },
            },
        ],
    },
    {
        path: '/qy/TS',
        component: LayOut,
        meta: {
            text: 'TS相关',
            id: 4,
        },
        children: [
            {
                path: 'in',
                name: 'TSIn',
                component: TSIn,
                meta: {
                    text: 'TSIn',
                },
            },
            {
                path: 'class',
                name: 'TSClass',
                component: TSClass,
                meta: {
                    text: 'TS中的class',
                },
            },
            {
                path: 'fanxing',
                name: 'TSFanxing',
                component: TSFanxing,
                meta: {
                    text: 'TS中的泛型',
                },
            },
            {
                path: 'enum',
                name: 'TSEnum',
                component: TSEnum,
                meta: {
                    text: 'TS中的枚举',
                },
            },
            {
                path: 'bian',
                name: 'TS变',
                component: TS变,
                meta: {
                    text: '协变、逆变',
                },
            },
        ],
    },
]

routes.push({
    path: '/*',
    component: NotFound,
})

export default routes
