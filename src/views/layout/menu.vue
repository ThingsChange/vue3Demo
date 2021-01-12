<template>
  <el-row class="tac">
      <el-menu
          @select="selectMenu"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
      >
        <el-submenu v-for="(item, index) in routeConfig" :index="item.id" :key="index">
          <template v-slot:title>{{ item.text }}</template>
          <el-menu-item v-for="(secondItem, index) in item.child" :index="secondItem.id" :key="index">{{ secondItem.text }}</el-menu-item>
        </el-submenu>

<!--        <el-submenu index="1">
          <template v-slot:title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template v-slot:title>分组一</template>
            <el-menu-item index="1-1" index-path="/qy/cssStudy">reactive</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>-->
<!--        <el-menu-item index="2">
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
        </el-menu-item>-->
      </el-menu>
  </el-row>
</template>

<script>
import {ref, getCurrentInstance} from 'vue'
import {useRouter, useRoute} from "vue-router";
import {routeConfig} from "@/views/layout/menuRouter";

export default {
  name: 'menu',
  data() {
    return {
      hehe: [1, 2, 3],
      // routeConfig
    }
  },
  methods: {
    selectMenu(data) {
      let firstMenum = data.slice(0, data.indexOf('-'))
      let toUrl = ''
      console.log(1234)
      routeConfig.filter(v => {
        if (v.id === firstMenum) {
          v.child.filter(x => {
            if (x.id === data) {
              toUrl = x.path
            }
          })
        }
      })
      this.$router.push(toUrl)
    }
  },
  created() {
    console.log('这里是 this created 的结果-------------', this)
  },
  setup(props, context) {
    let defaultOpeneds = ref(['1', '1-4'])
    let routeConfig = ref(routeConfig)
    let root = getCurrentInstance();
    let router = useRouter();
    let route = useRoute();
    console.log('这里是 this 的结果-------------', this)
    // console.log('这里是 VueRouter 的结果-------------', VueRouter)
    console.log('这里是 root 的结果-------------', root, router, route)

    function handleOpen(key, keyPath) {
      console.log('这里是 props,context 的结果-------------', props, context)
      console.log(key, keyPath)
    }

    function handleClose(key, keyPath) {
      console.log(key, keyPath)
    }

    function selectMenu(data) {
      console.log('这里是 props,context 的结果-------------', props, context)
    }

    console.log('这里是 routeConfig 的结果-------------', routeConfig)

    return {defaultOpeneds, handleOpen, handleClose, routeConfig}
  }
}
</script>
<style type="scss" lang="scss">
.el-submenu__title{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

</style>
