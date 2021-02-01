<template>
  <div>
    {{obj.foo}}
  </div>
  <button @click="add">点我</button>
</template>

<script>
import {reactive} from "vue";
import {effect} from '@vue/reactivity'

export default {
  name: "effect",
  setup(){
      let obj = reactive({foo:0})
      let add = function (){
        obj.foo++
      }
    effect(()=>{
      console.log('这里是   obj.foo  ------------', obj.foo)
    },{
      lazy:false,
      onTrack({effect,target,type,key}){
        console.log('这里是 effect,target,type,key 的结果-------------', effect,target,type,key)
      },
      onTrigger({effect,target,type,key}){
        console.log('这里是 effect,target,type,key 的结果---2----------', effect,target,type,key)
      }
    })
    return {obj,add}
  }
}
</script>

<style scoped>

</style>
