<template>
    <h1>TS中的class</h1>
    <div>张三：{{ zhangSan }}</div>
    <div>李四：{{ liSi }}</div>
</template>

<script lang="ts">
// import {getCurrentInstance, onMounted} from 'vue'

export default {
    name: 'TSFaning',
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
        let myLog = function <T>(arg: T[]): T[] {
            console.log('这里是 arg.length 的结果-------------', arg.length)
            return arg
        }
        let myLog2: <T>(arg: T[]) => T[] = myLog
        //类型
        let myLog3: typeof myLog = function <T>(arr: T[]): T[] {
            return arr
        }
        //带有调用签名的对象字面量来定义泛型函数
        let myLog4: { <T>(arr: T[]): T[] } = myLog
        console.log('这里是   myLog3([1,2,3])  ------------', myLog3([1, 2, 3]))
        //泛型接口
        interface GenericIdentityFnTest {
            <T>(arg: T[]): T[]
            // <U>(a: U): U
        }
        interface GenericIdentityFn<T> {
            <T>(arg: T[]): T[]
        }
        function indentify<T>(arg: Array<T>): T[] {
            console.log(arg.length)
            console.log(arg.join())
            return arg.map(v => v)
        }
        function indentifyString<T>(arg: Array<T>): T[] {
            console.log(arg.length)
            console.log(arg.join())
            return arg.map(v => (v + '000') as unknown as T)
        }
        let myIndentify: GenericIdentityFn<number> = indentify
        let myIndentify2: GenericIdentityFn<string> = indentifyString
        console.log(
            '这里是   myIndentify([1,2,3,4,5,6])  ------------',
            myIndentify([1, 2, 3, 4, 5, 6])
        )
        let a: string[] = ['1', '2', '3', '4', '5']
        console.log('这里是   myIndentify2(a)  ------------', myIndentify2(a))

        //，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
        class People<T> {
            name!: T
            add!: (x: T, y: T) => T
        }

        let ar = new People<string>()
        ar.name = '特朗普'
        ar.add = function (x, y) {
            return x + y
        }
        console.log(
            '这里是   ar.add("川","建国")  ------2------',
            ar.add('川', '建国')
        )

        /*
         * 泛型约束
         * */

        interface Lengwise {
            length: number
        }
        function LogLength<T extends Lengwise>(arg: T): T {
            console.log('这里是 arg.length 的结果-------------', arg.length)
            return arg
        }

        console.log('这里是   LogLength(a)  ------------', LogLength(a))
        // LogLength(3)
        console.log(
            '这里是   LogLength({length:3})  ------------',
            LogLength({ length: 3 })
        )
        /*
         * 在泛型约束中使用类型参数
         *
         * */

        //T继承U，这样就保证了U上面不会出现T中不存在的字段
        function copyFields<T extends U, U>(target: T, source: U): T {
            for (let id in source) {
                target[id] = (source as T)[id]
            }
            return target
        }

        let x = { a: 1, b: 2, c: 3, d: 4 }

        console.log(
            '这里是   copyFields(x, { b: 10, d: 20 })  ------------',
            // copyFields(x, { b: 10, d: 20, f: 30 })
            copyFields(x, { b: 10, d: 20 })
        )

        /*
        // eslint-disable-next-line @typescript-eslint/ban-types
        function getProperty(obj: object, key: string) {
            return obj[key]
        }

        let x = { a: 1, b: 2, c: 3, d: 4 }

        getProperty(x, 'a') // okay
        getProperty(x, 'm') // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
*/

        return { zhangSan, liSi }
    },
}
</script>

<style scoped></style>
