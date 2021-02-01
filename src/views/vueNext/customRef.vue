<template>
<div>
  <ul>
    <li v-for="item in dotaList" :key="item.id">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
/*
* CustomRef
* 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
* 它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并应返回一个带有 get 和 set 的对象。
* */
 XCX
import {customRef, reactive, ref} from "@vue/reactivity";

let myRef = function (value) {
  return customRef((track, trigger) => {
    fetch(value).then(res=>{
      console.log('这里是 2 的结果-------------', 2)
      return res.json()
    }).then(data=>{
      value=data;
      trigger()
    }).catch(e=>{
      console.log('这里是 e 的结果-------------', e)
    })
    return {
      get() {
        track();//告诉vue这个数据是需要追踪变化打的
        console.log('track1',value)
        //不能在get方法中发送网络请求
        // 渲染界面->调用get -> 发送网络请求
        //保存数据->更新界面->调用get->
        return value;
      },
      set(newValue) {
        console.log('这里是 set 的结果-------------', newValue)
        value=newValue
        trigger();//告诉vue触发界面更新
      }
    }
  })
}

export default {
  name: "CustomRef",
  //这玩意儿只能是同步方法，不能是异步方法
  //async setup 是错的
  setup(){
    // let dotaList = ref([]);
     let dotaList = myRef('/mock/dota')
    console.log('这里是 dotaList 的结果-------------', dotaList)
    return {dotaList}
  }
}
</script> J /IKJIO/

<style scoped>

</style>
