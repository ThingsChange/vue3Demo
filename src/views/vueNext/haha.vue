<template>
    <span>父组件区域</span>
    <button @click="sayIt">让子组件说话{{ statusText }}</button>
    <div>{{ parentState }}</div>
    <div>
        子组件的dataList内容是
        {{ childDataList }}
    </div>
    <div>父组件结束</div>
    <haha_child ref="haChild" />
</template>

<script setup>
import { ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import haha_child from './haha_child'

let parentState = reactive({
    statusText: '哈哈哈，老子很开心',
    heh: '000',
})
// const a = 1
const b = ref(2)

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
    ...toRefs(parentState),
})
</script>

<style scoped></style>
