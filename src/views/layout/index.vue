<template>
    <a-layout style="min-height: 100vh">
        <menu-self />
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <button class="liti-button" @click="changeTheme">改变主题</button>
                <button class="liti-button" @click="changeLanguage">语言</button>
                <button class="liti-button" @click="addRouteAsync">增加路由</button>
                <button class="liti-button">{{ fullName }}</button>
                <button class="liti-button">{{ authUserStore.fullName }}</button>
                <button class="liti-button">{{ fullNameMinus }}</button>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <router-view />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue'
import MenuSelf from './menu.vue'
import { defineComponent, computed, getCurrentInstance, ref, ComponentInternalInstance, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import useAuthUserStore from '@/stores/useAuthUserStore'
const _import = require('@/common/_import.js')
export default defineComponent({
    components: {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
        MenuSelf,
    },
    setup() {
        function changeTheme() {
            const nowTheme = window.document.documentElement.getAttribute('data-theme')
            const dataTheme = nowTheme === 'default' ? 'dark' : 'default'
            // this.mcColor = nowTheme === 'default' ? 'red' : 'blue'
            // this.LS.set('data-theme', dataTheme)
            window.document.documentElement.setAttribute('data-theme', dataTheme)
        }
        const { proxy } = getCurrentInstance() as any
        let changeLanguage = function () {
            console.log('这里是   proxy  ------------', proxy)
            // let context = this
            // console.log('这里是   context  ------------', context)
            proxy.$toggleLang()
        }
        function addRouteAsync() {
            let routeA = {
                path: '/login',
                component: _import('login/index.vue'),
                name: 'Logina',
            }
            proxy.$router.addRoute(routeA)
        }
        const authUserStore = useAuthUserStore()
        //此处为什么fullName 直接结构出来并没有响应性呢 ？因为你返回的是一个非响应性的值啊，他只是一个普通值
        //需要外界对他添加响应性行为，比如，computed包裹一下，watchEffect包裹一下，或者模板中直接引用（这个是因为他的render函数是具有响应性的）
        // const fullName = authUserStore.fullName
        // const fullName = computed(() => authUserStore.fullName)
        const { fullName } = storeToRefs(authUserStore)
        let fullNameMinus = computed(() => authUserStore.fullName + 1)
        watchEffect(() => {
            // console.log('这里是   authUserStore.fullName  ------00000000000000000000000000------', authUserStore.fullName)
        })
        // console.log('这里是   fullName  ----1--------', authUserStore.fullName)
        return { changeTheme, changeLanguage, addRouteAsync, fullName, authUserStore, fullNameMinus }
    },
    data() {
        return {
            collapsed: ref<boolean>(false),
            selectedKeys: ref<string[]>(['1']),
        }
    },
})
</script>
<style>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
