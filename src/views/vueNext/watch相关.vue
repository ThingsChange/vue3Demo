<template>
    <section>watch</section>
    <section id="hehe">{{ obj.text }}</section>
    <section>{{ obj.count }}</section>
    <button @click="changeText">改变文案</button>
</template>

<script>
import { reactive, watch, watchEffect } from 'vue'

export default {
    name: 'watch相关',
    setup() {
        let obj = reactive({
            text: '你说你是谁',
            count: 1,
        })
        let changeText = () => {
            obj.text = obj.text + 1
            obj.count++
            setTimeout(() => {
                console.log('这里是 清除watch 的结果-------------', 1)
                watchText()
            }, 2000)
        }

        let watchText = watch(
            () => obj.text,
            (newVal, oldVal) => {
                let innerText = document.querySelector('#hehe').innerText
                console.log('这里是   newVal,oldVal  ------------', newVal, oldVal)
                console.log('这里是   obj.text  ------------', obj.text)
                console.log('这里是   innerText  ------------', innerText)
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

        return {
            obj,
            changeText,
            watchText,
        }
    },
}
</script>

<style scoped></style>
