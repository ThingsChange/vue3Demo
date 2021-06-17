<template>
      <div class="liti-button">
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
  </div>
  <button @click="refresh">点我</button>
  <div>{{$route}}</div>
</template>


<script>
// import cssObj from '@/assets/css/var-dark.scss'
//
// console.log('这里是 cssObj 的结果-------------', cssObj)
export default {
  methods:{
    refresh(){
      window.location.reload();
    }
  }
}
</script>
<style lang="scss" scoped>
//@import "../../../src/assets/css/common.scss";

.test{
  @include center;
  height: 1rem;
  width: 3rem;
  color: $abc;
}
.zhuti-color{
  width: var(--width);
  color:var(--mc6Color)
}
.vue3-theme{
  color: var(--color,yellowGreen);
  //color: var(--mc-color,yellowGreen);
}
</style>
