<script setup>
import { ref, reactive, toRefs, onMounted, toRef, provide, inject } from 'vue'
const author = inject('author')
const $ls1 = inject('$ls1', '老子是默认值哦')
let state = reactive({
    statusText: '好困',
    heh: '000',
    dataList: [
        {
            id: 1,
            content: '待从头、收拾旧山河，朝天阙。',
        },
    ],
    sonInfo: {
        name: '子组件',
        tip: '对象',
    },
})
let getUserListApi = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                code: 200,
                data: [
                    {
                        id: '2',
                        content: '萧瑟秋风今又是，换了人间',
                    },
                ],
            })
        }, 2000)
    })
onMounted(async () => {
    console.log('这里是 子挂载 的结果-------------', 1)
    state.sonInfo = {
        name: '教员',
        tip: '伟大领袖',
    }
    let { code, data } = await getUserListApi()
    state.dataList = data
    console.log('这里是 子的dataList更新结束 的结果-------------', 1111111)
    console.log('这里是   author  ------------', author)
    author.updateAuthorStatus('卧槽')
    console.log('这里是   $ls1  ------------', $ls1)
})
// let { dataList ,sonInfo} = toRefs(state)
let { dataList } = toRefs(state)
let sonInfo = toRef(state, 'sonInfo')
// const a = 1
let sayIt = function () {
    console.log('明日之星--------------', state.statusText)
}
const nightsWatch = ref('You know nothing, jone Snow')
const name = ref()
const surname = ref()
const { food: foodFromParent, id } = defineProps(['food', 'id'])
defineExpose({
    // ...toRefs(state),
    dataList: dataList,
    //此处用state.sonInfo在父组件中并不能获取到子组件的最新值，因为指针指向了新的对象,但是用从toRefs中解构出来的可以，是因为已经做了绑定。
    sonInfo: sonInfo,
    // sonInfo: state.sonInfo,
    sayIt,
})
</script>
<template>
    <a-divider style="height: 2px; background-color: #7cb305" />
    <span>这里是子组件</span>
    <button @click="sayIt">{{ state.statusText }}</button>
    <div>{{ state }}</div>
    <a-divider style="height: 2px; background-color: #7cb305" />
    <h2 class="">下面是诗句接龙</h2>
    <div v-for="item in dataList" :key="item.id">{{ item.content }}</div>
    <a-divider style="height: 2px; background-color: #7cb305" />
    <h2>这里是从父组件props过来的数据</h2>
    <div>id:{{ id }}</div>
    <div>{{ foodFromParent.foodName }}{{ foodFromParent.foodID }}</div>
    <a-divider>嘿嘿我要試試</a-divider>
    <User-name v-model.capitalize="nightsWatch" v-model:surname="surname" v-model:name.reverse="name" />
    <div>守望者是：{{ surname }}{{ name }},誓言：{{ nightsWatch }}</div>
    <a-divider />
    <div>
        <MouseTracker>
            <template #default="{ x, y }"> Mouse is at {{ x }},{{ y }} </template>
        </MouseTracker>
    </div>
    <a-divider>{{ author.status }}</a-divider>
</template>

<style scoped></style>
