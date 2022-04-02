/**
 *
 * @author  晴云
 * @create 2021-01-27 9:32
 * @note 干什么的呢？
 **/
import { reactive } from 'vue'

export default function (state) {
    let isSpecial = function (food) {
        const arr = [
            (food.sideDishes || []).length,
            (food.foodTastes || []).length,
            (food.foodSetCategories || []).length,
        ]
        return arr.some(v => v) || food.units.length > 1
    }
    let addFoodPrice = function (id) {
        let food = state.foodList.find(food => food.id === id)
        food.price = Number(food.price) + 10
    }
    let minusFoodPrice = function (food) {
        food.price = Number(food.price) - 10
    }
    return {
        isSpecial,
        addFoodPrice,
        minusFoodPrice,
    }
}
