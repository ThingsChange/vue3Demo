<template>
  <h1>
    保持响应式的情况下对数据进行扩展，合并
  </h1>
  toRef有啥用呢？
  使某个响应式数据 的基本类型的值

 <div>{{foodR}}</div><br/>
 <div>{{imgList}}</div>

  <h3>那么toRefs 有是什么？</h3>
  <p>toRef() 的一个问题是定义起来极其麻烦，一次只能转换一个 key，因此我们可以封装一个函数，直接把一个响应式对象的所有key都转成 ref，这就是 toRefs()</p>
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
      console.log('这里是 foodTemp.img 的结果-------------', foodTemp.unit)
    })
    foodR.img= ['1', '2','3']
    // foodR.img.push('3')
    foodR.unit='份'

    let foodR2=toRefs(foodR);
    effect(()=>{
      console.log('这里是 foodR2.count 的结果-------------', foodR2.count.value)
    })
    console.log('这里是 foodR2 的结果-------------', foodR2)
    foodR.count=2;
    return {
      foodR,imgList
    }
  }
}
</script>

<style scoped>

</style>
