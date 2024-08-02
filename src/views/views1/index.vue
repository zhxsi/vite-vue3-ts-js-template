<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容" class="!w-52"></el-input>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'views1'
})
const input = ref<string>('')
</script>

<style scoped lang="less"></style>