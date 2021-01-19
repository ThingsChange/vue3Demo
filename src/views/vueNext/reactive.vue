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
  <button class="liti-button" @click="addAsyncComponent">动态组件</button>
  <div>
    <async-com v-if="showAsync"></async-com>
  </div>
</template>
<script>
import  {defineComponent, reactive,defineAsyncComponent} from 'vue'

import CountDemo from "@/views/vueNext/CountDemo";

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
      msg2: 2,
      showAsync:false
    }
  },
  components:{
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
/*      const AsyncFoo = defineAsyncComponent({
        delay: 200,
        timeout: 3000,
        loader:()=> import(/!* webpackChunkName: "HelloWorld" *!/ './../../components/HelloWorld.vue')
      })*/
      // Vue.component('AsyncComponent',AsyncFoo)
      // console.log('这里是 AsyncFoo 的结果-------------', AsyncFoo)
      this.showAsync=true
    }
  },
  computed: {
    sum() {
      return this.nums.reduce((vv, v) => vv + v)
    }
  }
})
</script>
