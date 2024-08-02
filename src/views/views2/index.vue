<template>
    <div>
        <el-button type="primary" @click="count++">{{ count }}</el-button>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'views2'
})
const count: Ref<number> = ref(0)
</script>

<style scoped lang="less">
div{
    color: red;
}
</style>