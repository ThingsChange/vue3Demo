<template>
  <div>
    <h1>lifecycle - 生命周期</h1>
    <p>{{data.name}}</p>
    <button @click="updateData">Update data</button>
  </div>
</template>

<script>
import {
  reactive,
  // mount
  onBeforeMount,
  onMounted,
  // update
  onBeforeUpdate,
  onUpdated,
  // unmount
  onBeforeUnmount,
  onUnmounted,
  // 新增的钩子函数
  onRenderTracked,
  onRenderTriggered,
} from "vue";

export default {
  name: "Lifecycle",
  setup() {
    onBeforeMount(() => {
      debugger; // eslint-disable-line
    });
    onMounted(() => {
      debugger; // eslint-disable-line
    });
    onBeforeUpdate(() => {
      debugger; // eslint-disable-line
    });
    onUpdated(() => {
      debugger; // eslint-disable-line
    });
    onBeforeUnmount(() => {
      debugger; // eslint-disable-line
    });
    onUnmounted(() => {
      debugger; // eslint-disable-line
    });
    onRenderTracked((e) => { // eslint-disable-line
      debugger; // eslint-disable-line
    });
    onRenderTriggered((e) => { // eslint-disable-line
      debugger; // eslint-disable-line
    });

    const data = reactive({ name: "haihong" });
    const updateData = () => {
      data.name = "chen haiong" + new Date().toLocaleTimeString();
    };
    return { data, updateData };
  },
};
</script>
