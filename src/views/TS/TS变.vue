<template>
    <h1>突变 逆变 协变 及不可变</h1>
</template>

<script lang="ts">
export default {
    name: '变',
    setup() {
        class Animal {}
        class Cat extends Animal {
            meow() {
                console.log('这里是 cat meow 的结果-------------', 'miao ~')
            }
        }
        class Dog extends Animal {
            wow() {
                console.log('这里是 dog 的结果-------------', '旺旺大礼包')
            }
        }
        class SmallDog extends Dog {
            name = '傻逼泰迪'
        }
        //参数dog  返回Dog
        type testType = (v: Dog) => Dog
        //你这个传入的是一个函数，这个函数呢，期待返回的是Dog
        function exec(v: testType) {
            v(new SmallDog())
        }

        //?     用合适的术语来描述这个奇怪的表现，可以说我们允许一个函数类型中，返回值类型是协变的，而参数类型是逆变的。返回值类型是协变的，
        // ?   意思是 A ≼ B 就意味着 (T → A) ≼ (T → B) 。参数类型是逆变的，意思是 A ≼ B 就意味着 (B → T) ≼ (A → T) （ A 和 B 的位置颠倒过来了）。

        // !   协变  ：子集能赋值给其超集。

        class Jizhui {
            hasSpine(): boolean {
                return true
            }
        }

        class BuRu extends Jizhui {
            canBreastFeed(): boolean {
                return true
            }
        }

        function foo(animal: Jizhui) {
            animal.hasSpine()
        }

        foo(new Jizhui())
        foo(new BuRu())
        //* 协变例子2
        type Xiebian<T> = T[]

        //! 逆变  Contravariant --strictFunctionTypes true |false 无关紧要
        type nibian<T> = (p: T) => void
        let superType: nibian<Jizhui> = x => {
            console.log('这里是 123 的结果-------------', 123)
        }
        let subType: nibian<BuRu> = x => {
            console.log('这里是 123 的结果-------------', 123)
        }
        subType = superType

        //! 双向协变   ---strictFunctionTypes  false
        type AnI<T> = (p: T) => void
        let superType1: AnI<Jizhui> = x => {
            console.log('这里是 x 的结果-------------', x)
        }
        let subType1: AnI<BuRu> = x => {
            console.log('这里是 x 的结果-------------', x)
        }
        subType1 = superType1
        // superType1 = subType1

        //! 不变  --strictFunctionTypes true
        // type Invariant<T> = {a:Jizhui<T>,b:}

        /*strictFunctionTypes
         当开启的时候，ts 会严格比较函数的类型，指的是参数类型，不包含返回值类型。
         等于 true 且 函数类型比函数类型变量具体*/
        // eslint-disable-next-line @typescript-eslint/ban-types
        type callFunc = (arg: number) => boolean | object

        function testFunc1(arg: number | string): boolean {
            return arg > 3
        }

        // ok
        let test1: callFunc = testFunc1

        /*        type childToChild = (v: SmallDog) => SmallDog
        let aaaa: childToChild = v => new SmallDog()
        exec(aaaa)
        type childToParent = (v: SmallDog) => Animal
        let aaaa2: childToParent = v => new Animal()
        exec(aaaa2)

        type parentToChild = (v: Animal) => SmallDog
        let aaaa3: parentToChild = v => new SmallDog()
        exec(aaaa3) //不报错

        type parentToParent = (v: Animal) => Animal
        let aaaa4: parentToParent = v => new Animal()
        exec(aaaa4)*/

        class Singleton {
            private static instance: Singleton
            private constructor() {
                console.log('这里是 123 的结果-------------', 123)
            }
            public static getIntance() {
                if (!Singleton.instance) {
                    Singleton.instance = new Singleton()
                }
                return Singleton.instance
            }
            someMethod() {
                console.log('这里是 123 的结果-------------', 123)
            }
        }
        //! Error TS2673: Constructor of class 'Singleton' is private and only accessible within the class declaration.
        // let someThing = new Singleton();

        const instance = Singleton.getIntance()
        console.log('这里是 instance 的结果-------------', instance.someMethod())

        return {}
    },
}
</script>

<style scoped></style>
