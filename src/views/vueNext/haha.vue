<template>
    <span>父组件区域</span>
    <button ref="childButton" @click="sayIt">让子组件说话{{ statusText }}</button>
    <div>{{ parentState }}</div>
    <div class="postWatch">{{ parentState.heh }}</div>
    <lablel>b:</lablel>{{ b }}
    <button @click="parentState.heh++">哎哟哟哟</button>
    <div>
        子组件的dataList内容是
        {{ childDataList }}
    </div>
    <div>父组件结束</div>
    <button @click="changeFoodName">更12改父传递给子的props</button>
    111111111111111111111111111111111111111111111111111 {{ fullName }}
    <haha_child ref="haChild" :food="food" v-bind="expandAuto" />
</template>

<script setup>
import { ref, reactive, toRefs, getCurrentInstance, onMounted, watch, watchEffect, watchPostEffect } from 'vue'
import haha_child from './haha_child'
import useAuthUserStore from '@/stores/useAuthUserStore'
const authUserStore = useAuthUserStore()
import { storeToRefs } from 'pinia'

const { fullName } = storeToRefs(authUserStore)

const food = ref({
    foodName: '酸汤肥牛',
    foodID: 123,
})
const expandAuto = ref({
    id: '001',
    title: '子',
})
const changeFoodName = () => {
    food.value.foodName += food.value.foodID++
    expandAuto.value.id++
}

let parentState = reactive({
    statusText: '哈哈哈，老子很开心',
    heh: 0,
})
// const a = 1
const b = ref(2)
//it's very funny;你不能直接侦听响应式对象的属性值
//数据源： ref。响应式对象，一个getter函数，或多个数据源组成的数组
//传入响应式对象，隐式创建深层侦听器
watch(
    () => parentState.heh,
    val => {
        console.log('这里是 val 的结果-------------', val)
    }
)
watchEffect(
    () => {
        console.log('这里是  的结果-------11111------', 1111)
        // parentState.heh = 2
        b.value = parentState.heh
        const el = document.querySelector('.postWatch')
        console.log('这里是   el.innerText  -----watchEffect-----的post模式--', el?.innerText)
    },
    { flush: 'post' }
)
const c = ref('')
watchPostEffect(() => {
    c.value = parentState.heh
    const el = document.querySelector('.postWatch')

    console.log('这里是   el  ------------', el)
    // console.log('这里是   el.innerText  -----watchPostEffect-------', el.innerText)
})

const haChild = ref(null)
let proxy = getCurrentInstance()
let sayIt = function () {
    console.log('这里是 hahaChild.value 的结果-------------', haChild.value)
    console.log('这里是   haha_child  ------------', proxy.refs['haChild'].dataList)
    console.log('这里是 statusText 的结果-------------', parentState.statusText)
}
let a = toRefs(parentState)
let childDataList = reactive({ fatherList: [], info: {} })
onMounted(() => {
    console.log('这里是   hahaChild  ------123------', haChild.value.dataList)
    childDataList.fatherList = haChild.value.dataList
    childDataList.info = haChild.value.sonInfo
    console.log('这里是   childDataList  ------------', childDataList)
})
console.log('这里是   hahaChild.value  ------------', haChild.value)
// let childDataList = haChild.value.dataList
console.log('这里是 a 的结果-------------', a)

const childButton = ref(null)
onMounted(() => {
    childButton.value.click()
})

defineExpose({
    a,
    b,
    ...toRefs(parentState),
})
</script>

<style scoped></style>
