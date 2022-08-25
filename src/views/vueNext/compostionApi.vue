<template>
    <div>
        <form>
            <input type="text" placeholder="id" v-model="state.food.id" />
            <input type="text" placeholder="单位" v-model="state.food.unit" />
            <input type="text" placeholder="菜名" v-model="state.food.foodName" />
            <input type="text" placeholder="价格" v-model="state.food.price" />
            <input type="text" placeholder="数量" v-model="state.food.count" />
            <button @click.prevent.stop="addFood">添加</button>
        </form>
        <button @click="abc">呵呵</button>
        <div v-for="(food, index) of state.foodList" :key="food.id">
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
    <compostionChild v-if="showChild"></compostionChild>
</template>
<script>
import foodHandler from '@/views/vueNext/food'
import foodHelper from '@/views/vueNext/foodHelper'
// import compostionChild from "@/views/vueNext/compostionChild";
import { reactive } from 'vue'

export default {
    name: 'compostionApi',
    components: {
        // compostionChild:customRef
        compostionChild: () =>
            import(
                /*webChunkName : "customRef"*/
                './customRef.vue'
            ),
    },
    setup() {
        let res = reactive({ showChild: false })
        let { state, addFood, delFood, printFood } = foodHandler()
        let { addFoodPrice, minusFoodPrice } = foodHelper(state)
        function abc() {
            console.log('这里是 12345 的结果-------------', 12345)
            res.showChild = true
        }
        return {
            ...res,
            state,
            addFood,
            delFood,
            printFood,
            addFoodPrice,
            minusFoodPrice,
            abc,
        }
    },
}
</script>

<style scoped></style>
