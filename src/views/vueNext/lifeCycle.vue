<template>
    <div>
        <h1>lifecycle - 生命周期</h1>
        <h1>{{ test() }}</h1>
        <p>{{ cao }}</p>
        <button @click="updateData">
            Update data {{ data.displaySurpriceInline }}
        </button>
        <teleport
            v-if="showTeleport"
            to="#surprise"
            :disabled="data.displaySurpriceInline"
        >
            <div class="content">
                <header>{{ data.name }}, 惊喜不？</header>
                <section>给脸不要脸</section>
            </div>
        </teleport>
    </div>
</template>

<script>
import {
    reactive,
    // mount
    onBeforeMount,
    onMounted,
    // update
    onBeforeUpdate,
    onUpdated,
    // unmount
    onBeforeUnmount,
    onUnmounted,
    // 新增的钩子函数
    onRenderTracked,
    onRenderTriggered,
    computed,
    ref,
    getCurrentInstance,
} from 'vue'
import { effect } from 'vue/dist/vue.esm-browser'

export default {
    name: 'Lifecycle',
    setup() {
        onBeforeMount(() => {
            // debugger; // eslint-disable-line
        })
        onMounted(() => {
            console.log('这里是  的结果-------------', getCurrentInstance())
            let { ctx } = getCurrentInstance()
            console.log('这里是 ctx 的结果-------------', getCurrentInstance())
            // debugger; // eslint-disable-line
        })
        onBeforeUpdate(() => {
            // debugger; // eslint-disable-line
        })
        onUpdated(() => {
            // debugger; // eslint-disable-line
        })
        onBeforeUnmount(() => {
            // debugger; // eslint-disable-line
        })
        onUnmounted(() => {
            // debugger; // eslint-disable-line
        })
        onRenderTracked(e => {
            // eslint-disable-line
            // debugger; // eslint-disable-line
        })
        onRenderTriggered(e => {
            // eslint-disable-line
            // debugger; // eslint-disable-line
        })
        let a = Symbol.for(2)
        const data = reactive({
            name: '草',
            [Symbol()]: 1,
            [a]: 2,
            displaySurpriceInline: 0,
        })
        let showTeleport = ref(false)
        const updateData = () => {
            console.log('这里是 123 的结果-------------', 123)
            data[a] = 3
            data.name = 'chen haiong' + new Date().toLocaleTimeString()
        }
        let cao = computed(() => {
            console.log('这里是 data 的结果-------------', data)
            return Reflect.ownKeys(data)
        })
        let test = effect(() => {
            debugger
            console.log('这里是 test 的结果-------------', test)
            console.log('123', data.name + data.displaySurpriceInline)
        })
        let c = effect(() => {
            return test
        })
        test()
        return { data, updateData, cao, showTeleport, test, c }
    },
}
</script>
<style lang="scss">
.content {
    background-color: #3de5fb;
    position: absolute;
    width: 70%;
    height: 15vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
