<template>
  <h1>
    保持响应式的情况下对数据进行扩展，合并
  </h1>
  toRef有啥用呢？
  使某个响应式数据 的基本类型的值

 <div>{{foodR}}</div><br/>
 <div>{{imgList}}</div>
  <div>{{state}} <button @click="changeState">改变左侧的</button></div>
  <h3>那么toRefs 有是什么？</h3>
  <p>toRef() 的一个问题是定义起来极其麻烦，一次只能转换一个 key，因此我们可以封装一个函数，直接把一个响应式对象的所有key都转成 ref，这就是 toRefs()</p>

  <div>{{foodR2.count.value}}</div>
</template>

<script>
import {toRef, toRefs, reactive,ref} from 'vue'
import { effect } from '@vue/reactivity'

export default {
  name: "toRef",
  setup() {
    let food = {
      id: "",
      foodName: '',
      unit: 'pan',
      count: '1',
      price: '',
      img: ['1', '2']
    }
    let foodR = reactive(food)
    //这样写，foodR.unit被修改的时候 其实是不会触发响应式的，因为你在ref的时候传入的是一个基本值
    // let imgList = ref({url: foodR.img,unit:foodR.unit})
    //而下面这哥写法，就会变成响应式，应该是我需要某个对象基本类型的键值为响应式的初始值
    let imgList = ref({url: foodR.img,unit:toRef(foodR,'unit')})
    // let foodTemp={unit:foodR.unit}
    let foodTemp={unit:toRef(foodR,'unit')}
    effect(()=>{
      console.log('这里是 imgList.url 的结果-------------', imgList)
      console.log('这里是 imgList.url 的结果-------------', imgList.value.unit)
      console.log('这里是 foodTemp.img 的结果-------------', foodTemp.unit.value)
    })
    //这个是不会用数据的。
    foodR.img= ['1', '2','3']
    //下面这种写法 原始数据以及相应数据视图均会更新，因为他们用的是一个数据
    // foodR.img.push('3')
    // foodR.unit='份'

    // imgList.value.unit='盒'
    let foodR2=toRefs(food);
    effect(()=>{
      console.log('这里是 foodR2.count 的结果-------------', foodR2.count.value)
    })
    console.log('这里是 foodR2 的结果-------------', foodR2)
    foodR.count=2;

    let obj= {name:'zs'}
    let state = toRef(obj,'name')
    //toRef 将一个对象中的属性变成响应式，我们修改响应式数据是会影响元数据的，但是并不会触发视图更新。
    let changeState =()=>{
      state.value = 'lisi'
      foodR.unit = foodR.unit + '1';
      foodR.count++;
      console.log('这里是 state 的结果-------------', state)
      console.log('这里是 obj 的结果-------------', obj)
    }
    return {
      foodR,imgList,state,changeState,foodR2
    }
  }
}
</script>

<style scoped>

</style>
