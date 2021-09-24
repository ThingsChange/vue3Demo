<template>
    <h1>TS中的class</h1>
    <div>{{ zhangsan }}</div>
</template>

<script lang="ts">
// import {getCurrentInstance, onMounted} from 'vue'

export default {
    name: 'TSClass',
    setup(props: any, context: any) {
        interface Person {
            name: string
            sex: string
            age?: number
            readonly type: string
        }
        class Employee implements Person {
            protected address: string
            constructor(
                public name: string,
                public sex: string,
                type: string,
                age: number
            ) {
                this.type = type
                this.age = age
            }
        }

        class EmployeeMeal extends Employee {
            constructor(
                public name: string,
                public sex: string,
                type: string,
                age: number,
                address: string
            ) {
                super(props)
            }
        }

        let zhangsan = new Employee('zhangsan', '男', '法外狂徒', 16, '西直门')
        let lisi = new Employee('zhangsan', '男', '法外狂徒', 16, '西直门')
        return { zhangsan }
    },
}
</script>

<style scoped></style>
