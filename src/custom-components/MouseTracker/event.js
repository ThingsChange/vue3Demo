/**
 *
 * @author  晴云
 * @create 2022-08-31 15:42
 * @note 干什么的呢？
 **/
import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callBack) {
    onMounted(() => {
        target.addEventListener(event, callBack)
    })
    onUnmounted(() => {
        target.removeEventListener(event, callBack)
    })
}
