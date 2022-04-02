<template>
    <!--  <div id="teleportWrap" class="vue-next-wrapper">
  </div>-->

    <reactiveDetail :msg="'12'" :title="title" :location2="location" :geolocation="geolocation"></reactiveDetail>
    <div>
        <span>{{ shallowPerson.status }}</span>
        <span>{{ shallowPerson.basic }}</span>
        <span>{{ shallowReadlyPerson.basic }}</span>
    </div>
    <button class="liti-button" @click="changePerson">修改用户信息</button>

    <div>{{ msg }}</div>
    <div>{{ msg2 }}</div>
    <div>count 是 {{ count }}</div>
    <div>a 是 {{ a }}</div>
    <div @click="inc">加1</div>
    <div @click="reset">重置</div>
    <div>{{ nums }}</div>
    <button class="liti-button" @click="addA">数组填充新数字</button>
    <div>{{ sum }}</div>
    <ndy-hehe>123</ndy-hehe>
    <reactiveDetail :msg="'12'" :title="title" :location2="location" :geolocation="geolocation"></reactiveDetail>
    <button class="liti-button" @click="addAsyncComponent">动态组件</button>
    <button class="liti-button" @click="toDetail">reactive详情</button>
    <button class="liti-button" @click="changeStatus">切换状态</button>
    <button class="liti-button" @click="testReadOnly">测试readOnly</button>
    <div>
        姓名：{{ person.basic.name }} 当前状态：{{ person.status }} ref B的：{{ b }}
        <!--    food:{{food}}-->-
    </div>
    <div>
        <span>ReadOnly 人的状态</span><span>{{ readlyPerson }}</span>
    </div>
    <div>
        <span>计算属性 人的状态</span><span>{{ personStatusKaixin }}</span>
    </div>
    <div>
        <async-com :person="person" v-if="showAsync"></async-com>
    </div>
</template>
<script>
import {
    defineComponent,
    reactive,
    defineAsyncComponent,
    isReactive,
    toRaw,
    ref,
    toRefs,
    readonly,
    provide,
    shallowReactive,
    onMounted,
    getCurrentInstance,
    shallowReadonly,
    computed,
} from 'vue'
// import (/* webpackChunkName: "reactiveDetail" */'@v/vueNext/reactiveDetail.vue')

import CountDemo from '@/views/vueNext/CountDemo'
import reactiveDetail from '@/views/vueNext/reactiveDetail'

import(
    /*  webpackPrefetch: true */
    /* webpackChunkName: "HelloWorld" */
    './../../components/HelloWorld.vue'
)

/*interface Student {
  name: string
  class?: string
  age: number
}*/

export default defineComponent({
    ...CountDemo,
    data() {
        return {
            nums: [1],
            msg2: 3122,
            showAsync: false,
        }
    },
    components: {
        reactiveDetail,
        'async-com': defineAsyncComponent({
            delay: 50000,
            timeout: 3000,
            loader: () => import(/* webpackChunkName: "HelloWorld" */ './../../components/HelloWorld.vue'),
        }),
    },
    methods: {
        addA() {
            this.nums.push(this.nums[this.nums.length - 1] + 1)
            console.log('这里是 this.sum 的结果-------------', this.sum, this)
        },
        addAsyncComponent() {
            console.log('这里是 哎呀卧槽 的结果-------------', '哎呀卧槽')
            this.showAsync = true
        },
        toDetail() {
            this.$router.push({ name: 'ReactiveDetail', params: { id: 1 } })
        },
    },
    computed: {
        sum() {
            return this.nums.reduce((vv, v) => vv + v)
        },
    },
    setup() {
        let originalPerson = {
            status: 'tired',
            basic: {
                name: '1',
                age: 2,
                x: {
                    y: 0,
                },
            },
        }
        let person = reactive(originalPerson)
        let shallowPerson = shallowReactive(originalPerson)
        let shallowReadlyPerson = shallowReadonly(originalPerson)
        let readlyPerson = readonly(originalPerson)

        console.log('这里是   isReactive(shallowPerson.basic)  ------------', isReactive(shallowPerson.basic))
        console.log('这里是   shallowPerson.basic === originalPerson.basic  ------------', shallowPerson.basic === originalPerson.basic)

        function changePerson() {
            shallowPerson.status = 'happy'
            shallowPerson.basic.age++
            // shallowPerson.basic.x.y++;
            shallowReadlyPerson.basic.age++
            // shallowReadlyPerson.status = 'happy';
            console.log('这里是   originalPerson  ------------', originalPerson)
        }

        onMounted(() => {
            let instance = getCurrentInstance()
            console.log('这里是 instance 的结果-------------', instance)
        })

        let b = ref(12)
        let changeStatus = function () {
            person.status = 'happy'
            person.basic.name = '逗比'
        }
        let food = ref({
            name: '麻婆豆腐',
            unit: '份',
            taste: ['麻', '辣'],
            price: 10,
        })
        console.log('这里是 person 的结果-------------', person, toRaw(person), b)
        console.log('这里是 food 的结果-------------', food, toRefs(food))

        let personReadonly = readonly(person)
        const testReadOnly = function () {
            console.log('这里是 傻逼 的结果-------------', '1')
            person.status = 'happya'
            personReadonly.status = '我是不可变得'
        }

        let personStatusKaixin = computed(() => {
            return personReadonly.status + '~~~~~'
        })

        const location = ref('河南省')
        const geolocation = reactive({
            longitude: 90,
            latitude: 135,
        })
        const updateLocation = () => {
            location.value = 'South Pole'
            geolocation.longitude = 100
            geolocation.latitude = 100
        }
        provide('location', readonly(location))
        provide('geolocation', readonly(geolocation))
        provide('updateLocation', updateLocation)

        const title = '这里是详情组件'

        return {
            person,
            shallowPerson,
            changeStatus,
            b,
            food,
            testReadOnly,
            geolocation,
            title,
            location,
            changePerson,
            shallowReadlyPerson,
            readlyPerson,
            personStatusKaixin,
        }
    },
})
</script>
<style>
.vue-next-wrapper {
    display: flex;
    position: relative;
    background: yellowgreen;
    height: 3rem;
}
</style>
