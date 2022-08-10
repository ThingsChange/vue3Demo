<template>
    <el-row class="tac">
        <el-col :span="24">
            <!--        <el-menu
            @select="selectMenu"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-submenu v-for="(item, index) in routeConfig" :index="item.id" :key="index">
                <template v-slot:title>{{ item.text }}</template>
                <el-menu-item v-for="(secondItem, index) in item.child" :index="secondItem.id" :key="index">{{ secondItem.text }}</el-menu-item>
            </el-submenu>
        </el-menu>-->
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                default-active="2"
                class="el-menu-vertical-demo"
                @select="selectMenu"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu v-for="(item, index) in routeConfig" :index="item.id" :key="index">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>{{ item.text }}</span>
                    </template>
                    <el-menu-item v-for="(secondItem, index) in item.child" :index="secondItem.id" :key="index">{{ secondItem.text }}</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { ref, getCurrentInstance, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routeConfig as routeList } from '@/views/layout/menuRouter'

export default {
    name: 'menu',
    data() {
        return {
            hehe: [1, 2, 3],
        }
    },
    methods: {
        selectMenu(...data) {
            let { 0: firstMenum, 1: secondMenu } = data[1]
            let toUrl = ''
            this.routeConfig.filter(v => {
                if (v.id === firstMenum) {
                    v.child.filter(x => {
                        // console.log('这里是   x.id  ------------', x.id) /**/
                        if (x.id === secondMenu) {
                            toUrl = x.path
                        }
                    })
                }
            })
            this.$router.push(toUrl)
        },
    },
    created() {},
    setup(props, context) {
        const $ss = inject('$ss')
        // console.log('这里是 $ss 的结果-------------', $ss)
        let defaultOpeneds = ref(['1', '1-4'])
        // console.log('这里是 props,context 的结果-------------', props, context)
        //临时性死区你敢信他不报错？
        // let routeConfig = ref(routeConfig)
        let routeConfig = ref(routeList)
        // console.log('这里是 routeConfig 的结果-------------', routeConfig)
        let root = getCurrentInstance()
        let router = useRouter()
        let route = useRoute()
        // console.log('这里是 root 的结果-------------', root, router, route)

        function handleOpen(key, keyPath) {
            // console.log('这里是 props,context 的结果-------------', props, context)
            console.log(key, keyPath)
        }

        function handleClose(key, keyPath) {
            console.log(key, keyPath)
        }

        function selectMenu(data) {
            // console.log('这里是 props,context 的结果-------------', props, context)
        }

        return { defaultOpeneds, handleOpen, handleClose, routeConfig }
    },
}
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
