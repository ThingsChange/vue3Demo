<template>
    <!--    <div class="liti-button">
        我是ReactiveDetail的详情页面，测试pretch功能。
      </div>
  <div class="test">
    你大爷还是你大爷
  </div>
  <div class="changshi">
    你大爷还是你大爷
  </div>
  <div class="zhuti-color">
    你大爷还是你大爷123
  </div>
  <div class="vue3-theme">
    你大爷还是你大爷
  </div>-->
    <!--  <div>{{$route}}</div>-->
    <teleport class="scope-class" to="#teleportWrap">
        <div>123456</div>
        <div class="a111">
            {{ location }}
            {{ userGeolocation }}
            {{ abc }}
        </div>
        <p>
            {{ location2 }}
            {{ location3 }}
            {{ geolocation3 }}
        </p>
        <button @click="updateLocation">点我</button>
    </teleport>
</template>

<script>
// import cssObj from '@/assets/css/var-dark.scss'
//
// console.log('这里是 cssObj 的结果-------------', cssObj)
import { inject, toRefs, toRef, getCurrentInstance, onMounted } from 'vue'

export default {
    setup(props, { attrs }) {
        // console.log('这里是   props  ------------', props)
        // console.log('这里是   props,context  ------------', props, context)
        // console.log('这里是   context.attrs  ------------', attrs)
        //这样结构可以响应式
        let pp = toRefs(props)
        //而下面的ES6的方式去不是响应式(至于geolocation为啥是响应式，因为他解构出来的值依旧是一个响应式的对象
        let { location2: location3, geolocation: geolocation3 } = props

        let ab = toRef(props, 'ab')
        let abc = getCurrentInstance().refs['haha']
        // console.log('这里是   abc  ------------', getCurrentInstance(), getCurrentInstance().parent.refs['haha'])
        // console.log('这里是   pp  ------------', pp, location3, ab)
        // console.log('这里是   props.title  ------------', props.title)
        const location = inject('location', '北京市')
        const userGeolocation = inject('geolocation')
        // console.log('这里是 getLocation 的结果-------------', userGeolocation, location)
        const updateLocation = inject('updateLocation')
        // let add = computed(() => {
        //     return context.attrs
        // })
        /*    const  updateLocation = function (){
      userGeolocation .latitude = '110'
      userGeolocation .longitude = '100'
    }*/
        onMounted(() => {
            let root = getCurrentInstance()
            console.log('这里是 this 详情 的结果-------------', root)
        })
        return {
            // abc,
            location,
            userGeolocation,
            updateLocation,
            location3,
            geolocation3,
            add: attrs,
        }
    },
    beforeMount() {
        // console.log('这里是  的结果-------------', '你这是恶意返乡')
    },
    mounted() {
        // console.log('这里是 reactiveDetail mounted 的结果----123---------', 'reactiveDetail', getCurrentInstance())
    },
    methods: {
        refresh() {
            window.location.reload()
        },
    },
}
</script>
<style lang="scss" scoped>
//@import "../../../src/assets/css/common.scss";

.test {
    @include center;
    height: 1rem;
    width: 3rem;
    color: $abc;
}
.zhuti-color {
    width: var(--width);
    color: var(--mc6Color);
}
.vue3-theme {
    color: var(--color, yellowGreen);
    //color: var(--mc-color,yellowGreen);
}
</style>
