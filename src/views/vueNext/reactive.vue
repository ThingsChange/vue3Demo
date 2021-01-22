<template>
  <div>vueNext</div>
  <div>{{ msg }}</div>
  <div>{{ msg2 }}</div>
  <div>count 是 {{ count }}</div>
  <div>a 是 {{ a }}</div>
  <div @click="inc">加1</div>
  <div @click="reset">重置</div>
  <div>{{ nums }}</div>
  <div @click="addA">数组填充新数字</div>
  <div>{{ sum }}</div>
  <ndy-hehe>123</ndy-hehe>
  <reactiveDetail msg='12'></reactiveDetail>
  <button class="liti-button" @click="addAsyncComponent">动态组件</button>
  <button class="liti-button" @click="toDetail">reactive详情</button>
  <div>
    <async-com v-if="showAsync"></async-com>
  </div>
</template>
<script>
import  {defineComponent, reactive,defineAsyncComponent} from 'vue'
// import (/* webpackChunkName: "reactiveDetail" */'@v/vueNext/reactiveDetail.vue')


import CountDemo from "@/views/vueNext/CountDemo";
import reactiveDetail from "@/views/vueNext/reactiveDetail";

/*interface Student {
  name: string
  class?: string
  age: number
}*/

export default defineComponent({
  ...CountDemo,
  data() {
    return {
      nums: [1],
      msg2: 3122,
      showAsync:false
    }
  },
  components:{
    // reactiveDetail,
    'async-com': defineAsyncComponent({
      delay: 50000,
      timeout: 3000,
      loader:()=> import(/* webpackChunkName: "HelloWorld" */ './../../components/HelloWorld.vue')
  })
},
  methods: {
    addA() {
      this.nums.push(this.nums[this.nums.length - 1] + 1)
      console.log('这里是 this.sum 的结果-------------', this.sum, this)
    },
    addAsyncComponent(){
      console.log('这里是 哎呀卧槽 的结果-------------', '哎呀卧槽')
      this.showAsync=true
    },
    toDetail(){
      this.$router.push({name:'ReactiveDetail'});
    }
  },
  computed: {
    sum() {
      return this.nums.reduce((vv, v) => vv + v)
    }
  }
})
</script>
