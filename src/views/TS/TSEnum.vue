<template>
    <h1>TS中的Enum</h1>
    <div>张三：{{ zhangSan }}</div>
    <div>李四：{{ liSi }}</div>
</template>

<script lang="ts">
// import {getCurrentInstance, onMounted} from 'vue'

export default {
    name: 'TSEnum',
    setup(props: any, context: any) {
        enum FileAccess {
            // constant members
            None,
            Read = 1 << 1,
            Write = 1 << 2,
            ReadWrite = Read | Write,
            // computed member
            G = '123'.length,
        }
        const zhangSan = FileAccess.Read
        const liSi = FileAccess.ReadWrite

        //运行时的枚举
        enum E {
            X,
            Y,
            Z,
        }
        function f(obj: { X: number }) {
            return obj.X
        }

        f(E)
        console.log('这里是   f({ a: 2 })  ------------', f(E))
        let x = 3
        x = 1

        /*
         * 类型性兼容
         * 只有目标类型（这里是Named）的成员会被一一检查是否兼容。
         * 这个比较过程是递归进行的，检查每个成员及子成员。
         * */

        interface Named {
            name: string
        }
        let xx: Named
        let y = {
            name: '傻逼',
            age: '18',
        }
        xx = y

        //比较两个函数
        let xFunc = (a: number) => 0
        let yFunc = (b: number, s: string) => 0

        yFunc = xFunc // OK
        // xFunc = yFunc // Error   因为yFunc第二个参数为必填参数，

        //函数返回值
        let x1 = () => ({ name: 'shabi' })
        let y1 = () => ({ name: 'shabi', age: 21 })
        x1 = y1
        // y1 = x1 错误，因为x1的返回值缺少age属性

        //函数参数双向协变

        /*        enum EventType {
            Mouse,
            Keyboard,
        }

        interface Event {
            timestamp: number
        }
        interface MouseEvent extends Event {
            x: number
            y: number
        }
        interface KeyEvent extends Event {
            keyCode: number
        }

        function listenEvent(
            eventType: EventType,
            handler: (n: Event) => void
        ) {
            /!* ... *!/
        }

        // Unsound, but useful and common
        listenEvent(EventType.Mouse, (e: MouseEvent) =>
            console.log(e.x + ',' + e.y)
        )

        // Undesirable alternatives in presence of soundness
        listenEvent(EventType.Mouse, (e: Event) =>
            console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
        )
        listenEvent(EventType.Mouse, <(e: Event) => void>(
            ((e: MouseEvent) => console.log(e.x + ',' + e.y))
        ))

        // Still disallowed (clear error). Type safety enforced for wholly incompatible types
        listenEvent(EventType.Mouse, (e: number) => console.log(e))*/

        return { zhangSan, liSi }
    },
}
</script>

<style scoped></style>
