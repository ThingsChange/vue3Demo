<template>
  <div>
  <span id="a"> {{ obj.foo }}</span>
    {{ obj.map1.hi }}
    名字：{{ username }}
    <!--    <img src="../../assets/images/渐进式广告图.png" alt="">-->
  </div>
  <button @click="add">点我</button>
</template>

<script>
import {getCurrentInstance, onMounted, reactive, watchEffect} from 'vue';
import {effect} from '@vue/reactivity';
import {computed} from "vue";
import axios from 'axios'


export default {

  name: "effect",
  setup() {
    let obj = reactive({foo: 0, map1: new Map()});
    let people = reactive({xing: 'wang', name: 'qy'})
    let dummy;
    console.log('这里是 1 的结果-------------', 1)
    let instance = getCurrentInstance();
    let add = function () {
      /*      import(
                /!*  webpackPrefetch: true *!/
                /!* webpackChunkName: "customRef" *!/
                './customRef.vue'
                ).then(({default: abc}) => {
              console.log('这里是   abc.is23  ------------', abc);
            })*/
      // instance.ctx.sendRequest();
      username.value = 'haha'
      people.name = 'baba'
      console.log('这里是 people 的结果-------------', people)
      setInterval(()=>{
        obj.foo++
      },20)
      obj.foo++
      obj.map1.hi = 'hello_world'
      console.log('这里是 dummy 的结果-------------', dummy)
    }
    onMounted(()=>{
      console.log('这里是 root1 的结果-------------', instance)
    })

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
    let abc=reactive({})

    let unWatch = watchEffect((onInvalidate)=>{
      console.log('这里是 pre 类型的watchEffect  this.username  ------------', username)
      console.log('这里是   pre 类型的watchEffect  obj.foo  ------------', obj.foo)
      sendRequest();
      // console.log(document.querySelector('#a').innerHTML)
      onInvalidate(()=>{
        cancel();
        // token.cancel();
      })

    },{flush:'pre'})

    function sendRequest () {
      // console.log('这里是 this 的结果-------------', this.$axios2,axios)
      console.log('这里是 a 的结果-------------', abc)
      abc.source = axios.CancelToken.source(); // 这里初始化source对象
      return axios.get('https://dohko.m.hualala.com/orh5/qrcode/info?s=32142625_pjt5&groupID=11157', {
        cancelToken: abc.source.token // 这里声明的cancelToken其实相当于是一个标记，
        // 当我们要取消请求的时候，可以通过这个找到该请求
      }).then(res => {
        // 你的逻辑
        console.log('这里是 res 的结果-------------', res)
      }).catch(err => {
        // 如果调用了cancel方法，那么这里的res就是cancel传入的信息
        console.log('这里是 err 的结果-------------', err)
        // 你的逻辑
      })
    }
    function cancel () {
      abc.source.cancel('这里你可以输出一些信息，可以在catch中拿到')
    }

    return {obj, username, add,abc}
  },
  methods:{
    sendRequest () {
      console.log('这里是 this 的结果-------------', this.$axios2,axios)
      this.source = axios.CancelToken.source(); // 这里初始化source对象
      return axios.get('https://dohko.m.hualala.com/orh5/qrcode/info?s=32142625_pjt5&groupID=11157', {
        cancelToken: this.source.token // 这里声明的cancelToken其实相当于是一个标记，
        // 当我们要取消请求的时候，可以通过这个找到该请求
      }).then(res => {
            // 你的逻辑
        console.log('这里是 res 的结果-------------', res)
          }).catch(err => {
            // 如果调用了cancel方法，那么这里的res就是cancel传入的信息
        console.log('这里是 err 的结果-------------', err)
            // 你的逻辑
          })
    },
    cancel () {
      this.source.cancel('这里你可以输出一些信息，可以在catch中拿到')
    }
  }
}
</script>

<style scoped>

</style>
