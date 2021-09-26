const LayOut = () => import(/* webpackChunkName: "Layout" */ '@v/layout')
const Animation = () =>
    import(/* webpackChunkName: "Animation" */ '@v/cssStudy/animation')
const Communicate = () =>
    import(/* webpackChunkName: "Communicate" */ '@v/communicate/index')
const Reactive = () =>
    import(/* webpackChunkName: "reactive" */ '@v/vueNext/reactiveTest')
const ReactiveDetail = () =>
    import(/* webpackChunkName: "reactiveDetail" */ '@v/vueNext/reactiveDetail')
const CompostionApi = () =>
    import(/* webpackChunkName: "Communicate" */ '@v/vueNext/compostionApi')
const ToRef = () =>
    import(/* webpackChunkName: "Communicate" */ '@v/vueNext/toRef')
const Effect = () =>
    import(/* webpackChunkName: "effect" */ '@v/vueNext/effectTest')
const CustomRef = () =>
    import(/* webpackChunkName: "CustomRef" */ '@v/vueNext/customRef')
const LifeCycle = () =>
    import(/* webpackChunkName: "LifeCycle" */ '@v/vueNext/lifeCycle')
const TSIn = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSIn')
const TSClass = () => import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSClass')
const TSFanxing = () =>
    import(/* webpackChunkName: "TSStudy" */ '@v/TS/TSFanxing')
const cleanUP = () =>
    import(/* webpackChunkName: "LifeCycle" */ '@v/vueNext/cleanUP')

// 404
const NotFound = () =>
    import(/* webpackChunkName: "NotFound" */ '@c/ErrorPage/NotFound')

const routes = [
    {
        path: '/',
        redirect: '/qy',
    },
    {
        path: '/qy',
        component: LayOut,
        children: [
            {
                path: 'cssStudy',
                component: Animation,
            },
            {
                path: 'communicate',
                name: 'Communicate',
                component: Communicate,
            },
            {
                path: 'reactive',
                name: 'Reactive',
                component: Reactive,
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
            },
            {
                path: 'toRef',
                name: 'ToRef',
                component: ToRef,
            },
            {
                path: 'effect',
                name: 'Effect',
                component: Effect,
            },
            {
                path: 'customRef',
                name: 'CustomRef',
                component: CustomRef,
            },
            {
                path: 'lifeCycle',
                name: 'LifeCycle',
                component: LifeCycle,
            },
            {
                path: 'tsin',
                name: 'TSIn',
                component: TSIn,
            },
            {
                path: 'tsclass',
                name: 'TSClass',
                component: TSClass,
            },
            {
                path: 'tsfanxing',
                name: 'TSFanxing',
                component: TSFanxing,
            },
            {
                path: 'cleanUP',
                name: 'cleanUP',
                component: cleanUP,
            },
        ],
    },
]

routes.push({
    path: '/*',
    component: NotFound,
})

export default routes
