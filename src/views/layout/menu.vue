<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo">
            <a-avatar size="large" :src="userPhoto" />
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :open-keys="openKeys" @select="selectMenu" @openChange="onOpenChange">
            <a-sub-menu v-for="firstRoute in routeConfig" :key="firstRoute.id">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>{{ firstRoute.text }}</span>
                    </span>
                </template>
                <a-menu-item v-for="secondRoute in firstRoute.child" :key="secondRoute.id">{{ secondRoute.text }}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance, inject, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routeConfig as routeList } from '@/views/layout/menuRouter'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons-vue'

export default /* #__PURE__ */ defineComponent({
    name: 'MenuSelf',
    components: {
        UserOutlined,
        PieChartOutlined,
        DesktopOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuFoldOutlined,
        MenuUnfoldOutlined,
    },
    setup(props, context) {
        const $ss = inject('$ss')
        // console.log('这里是 $ss 的结果-------------', $ss)
        let defaultOpeneds = ref(['1', '1-4'])
        let routeConfig = ref(routeList)
        let root = getCurrentInstance()
        let router = useRouter()
        let route = useRoute()
        const state = reactive({
            openKeys: ['sub1'],
            selectedKeys: [],
            rootSubmenuKeys: routeList.map(v => v.id),
        })
        let selectedKeys = ref<string[]>(['1'])
        let userPhoto = require('../../assets/images/老子不干了.jpg')

        const onOpenChange = (openKeys: string[]) => {
            const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1)
            if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                state.openKeys = openKeys
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        }
        return { defaultOpeneds, routeConfig, collapsed: ref<boolean>(false), ...toRefs(state), onOpenChange, userPhoto }
    },
    data() {
        return {
            hehe: [1, 2, 3],
        }
    },
    created() {},
    methods: {
        selectMenu({ item, key, selectedKeys }) {
            let { 0: firstMenum, 1: secondMenu } = key.split('-')
            let toUrl = ''
            this.routeConfig.filter(v => {
                if (v.id === firstMenum) {
                    v.child.filter(x => {
                        if (x.id === key) {
                            toUrl = x.path
                        }
                    })
                }
            })
            console.log('这里是   toUrl  ------------', toUrl)
            this.$router.push(toUrl)
        },
    },
})
</script>
<style type="scss" lang="scss">
/*.el-submenu__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.is-opened {
    background-color: red;
}
</style>
