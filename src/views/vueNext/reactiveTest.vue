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
  <button class="liti-button" @click="changeStatus">切换状态</button>
  <div>
    姓名：{{person.basic.name}}
    当前状态：{{person.status}}
    ref  B的：{{b}}
<!--    food:{{food}}-->
  </div>
  <div>
    <async-com :person="person" v-if="showAsync"></async-com>
  </div>
</template>
<script>
import  {defineComponent, reactive,defineAsyncComponent,isReactive,toRaw,ref,toRefs} from 'vue'
// import (/* webpackChunkName: "reactiveDetail" */'@v/vueNext/reactiveDetail.vue')


import CountDemo from "@/views/vueNext/CountDemo";
import reactiveDetail from "@/views/vueNext/reactiveDetail";
import(
    /*  webpackPrefetch: true */
    /* webpackChunkName: "HelloWorld" */
    './../../components/HelloWorld.vue'
    )

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
  },
  setup(){
    let person = reactive({
      status:'tired',
      basic:{
        name:'1',
        age:2
      }
    })
    let b=ref(12);
    let  changeStatus = function(){
      person.status='happy'
      person.basic.name='逗比'
    }
    let food=ref({
      name:'麻婆豆腐',
      unit:'份',
      taste:['麻','辣'],
      price:10,

    })
    console.log('这里是 person 的结果-------------', person,toRaw(person),b)
    console.log('这里是 food 的结果-------------', food,toRefs(food))
    return {
      person,
      changeStatus,
      b,
      food
    }
  }
})
</script>
