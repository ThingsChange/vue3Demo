<template>
    <section>watch</section>
    <section id="hehe">{{ obj.text }}</section>
    <section>{{ obj.count }}</section>
    <button @click="changeText">改变文案</button>
    <a-divider>{{ course.a }}</a-divider>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, watch, watchEffect } from 'vue'

let obj = reactive({
    text: '你说你是谁',
    count: 1,
})
let temp = reactive(obj)
let arr = reactive([obj])
console.log('这里是 arr.includes(temp) 的结果-------------', arr.includes(temp), arr.includes(obj))
let changeText = () => {
    obj.text = obj.text + 1
    obj.count++
    course.a = '语文'
    setTimeout(() => {
        console.log('这里是 清除watch 的结果-------------', 1)
        watchText()
    }, 2000)
}
onMounted(() => {
    console.log('这里是   course  ------------', getCurrentInstance())
})

let watchText = watch(
    () => obj.text,
    (newVal, oldVal) => {
        let innerText = document.querySelector('#hehe').innerText
        console.log('这里是   newVal,oldVal  ------------', newVal, oldVal)
        console.log('这里是   obj.text  ------------', obj.text)
        console.log('这里是   innerText  ------------', innerText)
        obj.count++
    },
    {
        flush: 'pre',
    }
)

watchEffect(
    () => {
        console.log('这里是   obj.count  ------------', obj.count)
    },
    {
        flush: 'post',
    }
)
let course = reactive({ a: '道德与法治' })
</script>

<style scoped></style>
