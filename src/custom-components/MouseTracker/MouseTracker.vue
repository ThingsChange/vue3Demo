<template>
    <div>
        <slot :x="x" :y="y"></slot>
    </div>
</template>

<script>
export default {
    name: 'MouseTracker',
}
</script>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const x = ref(0)
const y = ref(0)
const update = e => {
    x.value = e.pageX
    y.value = e.pageY
}
onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<style scoped></style>
