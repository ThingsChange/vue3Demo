<!--
<template>
  <el-container class="layout">
    <el-aside width="200px"  class="layout-left">
      <el-avatar class="avatar-nb">
        <img src="../../assets/images/老子不干了.jpg" alt="">
      </el-avatar>
      <me-nu></me-nu>
    </el-aside>
    <el-container class="layout-right">
      <el-header>
        <button class='liti-button' @click="changeTheme">改变主题</button>
        <button class='liti-button' @click="changeLanguage">语言</button>
        <button class='liti-button' @click="addRouteAsync">增加路由</button>
      </el-header>
      <el-main>
        <div id="teleportWrap" class="vue-next-wrapper">
        </div>
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
// import {ComponentInternalInstance, SetupContext} from "@vue/runtime-core";
// import  Login from '@/views/login/index.vue'
const   _import  = require ('@/common/_import.js')

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
        },
      ],
      mcColor:'red',
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
      this.mcColor= nowTheme==='default'?'red':'blue'
      // @ts-ignore
       this.LS.set('data-theme',dataTheme)
      window.document.documentElement.setAttribute('data-theme', dataTheme)
    },
    changeLanguage(){
      let context :any =this;
      context.$toggleLang();
    },
    addRouteAsync(){
     let routeA= {
        path: '/login',
          component: _import('login/index.vue'),
          name: 'Logina'
      }
      // this.$router.addRoute(routeA)
      // this.$router.push({name:'Logina'})
    }
  },
  setup(props,context){
    const $ss=inject("$ss")
    // console.log('这里是 $ss 1234 的结果-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', $ss)
    // console.log('这里是 context 的结果-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', context)
  },
  beforeRouteEnter(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) {
    next((context)=>{
      // console.log('这里是 beforeRouteEnter 的结果-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', context)
    });
  },
  created() {
    // this.changeTheme();
    // let  {ctx}:any = getCurrentInstance();
   // @ts-ignore
   //  console.log('这里是 ctx 的结果-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', ctx,this ,this.LS)
  },
  mounted() {
    // let root = getCurrentInstance();
    // console.log('这里是 this 1231241 的结果-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', root)
  },


})

</script>
<style scoped lang="scss" >

.layout{
  display: flex;
  height: 100vh;
  .layout-left{
    background-color: rgb(84, 92, 100) !important;
    & /deep/ .el-menu{
      border-right: none;
    }
  }
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
    .el-header{
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
  .avatar-nb{
    margin-top: 1rem;
    width: 6rem;
    height: 6rem;
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
</style>
-->
