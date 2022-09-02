/**
 *
 * @author  晴云
 * @create 2022-08-31 15:26
 * @note 干什么的呢？
 **/
import { ref } from 'vue'
import { useEventListener } from './event.js'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)
    useEventListener(window, 'mousemove', event => {
        x.value = event.pageX
        y.value = event.pageY
    })
    return { x, y }
}
