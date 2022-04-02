// @ts-ignore
import { computed, reactive, ref } from 'vue'
import useCount from './useCount'

export default {
    name: 'CountDemo',
    props: {
        msg: String,
    },
    setup(props: any, context: any) {
        const {
            current: count,
            inc,
            dec,
            set,
            reset,
        } = useCount(2, {
            min: 1,
            max: 16,
        })
        const msg = ref('Demo useCount')
        const arr = reactive([msg])
        const carr = computed(() => {
            return [1, 2, 3]
        })
        console.log(
            '这里是 arr[0] 的结果-------------',
            arr[0],
            carr,
            props,
            context
        )
        return {
            count,
            inc,
            dec,
            set,
            reset,
            msg,
        }
    },
}
