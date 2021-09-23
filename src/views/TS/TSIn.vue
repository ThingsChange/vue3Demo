<template>
  <div>1{{ a }}3</div>
  <button @click="conSo">输出语句，无返回的函数</button>
  <div>我是枚举类型{{errorT}}</div>
  <section>
    <div>
    <div class="logo">
      <h1>法医</h1>
    </div>
    <ul class="nav">
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
    </ul>
    </div>
    <div class="abc">1{{ a }}3</div>
    <button @click="conSo">输出语句，无返回的函数</button>
    <div>我是枚举类型{{errorT}}</div>
  </section>

</template>

<script lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
export default {
  name: "TSIn",
  setup(props: any, context: any) {
    let instance = getCurrentInstance();

    onMounted(()=>{
      console.log('这里是 root1 的结果-------------', instance)
    })

    console.log('这里是 props,context 的结果-------------', props,context)
    let a: number | undefined | null;

    function conSo(): void {
      console.log(getInfo('帅哥'));
      console.log('这里是 1234 的结果-------------', 123,arr4)
      console.log(sum(0,...arr));
    }

    //  never类型，是其他类型（包括null  和undefined）的子类型，代表从不会出现的值，
    //  这意味着never类型变量只能有never类型的值赋值
    let b: undefined;
    b = undefined;
    let c: null;
    c = null;
    // let d: never;
    //这样有个蛋用，这个地方可以用any来代替
/*      d = (() => {
        throw  new Error('傻逼设计2啊')
      })();*/
    //数组类型
    let arr: number[] = [1, 2, 3]
    // 数组类型2
    let arr2: Array<number> = [2, 3, 4]
    //数组类型3
    let arr3:any=[1,true,'2',[]]
    //  元组类型（tuple） 属于数组的一种
    let arr4: [number, boolean, string] = [1, false, '1']

    //枚举类型
    enum Err {'undefined'=-1,'as','sd'}
    let errorT:Err=Err.sd

    //函数声明法
    function  func1():string{
      return "1"
    }
    //函数表达式
    let func2 = function ():number{
      return 1;
    }
    //3.1 ts中定义方法传参
/*    function  getInfo(name:string,age:number):string{
        return  `${name}年龄${age}`
    }*/
    //3.2 可选参数   必须配置在最后边
    //es5中形参和实参可以不一样，但是在typescripte中必须一样，如果不一样，那么就要配置可选参数
/*    function  getInfo(name:string,age?:number):string{
      return  `${name}年龄${age?age:'保密'}`
    }*/
    //3.3 默认参数
  function  getInfo(name:string,age:number=20):string{
        return  `${name}年龄${age}`
    }
    //3.4剩余参数
    // function sum(a:number,b:number,c:number,d:number):number{
    //     return a+b+c+d
    // }
    function sum(a:number,...b:number[]):number{
        return a+ b.reduce((vv,v)=>vv+v)
    }
    //3.5函数重载

    function getInfo2(name:string):string;
    function getInfo2(age:number):number;
    function  getInfo2(str:any):any{
      if(typeof str ==='string') return '我是'+str;
      else return str;
    }

    function getInfo3(name:string):string;
    function getInfo3(name:string,age:number):number;
    function  getInfo3(name:string,age?:any):any{
      if(typeof name ==='string') return '我是'+name;
      else return age;
    }
    // 3.6箭头函数



    return {
      //d,
      a, b, c,arr, arr2,arr3,arr4,Err,errorT,func1,func2,getInfo,sum,getInfo2,getInfo3,
      conSo,
    }
  },

}
</script>

<style scoped>

</style>
