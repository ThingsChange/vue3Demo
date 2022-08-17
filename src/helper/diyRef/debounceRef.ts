import { customRef } from '@vue/reactivity'

export default function (value) {
    let timer: null | ReturnType<typeof setTimeout> = null
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                console.log('这里是 123 的结果-------------', 123)
                if (timer) clearTimeout(Number(timer))
                timer = setTimeout(() => {
                    value = newValue
                    console.log('这里是 1234 的结果-------------', 1234)
                    trigger()
                }, 1000)
            },
        }
    })
}
