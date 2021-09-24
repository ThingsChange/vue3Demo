<template>
<!--  <div>
    <div data-src="baidu.com" v-if="state.showMsg">
      {{ state.msg }}
    </div>
    <div v-else>
      <div>
        {{state.msg}}
      </div>
    </div>
  </div>-->
  <div v-if="state.showMsg">
    {{ state.msg }}
  </div>
  <div v-else>
    {{ Math.random()}}
  </div>
  <button @click="toggle">Toggle Msg</button>
  <button @click="switchView">Switch View</button>
</template>
<script>
import {getCurrentInstance, onMounted, reactive} from 'vue'
import {effect} from "@vue/reactivity";

export default {
  setup() {
    const state = reactive({
      msg: 'Hello World',
      showMsg: 0,
      count:0,
      a:new Set([1,2,3,4])
    })

    function toggle() {
      // state.msg = state.msg === 'Hello World' ? 'Hello Vue' : 'Hello World'
      state.a.add(5)
      state.count++;
    }
    let queue = [] ;
    let isFlushing = false;
    function queueJob(job=(arg)=>{console.log('0000000000',arg)}){
      console.log('这里是 123 的结果-------------', 123)
          if(!queue.includes(job)) queue.push(job)
        if(!isFlushing) {
          isFlushing = true;
          console.log('这里是 2 的结果-------------', 2)
          Promise.resolve().then(()=>{
            let fn = null;
            console.log('这里是 1 的结果-------------', queue)
            // eslint-disable-next-line no-cond-assign
            while(fn = queue.shift()){
              fn();
            }
          })
        }

    }
    let a = new effect(
        ()=>{
                // console.log('这里是 this.showMsg 的结果-------------', state.showMsg)
                console.log('这里是 this.count 的结果-------------', state.count)
            },{
          scheduler:queueJob
/*
          scheduler:()=>{
            console.log('这里是 我是调度函数 的结果-------------', state.showMsg)
          }
*/
        })


    function switchView() {
      state.showMsg = !state.showMsg
    }
    onMounted(()=>{
      console.log('这里是 getCurrentInsantace 的结果-------------', getCurrentInstance())
    })
   let testEffect =  effect(()=>{
/*     for (let a of  state.a){
       // console.log(a)
     }*/
     return state.msg
    })
    return {
      toggle,
      switchView,
      state,
      testEffect
    }
  }
}
</script>
