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
  <div></div>
</template>
<script lang='ts'>
import {defineComponent, reactive} from 'vue'
import CountDemo from "@/views/vueNext/CountDemo";

interface Student {
  name: string
  class?: string
  age: number
}

export default defineComponent({
  ...CountDemo,
  data() {
    return {
      nums: [1],
      msg2: 2
    }
  },
  methods: {
    addA(): void {
      this.nums.push(this.nums[this.nums.length - 1] + 1)
      console.log('这里是 this.sum 的结果-------------', this.sum, this)
    }
  },
  computed: {
    sum(): number {
      return this.nums.reduce((vv, v) => vv + v)
    }
  }
})
</script>
