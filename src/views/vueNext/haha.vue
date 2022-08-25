<template>
    <span>父组件区域</span>
    <button @click="sayIt">让子组件说话{{ statusText }}</button>
    <div>{{ parentState }}</div>
    <div>{{ parentState.heh }}</div>
    <lablel>b:</lablel>{{ b }}
    <button @click="parentState.heh++">哎哟哟哟</button>
    <div>
        子组件的dataList内容是
        {{ childDataList }}
    </div>
    <div>父组件结束</div>
    <haha_child ref="haChild" />
</template>

<script setup>
import { ref, reactive, toRefs, getCurrentInstance, onMounted, watch, watchEffect } from 'vue'
import haha_child from './haha_child'

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
watchEffect(() => {
    console.log('这里是  的结果-------11111------', 1111)
    // parentState.heh = 2
    b.value = parentState.heh
})

const haChild = ref(null)
let proxy = getCurrentInstance()
let sayIt = function () {
    console.log('这里是 hahaChild.value 的结果-------------', haChild.value)
    console.log('这里是   haha_child  ------------', proxy.refs['haChild'].heh)
    console.log('这里是 statusText 的结果-------------', parentState.statusText)
}
let a = toRefs(parentState)
let childDataList = reactive({ fatherList: [], info: {} })
onMounted(() => {
    console.log('这里是 父挂载 的结果-------------', 1)
    console.log('这里是   hahaChild  ------123------', haChild.value.dataList)
    childDataList.fatherList = haChild.value.dataList
    childDataList.info = haChild.value.sonInfo
    console.log('这里是   childDataList  ------------', childDataList)
})
console.log('这里是   hahaChild.value  ------------', haChild.value)
// let childDataList = haChild.value.dataList
console.log('这里是 a 的结果-------------', a)
defineExpose({
    a,
    b,
    ...toRefs(parentState),
})
</script>

<style scoped></style>
