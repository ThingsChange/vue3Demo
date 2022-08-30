<template>
    <input type="text" placeholder="說走咱就走啊" :value="modelValue" @input="emitValue" />
    <input type="text" placeholder="此处是姓" :value="surname" @input="emitSurname" />
    <input type="text" placeholder="此处是名字" :value="name" @input="emitName" />
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    modelModifiers: {
        default: () => ({}),
    },
    surname: String,
    surnameModifiers: {
        default: () => ({}),
    },
    name: String,
    nameModifiers: {
        default: () => ({}),
    },
})
const emit = defineEmits(['update:modelValue', 'update:surname', 'update:name'])
function emitValue(e) {
    let value = e.target.value
    if (props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}
function emitName(e) {
    let value = e.target.value
    if (props.nameModifiers.reverse) {
        value = [...value].reverse().join('')
        console.log('这里是   value  ------------', value)
    }
    emit('update:name', value)
}
function emitSurname(e) {
    let value = e.target.value
    if (props.surnameModifiers.reverse) {
        value = [...value].reverse()
    }
    emit('update:surname', value)
}
console.log('这里是 props.mo 的结果-------------', props.modelModifiers)
</script>
<script>
export default {
    name: 'UserName',
}
</script>
<style scoped></style>
