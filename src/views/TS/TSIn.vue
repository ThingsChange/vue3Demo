<template>
    <div>1{{ a }}3</div>
    <button @click="conSo">输出语句，无返回的函数</button>
    <div>我是枚举类型{{ errorT }}</div>
    <div>{{ vueStudy }}</div>
    <section>
        <div>
            <div class="logo">
                <h1>法医</h1>
            </div>
            <ul class="nav">
                <li><a href="">menu</a></li>
                <li><a href="">menu</a></li>
                <li><a href="">menu</a></li>
                <li><a href="">menu</a></li>
                <li><a href="">menu</a></li>
            </ul>
        </div>
        <div class="abc">1{{ a }}3</div>
        <button @click="conSo">输出语句，无返回的函数</button>
        <div>我是枚举类型{{ errorT }}</div>
        <div>我是wlj分支的提交</div>
    </section>
</template>

<script lang="ts">
// import {getCurrentInstance, onMounted} from 'vue'

export default {
    name: 'TSIn',
    setup(props: any, context: any) {
        /*
let instance = getCurrentInstance();


onMounted(()=>{
  console.log('这里是 root1 的结果-------------', instance)
})
*/

        console.log('这里是 props,context 的结果-------------', props, context)
        let a: number | undefined | null

        function conSo(): void {
            console.log(getInfo('帅哥'))
            console.log('这里是 1234 的结果-------------', 123, arr4)
            console.log(sum(0, ...arr))
        }

        /*  let abc :number =11;
abc = undefined;*/
        //  never类型，是其他类型（包括null  和undefined）的子类型，代表从不会出现的值，
        //  这意味着never类型变量只能有never类型的值赋值
        let b: undefined
        b = undefined
        let c: null
        c = null
        // let d: never;
        //这样有个蛋用，这个地方可以用any来代替
        /*      d = (() => {
    throw  new Error('傻逼设计2啊')
  })();*/
        //数组类型
        let arr: number[] = [1, 2, 3]
        // 数组类型2
        let arr2: Array<number> = [2, 3, 4]
        //数组类型3
        let arr3: any = [1, true, '2', []]
        //  元组类型（tuple） 属于数组的一种
        let arr4: [number, boolean, string] = [1, false, '1']

        //枚举类型
        enum Err {
            'undefined' = -2,
            'as',
            'sd',
        }

        let errorT: Err = Err.sd

        //函数声明法
        function func1(): string {
            return '1'
        }

        //函数表达式
        let func2 = function (): number {
            return 1
        }
        //3.1 ts中定义方法传参
        /*    function  getInfo(name:string,age:number):string{
    return  `${name}年龄${age}`
}*/
        //3.2 可选参数   必须配置在最后边
        //es5中形参和实参可以不一样，但是在typescripte中必须一样，如果不一样，那么就要配置可选参数
        /*    function  getInfo(name:string,age?:number):string{
  return  `${name}年龄${age?age:'保密'}`
}*/

        //3.3 默认参数
        function getInfo(name: string, age = 20): string {
            return `${name}年龄${age}`
        }

        //3.4剩余参数
        // function sum(a:number,b:number,c:number,d:number):number{
        //     return a+b+c+d
        // }
        function sum(a: number, ...b: number[]): number {
            return a + b.reduce((vv, v) => vv + v)
        }

        //3.5函数重载

        function getInfo2(name: string): string
        function getInfo2(age: number): number
        function getInfo2(str: any): any {
            if (typeof str === 'string') return '我是' + str
            else return str
        }

        function getInfo3(name: string): string
        function getInfo3(name: string, age: number): number
        function getInfo3(name: string, age?: any): string | number {
            if (typeof age === 'number')
                return '我是' + name + ',今年' + age + '岁'
            else return '你大爷已经不是当年的大爷了'
        }

        console.log(
            '这里是   getInfo3("你大爷", 30)  ------------',
            getInfo3('你大爷', 30)
        )
        console.log('这里是   getInfo3("asd")  ------------', getInfo3('asd'))

        // 3.6箭头函数

        interface study {
            bookName: string
            pageNo?: number
            readonly version: string
            content: ReadonlyArray<string>
            [propName: string]:
                | string
                | number
                | undefined
                | ReadonlyArray<string>
        }

        let vueStudy: study = {
            bookName: '深入浅出VueJS',
            author: 'Youyx',
            age: '123',
            version: '2.6.13',
            content: ['响应式原理', '编译器', '优化器', '代码生成器'],
        }
        //error
        // vueStudy.content.push('解析器');
        let vueStudyTest: string[] = []
        vueStudyTest.push('1')
        //把整个ReadonlyArray赋值到一个普通数组也是不可以的
        // vueStudyTest = vueStudy.content;
        vueStudyTest = vueStudy.content as string[]
        console.log('这里是 vueStudyTest 的结果-------------', vueStudyTest)
        let readArr: ReadonlyArray<string> = vueStudyTest
        console.log('这里是 readArr 的结果-------------', readArr)
        // readArr.length = 0 ;

        // 额外的属性检查
        interface pictureConfig {
            name?: string
            version?: number
            // [propName:string]:any;
        }

        // eslint-disable-next-line no-unused-vars
        function createPicture(config: pictureConfig): {
            name: string
            version: number
        } {
            let picture = { name: '照片', version: 1 }
            if (config.name) picture.name = config.name
            if (config.version) picture.version = config.version
            return picture
        }

        //多余属性，绕过检查1
        let pic = createPicture({
            name: '漂亮的照片',
            date2: 123456,
        } as pictureConfig)
        console.log('这里是 pic 的结果-------------', pic)
        //绕过检查2 ，通过添加一个字符串索引签名
        // pic= createPicture({name:'漂亮的照片',date2:123456})
        //绕过检查3
        let tempPic = { name: '漂亮的照片', date2: 123456 }
        pic = createPicture(tempPic)

        //函数类型
        interface queryPicture {
            (name: string, version: number): boolean

            (name: string, version: number): void
        }

        let myQueryPic: queryPicture
        myQueryPic = function (picName: string, picVersion: number) {
            if (pic.name === picName && pic.version === picVersion) return true
            return false
        }

        console.log(
            '这里是   myQueryPic("漂亮的照片",2)  ------------',
            myQueryPic('漂亮的照片', 2)
        )

        //类 类型接口

        interface Man {
            name: string
            age: number

            likeDo(things: string): void
        }

        class Male implements Man {
            name: string
            static hornor: string
            private handSome: string
            constructor(public age: number, name: string) {
                this.name = name
                this.handSome = '帅气'
            }

            likeDo(things: string): void {
                console.log('这里是 男人喜欢做的事 的结果-------------', things)
                console.log(
                    '这里是   this.handSome  ------------',
                    this.handSome
                )
                console.log(
                    '这里是 this.age,this.name 的结果-------------',
                    this.age,
                    this.name
                )
            }
        }

        //这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。
        // constructor存在于类的静态部分，所以不在检查的范围内。
        // 所有 你看多了以一个构造函数再有一个work参数完全不受影响

        class Femal implements Man {
            age: number
            name: string
            static work: string

            constructor(name: string, age: number, work: string) {
                this.name = name
                this.age = age
            }

            likeDo(things: string): void {
                console.log(
                    '这里是 女人喜欢做的事情 的结果-------------',
                    things
                )
            }
        }

        // class Femal2 implements Man {
        //     age: number
        //     name: string
        //
        //     likeDo(things: string): void {}
        // }
        var d = 1234
        let zhangsan = new Male(15, '张三')
        let zhangsansWife = new Femal('张三的老婆', 14, 'teacher')
        zhangsan.likeDo('玩游戏')
        zhangsansWife.likeDo('叨叨张三玩游戏')

        // 那么如何约束类的静态部分呢？
        interface AnimalConstructor {
            new (name: string, age: number): AnimalInterface
        }

        interface AnimalInterface {
            eat(): any
        }

        function createAnimal(
            ctor: AnimalConstructor,
            name: string,
            age: number
        ): AnimalInterface {
            return new ctor(name, age)
        }

        class Cat implements AnimalInterface {
            name: string
            age: number

            constructor(name: string, ag: number) {
                this.name = name
                this.age = ag
            }

            eat() {
                console.log('这里是 小猫咪吃 的结果-------------', '小黄鱼')
            }
        }

        let xiaohua = createAnimal(Cat, '小花', 2)
        xiaohua.eat()

        interface Door {
            color: string
        }

        interface Car {
            type: string
            name: string
            carPlay?: boolean
        }

        interface Alarm {
            alert(): void
        }

        class Fangdaomen implements Door, Alarm {
            color: string

            constructor(color: string) {
                this.color = color
            }

            alert(): void {
                console.log('这里是 防盗门 的结果-------------', '有人闯入')
            }
        }

        class Car120 implements Car, Alarm {
            name: string
            type: string
            carPlay?: boolean

            constructor(name: string, type: string, carPlay: boolean) {
                this.name = name
                this.type = type
                this.carPlay = carPlay
            }

            alert(): void {
                console.log(
                    '这里是 120  救护车 的结果-------------',
                    '呜哇呜哇呜哇呜哇'
                )
            }
        }

        let jiuhuche = new Car120('救护车', '应急车辆', false)
        jiuhuche.alert()

        function printCar120(car: Car120): void {
            // => error TS2532: Object is possibly 'undefined'.
            // console.log(`${car.name},${car.carPlay.toString()}`);
            //你确认car.carPlay是不为空的
            console.log(`${car.name},${car.carPlay!.toString()}`)
            if (car.carPlay != null) {
                // => 好的，if条件检查了user.age是非空的。
                console.log(`${car.name},${car.carPlay!.toString()}`)
            }
            //这样可以
            let temp =
                car.carPlay != null ? car.carPlay.toString() : 'age unknown'
            console.log(car.name + ', ' + temp)
            console.log(
                `${car.name},  ${
                    car.carPlay != null ? car.carPlay.toString() : 'age unknown'
                }`
            )
            console.log(
                car.name +
                    ', ' +
                    (car.carPlay != null
                        ? car.carPlay.toString()
                        : 'age unknown')
            )
            //这样不可以的，类型推断不出来，尴尬
            // console.log(car.name + ', ' + car.carPlay != null ? car.carPlay.toString() : 'age unknown';
            console.log('这里是 123 的结果-------------', 123)
        }

        printCar120(jiuhuche)

        let someValue: any = '你大爷还是你大爷'
        // let strLength: number = (<string>someValue).length
        // console.log('这里是   strLength  ------------', strLength)
        let strLength2: number = (someValue as string).length
        console.log('这里是   strLength2  ------------', strLength2)
        let fucd = (a: any) => {
            console.log('这里是 123 的结果-------------', a)
        }
        return {
            //d,
            a,
            b,
            c,
            arr,
            arr2,
            arr3,
            arr4,
            Err,
            errorT,
            func1,
            func2,
            getInfo,
            sum,
            getInfo2,
            getInfo3,
            vueStudy,
            conSo,
        }
    },
}
</script>

<style scoped></style>
