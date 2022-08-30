<template>
    <section>
        <router-view />
    </section>
    <div id="surprise" v-if="a"></div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
// import { Component } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue';
import { reactive, toRefs, provide, useCssVars, ref, onMounted } from 'vue'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { readonly } from 'vue/dist/vue.esm-browser'
// import {getStorage} from "@/plugins/storage";
function getStorage() {}
// or
// @ts-ignore
// import   '@a/yanhua.js'
export default {
    components: {
        // HelloWorld,
    },
    setup() {
        useCssVars(_ctx => ({
            color: _ctx.color,
        }))
        //定义接口类型
        /*    interface ItemObj {
          title: string;
          content: string;
          show: boolean;
        }*/
        //使用readonly 子孙组件就无法修改该值了。
        const status = ref('老子好困啊')
        const authorStatus = readonly(status)
        provide('author', {
            status: authorStatus,
            updateAuthorStatus(a) {
                authorStatus.value = a
            },
        })
        onMounted(() => {
            console.log('这里是 app 的结果-------------', 111111111111)
            setTimeout(() => {
                status.value = '一打二也不是不可以'
                console.log('这里是   authorStatus  ------------', authorStatus)
            }, 3000)
        })
        // provide('$ls1', getStorage(localStorage))
        /*    const data = reactive({
          items: [{
            title: "css",
            content: "cssDemo",
            show: true
          },
            {
              title: "esLatest",
              content: "esLatest",
              show: true
            },
            {
              title: "about",
              content: "相关",
              show: true
            }
          ],
          active: 0,
          changeItem: (vo: ItemObj, inx: number) => {
            //如果重复点击一个栏目item 可以关闭和打开当前栏目手风琴内容
            if (inx === data.active) {
              vo.show = !vo.show
            } else {
              vo.show = true
            }
            data.active = inx
          }
        })
        return {
          ...toRefs(data)
        }*/
    },
    data() {
        return {
            a: false,
            items: [1, 2, 3],
            color: 'red',
        }
    },
}

/*export default class App extends Vue {
}*/
</script>

<style lang="scss">
@import './assets/css/color.scss';
//@import "./assets/css/common.scss";

body {
    margin: 0;
}
/*:root{
  --mc-color: v-bind(color);
}*/

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#surprise {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.icon-date {
    width: 3rem !important;
    height: 3rem !important;
    color: blue;
}
</style>
