<template>
    <div>
        <el-button @click="ck">views5</el-button>
        <span v-for="i of data">
            <span>{{ i }}</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
defineOptions({
    name: 'views5'
})
const data = ref(null)
const ck = () => {
    //    获取本地存储
    data.value = window.localStorage
}
</script>

<style scoped></style>