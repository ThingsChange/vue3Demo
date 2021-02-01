<template>
  <div>
    <form>
      <input type="text" placeholder="id" v-model="state.food.id">
      <input type="text" placeholder="单位" v-model="state.food.unit">
      <input type="text" placeholder="菜名" v-model="state.food.foodName">
      <input type="text" placeholder="价格" v-model="state.food.price">
      <input type="text" placeholder="数量" v-model="state.food.count">
      <button @click.prevent.stop="addFood"> 添加</button>
    </form>
    <div v-for="(food,index) of state.foodList" :key=food.id>
      <span>{{ food.count }}</span>
      <span>{{ food.unit }}</span>
      <span>{{ food.foodName }}</span>
      <span>{{ food.price }}元</span>
      <button @click.stop="printFood(food)">输出</button>
      <button @click.stop="addFoodPrice(food.id)">涨价了</button>
      <button @click.stop="minusFoodPrice(food)">降价</button>
      <button @click.stop="delFood(food.id)">下架</button>
    </div>
  </div>
  <compostionChild></compostionChild>
</template>
<script>

import foodHandler from "@/views/vueNext/food";
import foodHelper from "@/views/vueNext/foodHelper";
import compostionChild from "@/views/vueNext/compostionChild";

export default {
  name: "compostionApi",
  components: {
    compostionChild
  },
  setup() {
    let {state, addFood, delFood, printFood} = foodHandler()
    let {addFoodPrice, minusFoodPrice} = foodHelper(state);
    return {state, addFood, delFood, printFood, addFoodPrice, minusFoodPrice}
  }
}
</script>

<style scoped>

</style>
