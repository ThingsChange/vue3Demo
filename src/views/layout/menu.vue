<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5>自定义颜色</h5>
      <el-menu
          @click="aaa"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template v-slot:title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template v-slot:title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template v-slot:title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template v-slot:title>
            <span>导航二</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template v-slot:title>
            <span>导航三</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template v-slot:title>
            <span>导航四</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {ref, getCurrentInstance} from 'vue'
import {useRouter,useRoute} from "vue-router";
export default {
  name:'menu',
  data(){
    return {
          hehe:[1,2,3]
    }
  },
  methods:{
    aaa(){
      console.log('这里是 this methods 的结果-------------', this)
    }
  },
  created() {
    console.log('这里是 this created 的结果-------------', this)
  },
  setup(props:any,context:any) {
    let defaultOpeneds = ref(['1', '1-4'])
    let root=getCurrentInstance();
    let router= useRouter();
    let route= useRoute();
    console.log('这里是 this 的结果-------------', this)
    // console.log('这里是 VueRouter 的结果-------------', VueRouter)
    console.log('这里是 root 的结果-------------', root,router,route)
    function handleOpen(key:any, keyPath:any) {
      console.log('这里是 props,context 的结果-------------', props,context)
      console.log(key, keyPath)
    }
    function handleClose(key:any, keyPath:any) {
      console.log(key, keyPath)
    }

    function selectMenu(data:any){
      console.log('这里是 props,context 的结果-------------', props,context)
    }

    return { defaultOpeneds, handleOpen, handleClose }
  }
}
</script>
