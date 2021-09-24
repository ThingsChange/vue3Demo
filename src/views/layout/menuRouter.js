/**
 * @author  56477
 * @create 2018-05-22 10:31
 * @PROJECT_NAME vueDemo
 * @note 一二级导航对应的路由地址
 * */

export const routeConfig = [
    {
        id: '1',
        path: '/',
        text: '域的知识',
        child: [
            { id: '1-2', path: '/qy/toRef', text: 'toRef' },
            { id: '1-3', path: '/qy/compostionApi', text: 'CompostionApi体验' },
            { id: '1-4', path: '/qy/reactive', text: 'reactive' },
            { id: '1-5', path: '/qy/effect', text: 'effect' },
            { id: '1-6', path: '/qy/customRef', text: 'customRef' },
            { id: '1-7', path: '/qy/lifeCycle', text: 'lifeCycle' },
            { id: '1-8', path: '/qy/cleanUP', text: 'cleanUP' },
            { id: '1-17', path: '/qy/TSIn', text: 'TSIn' },
        ],
    },
    {
        id: '2',
        path: '/vueTest',
        text: 'vue测试',
        child: [
            { id: '2-1', path: '/lifeCycle', text: '生命周期' },
            { id: '2-2', path: '/componentCommunicate', text: '组件通信' },
            { id: '2-3', path: '/parentToChild', text: '父子组件通信' },
            { id: '2-4', path: '/objectTest', text: '引用数据类型' },
            { id: '2-5', path: '/vuexTest', text: 'VUEX值得存储' },
            { id: '2-6', path: '/routerTest', text: '路由导航守卫测试' },
            { id: '2-7', path: '/vueTree', text: 'vueJSON表格' },
        ],
    },
    {
        id: '3',
        path: '/qy',
        text: 'css学习',
        child: [{ id: '3-1', path: '/qy/cssStudy', text: '动画' }],
    },
]
