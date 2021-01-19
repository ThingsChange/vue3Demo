<template>
  <section>
    <router-view/>
  </section>
</template>

<script>
import {Options, Vue} from 'vue-class-component';
// import { Component } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue';
import {reactive, toRefs, provide} from 'vue'
import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
// import {getStorage} from "@/plugins/storage";
function getStorage(){

}
// or
// @ts-ignore
// import   '@a/yanhua.js'
export default {
  components: {
    // HelloWorld,
  },
  data() {
    return {
      items: [1, 2, 3]
    }
  },
  setup() {
    //定义接口类型
    /*    interface ItemObj {
          title: string;
          content: string;
          show: boolean;
        }*/
    provide('$ss', getStorage(sessionStorage))
    provide('$ls', getStorage(localStorage))
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
}

/*export default class App extends Vue {
}*/
</script>


<style lang="scss">
@import './assets/css/color.scss';
@import "./assets/css/common.scss";

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.icon-date {
  width: 3rem !important;
  height: 3rem !important;
  color: blue
}
</style>
