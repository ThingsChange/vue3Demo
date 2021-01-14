<template>
  <el-container class="layout">
    <el-aside width="200px">
      <me-nu></me-nu>
    </el-aside>
    <el-container class="layout-right">
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import  menu from './menu.vue'
import {defineComponent, PropType} from 'vue'

//class 风格
interface ItemObj {
  title: string;
  content: string;
  show: boolean;
}

interface Student{
  name:string,
  age:number,
  isStudent:boolean,
}


export default defineComponent({
  name: 'Layout',
  props: {
    success: {type: String},
    callback: {
      type: Function as PropType<() => void>
    },
    student: {
      type: Object as PropType<Student>,
      required: true
    }
  },
  data() {
    return {
      menuItems: [{
        title: "css",
        content: "cssDemo",
        show: true
      },
        {
          title: "esLatest",
          content: "esLatest",
          show: true
        },
        {
          title: "about",
          content: "相关",
          show: true
        }
      ],
      active: 0,
    }
  },
  components:{"me-nu": menu},
  // components: { menu },
  computed: {
    menuItemsLen(): number {
      return this.menuItems.length
    }
  },
  methods: {
    changeItem(vo: ItemObj, inx: number): void {
      //如果重复点击一个栏目item 可以关闭和打开当前栏目手风琴内容
      if (inx === this.active) {
        vo.show = !vo.show
      } else {
        vo.show = true
      }
      this.active = inx
    },
  },
})

</script>
<style scoped lang="scss">
.layout{
  display: flex;
  height: 100vh;
  .layout-right{
    display: flex;
    flex-flow: column;
    flex: 1;
    .el-header,.el-footer {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      justify-content: space-between;
    }
    .el-main{
      flex: 1;
    }
  }
  .el-aside{
    height: 100vh;
    overflow: hidden;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    //line-height: 200px;
  }
}
.layer-head {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.layer-content {
  display: flex;
  flex: 1;
  height: calc(100vh - 7rem);

  .menu-left {
    width: 8rem;
    background: yellowgreen;
  }

  .layer-content-right {
    flex: 1;
    background: rgba(#42b983,.1);
  }
}

.layer-foot {
  height: 2rem;
  display: flex;
  justify-content: center;
  font-size: .5rem;
}

</style>
