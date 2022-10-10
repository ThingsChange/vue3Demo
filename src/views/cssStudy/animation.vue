<template>
    <div class="bc">
        <div class="moon"></div>
    </div>
    <div>{{ nidayeName }}的{{ $t('cssStudy.style') }}</div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
let proxy = getCurrentInstance()

onMounted(() => {
    console.log('这里是 this.nidayeName 的结果-------------', this, proxy.proxy.nidayeName)
})
</script>

<style scoped>
.bc {
    background: #1b1f15;
    height: 16rem;
    padding: 1rem;
}
.moon {
    margin: 50px;
    font-size: 20px;
    width: 5em;
    height: 5em;
    color: lightyellow;
    border-radius: 50%;
    /*background: red;*/
    box-shadow: inset 5em 0 0;
    /**/
    animation: move1 5s linear infinite alternate;
}
@keyframes move1 {
    to {
        box-shadow: inset 0.5em 0 0;
    }
}
</style>
