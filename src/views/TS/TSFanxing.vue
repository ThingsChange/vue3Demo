<template>
    <h1>TS中的class</h1>
    <div>张三：{{ zhangSan }}</div>
    <div>李四：{{ liSi }}</div>
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
            protected address = '西直门' //子类可以访问，构造函数也可以设置为constructor，但是这个类不能在包含它的类外被实例化，但是能被继承
            constructor(
                public name: string, //参数属性.   参数属性可以方便地让我们在一个地方定义并初始化一个成员。
                public sex: string, //参数属性     参数属性通过给构造函数参数前面添加一个访问限定符来声明。
                public type: string,
                public age: number,
                readonly company: string //此属性为只读属性，必须在声明时或者构造函数里被初始化
            ) {
                this.type = type
                this.age = age
                this.company = company
            }
        }

        class EmployeeMeal extends Employee {
            static festival = '三八妇女节 享有半天假期'
            constructor(
                public name: string,
                public sex: string,
                type: string,
                age: number,
                address: string
            ) {
                super(name, sex, type, age, '东直门')
                this.address = address
            }
            calculateFestivalDays() {
                return '法定节假日11天 , 妇女另外还有' + EmployeeMeal.festival
            }
        }

        const zhangSan = new Employee(
            'hangman',
            '男',
            '法外狂徒',
            16,
            '嘘嘘哗啦啦'
        )
        // zhangSan.company = '啦啦啦'
        const liSi = new EmployeeMeal(
            'zhangSan',
            '女',
            '法外狂徒',
            16,
            '西直门'
        )
        console.log(
            '这里是  女性每年假期情况  ------------',
            liSi.calculateFestivalDays()
        )

        abstract class Department {
            constructor(public name: string) {}

            printName(): void {
                console.log('Department name: ' + this.name)
            }

            abstract printMeeting(): void // 必须在派生类中实现
        }

        class AccountingDepartment extends Department {
            constructor() {
                super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
            }

            printMeeting(): void {
                console.log(
                    'The Accounting Department meets each Monday at 10am.'
                )
            }

            generateReports(): void {
                console.log('Generating accounting reports...')
            }
        }

        let department: Department // 允许创建一个对抽象类型的引用
        // department = new Department() // 错误: 不能创建一个抽象类的实例
        // eslint-disable-next-line prefer-const
        department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
        department.printName()
        department.printMeeting()
        // department.generateReports() // 错误: 方法在声明的抽象类中不存在

        const myAdd: (baseValue: number, increment: number) => number = (
            x,
            y
        ) => x + y
        myAdd(1, 2)
        function loggingIndentity<T>(arg: Array<T>): T[] {
            console.log('这里是 arg.length 的结果-------------', arg.length)
            return arg
        }
        loggingIndentity([1234, 123, 12, 1])
        return { zhangSan, liSi }
    },
}
</script>

<style scoped></style>
