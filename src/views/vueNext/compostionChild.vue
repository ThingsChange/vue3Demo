<template>
  <div>
    <div>我是子组件，你猜下面的菜价会不会变</div>
    <div v-for="(food,index) of state.foodList" :key=food.id>
      <span>{{ food.count }}</span>
      <span>{{ food.unit }}</span>
      <span>{{ food.foodName }}</span>
      <span>{{ food.price }}元</span>
      <button>输出</button>
      <button>涨价了</button>
      <button>降价</button>
      <button>下架</button>
    </div>
  </div>
</template>
<script>

import foodHandler from "@/views/vueNext/food";
import foodHelper from "@/views/vueNext/foodHelper";


export default {
  name: "compostionChild",
  setup() {
    let {state} = foodHandler()
    return {state}
  }
}
</script>
1112345678999
<style scoped>

</style>
