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
        return { zhangSan, liSi }
    },
}
</script>

<style scoped></style>
