<template>
    <CoverBest content-display>
        <template #content>
            <div class="hello">
                这不扯犊子呢{{ statusChild }}
                <button @click="gaiZhuangtai">反向修改</button>
                <svg-icon icon-class="dun" className="icon-vip_card" />
                <button @click="closeWin">关闭自己</button>
            </div>
        </template>
    </CoverBest>
</template>

<script>
// import { Options, Vue } from 'vue-class-component';
import { defineComponent, toRef } from 'vue'
import CoverBest from '@/custom-components/cover/best'

export default defineComponent({
    components: { CoverBest },
    props: {
        msg: String,
        person: Object,
        showAsync: Boolean,
    },
    setup(props, content) {
        console.log('这里是 props,content 的结果-------------', props, content)
        let statusChild = toRef(props, 'person')
        let gaiZhuangtai = function () {
            statusChild.value.status = '13bSurround'
            statusChild.value.basic.name = '来自于子的名字'
        }
        // const emit = defineEmits(['input'])
        const closeWin = function () {
            console.log('这里是 1234 的结果-------------', 1234)
            content.emit('update:showAsync', false)
        }
        return {
            statusChild,
            gaiZhuangtai,
            closeWin,
        }
    },
    data() {
        return {
            showAsyncComponent: true,
        }
    },
    mounted() {
        console.log('这里是 扯犊子 的结果-------------', 123)
    },
    methods: {
        /*        closeWin() {
            this.$emit('update:showAsync', false)
        },*/
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    color: #cccccc;
}
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.icon-vip_card {
    width: 5rem;
    height: 6rem;
    color: yellowgreen;
}
</style>
