<template>
<!--  <section>
    <div class="accordion">
      <div v-for="(vo,inx) in items" :key="inx">
        &lt;!&ndash; 手风琴标题 &ndash;&gt;
        <div class="item" @click="changeItem(vo,inx)">
          {{vo.title}}
        </div>
        &lt;!&ndash; 手风琴内容 &ndash;&gt;
        <div class="content" v-show="active==inx&&vo.show">
          {{vo.content}}
          &lt;!&ndash; 可以自定义内容结构 &ndash;&gt;
          <div v-if="inx===0">
            我是自定义内容1
          </div>
          <div v-if="inx===1">
            我是自定义内容2
          </div>
          <div v-if="inx===2">
            我是自定义内容3
          </div>
        </div>
      </div>
    </div>
  </section>
  <p>
    <router-link to="/qy/cssStudy">/qy/cssStudy</router-link>
    <br />
  </p>-->
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import {reactive,toRefs} from 'vue'
import   '@a/yanhua.js'

@Options({
  components: {
    HelloWorld,
  },
  data(){
    return {
      items:[1,2,3]
    }
  },
  setup(){
    //定义接口类型
    interface ItemObj {
      title: string;
      content: string;
      show: boolean;
    }
    const data = reactive({
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
    }
  }
})
export default class App extends Vue {
}
</script>

<style>
body{
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
  color:blue
}
</style>
