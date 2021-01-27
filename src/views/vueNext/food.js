/**
 *
 * @author  晴云
 * @create 2021-01-27 8:47
 * @note 干什么的呢？
 **/

import {reactive} from 'vue'
export  default  function foodHandler(){
    let food = {
        id:"",
        foodName:'',
        unit:'',
        count:'1',
        price:''
    }
    let foodList=[
        {
            id:'1',
            foodName:'麻婆豆腐',
            unit:'份',
            count:'1',
            price:'21'
        },
        {
            id:'2',
            foodName:'酸辣土豆丝',
            unit:'盘',
            count:'1',
            price:'12'
        },
        {
            id:'3',
            foodName:'红星二锅头',
            unit:'瓶',
            count:'1',
            price:'28'
        },
    ]
    let state = reactive({food,foodList});
    let addFood = function (e){
        let foodInput= Object.assign({},state.food,food)
        state.foodList.push(foodInput);
        state.food.id=''
        state.food.foodName=''
        state.food.unit=''
        state.food.count='1'
        state.food.price=''
    }
    let delFood = function (id){
        state.foodList=state.foodList.filter(food=>food.id !== id)
    }
    let printFood = function (food){
        console.log('这里是 当前的food 的结果-------------', `${food.count}_${food.unit}_${food.foodName}的价格是${food.price}`)
    }
    return {state,addFood,delFood,printFood}
}
