<template>
  <div>
    {{ obj.foo }}
    {{ obj.map1.hi }}
    名字：{{ username }}
    <!--    <img src="../../assets/images/渐进式广告图.png" alt="">-->
  </div>
  <button @click="add">点我</button>
</template>

<script>
import {reactive, watchEffect} from 'vue';
import {effect} from '@vue/reactivity';
import {computed} from "vue";

export default {

  name: "effect",
  setup() {
    let obj = reactive({foo: 0, map1: new Map()});
    let people = reactive({xing: 'wang', name: 'qy'})
    let dummy;
    console.log('这里是 1 的结果-------------', 1)
    let add = function () {
      /*      import(
                /!*  webpackPrefetch: true *!/
                /!* webpackChunkName: "customRef" *!/
                './customRef.vue'
                ).then(({default: abc}) => {
              console.log('这里是   abc.is23  ------------', abc);
            })*/

      username.value = 'haha'
      people.name = 'baba'
      console.log('这里是 people 的结果-------------', people)
      obj.foo++
      obj.map1.hi = 'hello_world'
      console.log('这里是 dummy 的结果-------------', dummy)
    }
    effect(() => {
      dummy = obj.map1.hi
      // console.log('这里是   obj.foo  ------------', obj.foo)
    }, {
      lazy: false,
      onTrack({effect, target, type, key}) {
        console.log('这里是 effect,target,type,key 的结果------track-------', typeof effect, target, type, key)
      },
      onTrigger({effect, target, type, key}) {
        console.log('这里是 effect,target,type,key 的结果---trigger----------', effect, target, type, key)
      }
    })
    /*    watchEffect(() => {
          console.log(obj.foo)
        })*/
    let username = computed({
      get: () => {
        console.log('这里是 people.name 的结果-------------', people.name)
        return people.xing + people.name
      },
      set: (val) => {
        people.name = val
      }
    })
    return {obj, username, add}
  }
}
</script>

<style scoped>

</style>
