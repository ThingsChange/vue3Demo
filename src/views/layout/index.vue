<template>
  <el-container class="layout">
    <el-aside width="200px">
      <a-ne></a-ne>
    </el-aside>
    <el-container class="layout-right">
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
<!--  <div class="layer-head">

  </div>
  <div class="layer-content">
    <div class="menu-left">
      <div class="accordion">
        <div v-for="(vo,inx) in menuItems" :key="inx">
          &lt;!&ndash; 手风琴标题 &ndash;&gt;
          <div class="item" @click="changeItem(vo,inx)">
            {{ vo.title }}
          </div>
          &lt;!&ndash; 手风琴内容 &ndash;&gt;
          <div class="content" v-show="active==inx&&vo.show">
            {{ vo.content }}
            &lt;!&ndash; 可以自定义内容结构 &ndash;&gt;
            <div v-if="inx===0">
              我是自定义内容1
            </div>
            <div v-if="inx===1">
              我是自定义内容2
            </div>
            <div v-if="inx===2">
              我是自定义内容3
            </div>
          </div>
        </div>
      </div>
      <p>
        <router-link to="/qy/cssStudy">/qy/cssStudy</router-link>
        <br/>
      </p>
      <p>
        <router-link to="/qy/communicate">/qy/communicate</router-link>
        <br/>
      </p>
      <p>
        <router-link to="/qy/vueNext">/qy/vueNext</router-link>
        <br/>
      </p>
    </div>
    <div class="layer-content-right">
      <router-view></router-view>
    </div>
  </div>
  <footer class="layer-foot">这算个什么鬼</footer>-->
  <!--  <div class="layout" :class="{ 'layout-hide-text': expandLeft }">
      <Row type="flex" class="row-height">
        <Col :span="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left">
            <img class="programImg" src="@/assets/images/zhongzhi.jpg" alt="" />
            <p>各种DEMO</p>
          </div>
          <MenuSelf :menu-show="menuIsShow" />
        </Col>
        <Col :span="spanRight" class="right-wrap">
          <div class="layout-header">
            <Button type="text" @click="toggleClick" span="2">
              <Icon type="navicon" size="32"></Icon>
            </Button>
            <div class="layout-quit" @click="quitLogin">
              退出登录吧
            </div>
          </div>
          <div class="content-wrap">
            <router-view> </router-view>
          </div>
          <div class="layout-copy">
            2018 &copy;QY-NeedStudyHard
          </div>
        </Col>
      </Row>
    </div>-->
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
  // components:{"me-nu": menu},
  components: { 'a-ne':menu },
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
