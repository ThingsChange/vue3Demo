<template>
    <div>
        <ul>
            <li v-for="item in dotaList" :key="item.id">{{ item.name }}</li>
        </ul>
        <span v-bind="objectOfAttrs">{{ dotaList.length }}</span>
        <button @click="addDotaHero">五人黑么</button>
        <span>{{ heroName }}</span>
        <div><label>输入名字</label> <input type="text" placeholder="别杠，杠就是你对" v-model="heroName" /></div>
        <a-input v-model="heroName" type="text" placeholder="你爹还是你爹" />
    </div>
</template>

<script lang="ts">
/*
 * CustomRef
 * 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
 * 它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并应返回一个带有 get 和 set 的对象。
 * */
import debounceRef from '@/helper/diyRef/debounceRef'
import { customRef, reactive, ref } from '@vue/reactivity'
import { Ref, unref, watchEffect } from 'vue'

let myRef = function (value) {
    return customRef((track, trigger) => {
        let b = fetch(value)
            .then(res => {
                console.log('这里是 2 的结果-------------', 2)
                return res.json()
            })
            .then(data => {
                value = data
                trigger()
                return data
            })
            .catch(e => {
                console.log('这里是 e 的结果-------------', e)
            })
        console.log('这里是 b 的结果-------------', b)
        return {
            get() {
                track() //告诉vue这个数据是需要追踪变化打的
                console.log('track1', value, arguments)
                //不能在get方法中发送网络请求
                // 渲染界面->调用get -> 发送网络请求
                //保存数据->更新界面->调用get->
                return value
            },
            set(newValue) {
                console.log('这里是 set 的结果-------------', newValue)
                value = newValue
                trigger() //告诉vue触发界面更新
            },
        }
    })
}

export default {
    name: 'CustomRef',
    //这玩意儿只能是同步方法，不能是异步方法
    //async setup 是错的
    setup() {
        // let dotaList = ref([])
        let dotaList: Ref = myRef('/mock/dota')
        console.log('这里是 dotaList 的结果-----setup--------', dotaList)
        watchEffect(() => {
            console.log('这里是   dotaList  ------------', unref(dotaList))
        })

        let inputName = 'a'
        let heroName = debounceRef('呵呵')
        function remoteValidate(e) {
            console.log('这里是 e 的结果-------------', e)
        }

        /*
         * 增加英雄
         * */
        function addDotaHero() {
            dotaList.value = dotaList.value.concat({
                id: 5,
                name: '食尸鬼',
            })
            console.log('这里是   this.dotaList  ----增加按钮--------', dotaList)
        }

        const objectOfAttrs = {
            id: 'container',
            class: 'wrapper',
            'data-hehe': '哈哈',
        }

        return { dotaList, addDotaHero, inputName, heroName, remoteValidate, objectOfAttrs }
    },
}
</script>

<style scoped></style>
