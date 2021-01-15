<template>
  <el-container class="layout">
    <el-aside width="200px">
      <el-avatar class="avatar">
        <img src="../../assets/images/老子不干了.jpg" alt="">
      </el-avatar>
      <me-nu></me-nu>
    </el-aside>
    <el-container class="layout-right">
      <el-header>
        <button class='liti-button' @click="changeTheme">改变主题</button>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import  menu from './menu.vue'
import {defineComponent, PropType,getCurrentInstance ,inject} from 'vue'
import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import {SetupContext} from "@vue/runtime-core";

//class 风格
interface ItemObj {
  title: string;
  content: string;
  show: boolean;
}

interface Student{
  name:string,
  age:number,
  isStudent:boolean,
}


export default defineComponent({
  name: 'Layout',
  props: {
    success: {type: String},
    callback: {
      type: Function as PropType<() => void>
    },
    student: {
      type: Object as PropType<Student>,
      required: true
    }
  },
  data() {
    return {
      menuItems: [{
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
    }
  },
  components:{"me-nu": menu},
  // components: { menu },
  computed: {
    menuItemsLen(): number {
      return this.menuItems.length
    }
  },
  methods: {
    changeTheme(){
      const nowTheme =window.document.documentElement.getAttribute('data-theme')
      const dataTheme= nowTheme==='default'?'dark':'default'
      // @ts-ignore
       this.$ls.set('data-theme',dataTheme)
      window.document.documentElement.setAttribute('data-theme', dataTheme)
    }
  },
  setup(props,context){
    const $ss=inject("$ss")
    console.log('这里是 $ss 1234 的结果-------------', $ss)
    console.log('这里是 context 的结果-------------', context)
  },
  beforeRouteEnter(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) {
    next((context)=>{
      console.log('这里是 beforeRouteEnter 的结果-------------', context)
    });
  },
  created() {
    let  {ctx}:any = getCurrentInstance();
    console.log('这里是 ctx 的结果-------------', ctx)
    let dataTheme= ctx.$ls.get('data-theme') || 'default';
      window.document.documentElement.setAttribute('data-theme', dataTheme)
  },
  mounted() {
    // let root = getCurrentInstance();
    // console.log('这里是 this 1231241 的结果-------------', root)
  },


})

</script>
<style scoped lang="scss">
.layout{
  display: flex;
  height: 100vh;
  .layout-right{
    display: flex;
    flex-flow: column;
    flex: 1;
    .el-header,.el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      justify-content: space-between;
    }
    .el-main{
      flex: 1;
    }
  }
  .el-aside{
    height: 100vh;
    overflow: hidden;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    //line-height: 200px;
  }
  avatar{
    width: 4rem;
    height: 4rem;
  }
}
.layer-head {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.layer-content {
  display: flex;
  flex: 1;
  height: calc(100vh - 7rem);

  .menu-left {
    width: 8rem;
    background: yellowgreen;
  }

  .layer-content-right {
    flex: 1;
    background: rgba(#42b983,.1);
  }
}

.layer-foot {
  height: 2rem;
  display: flex;
  justify-content: center;
  font-size: .5rem;
}

.liti-button {
  outline: none;
  border: none;
  color: white;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  cursor: pointer;
  background: linear-gradient(#3de5fb, #26acbd);
  text-shadow: 0 1px 1px grey;
  /*位置的三个参数
          1  X轴方向扩散，负值在左，正值在右
          2 Y轴方向扩散，正值向下，负值向上
          3 模糊半径   0时不模糊，就正常的阴影，越大越模糊 类似0实体阴影，数值大的变成了模糊阴影
          4，颜色可放在这三个数字前面，也可以放在这三个数字后面，这四个参数为一组，可以设置多组。
          */
  box-shadow: 0 0.2rem 0 #068494, 0 0.2rem 0.2rem grey;
}
.liti-button:active {
  box-shadow: 0 0.1rem 0 #068494, 0 0.1rem 0.1rem grey;
  transform: translate(0, 0.05rem);
}
</style>
