<template>
    <div>
        {{ $t('language') }}
        <el-select v-model="value" filterable placeholder="Select" @change="switchLang(value)" class="!w-80">
            <el-option v-for="item in lang" :key="item.locale" :label="item.locale" :value="item.locale" />
        </el-select>
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background"
            layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'views3'
})
const value = ref(localStorage.getItem('lang') || 'zh')
const lang = [
    { locale: 'zh', },
    { locale: 'en', },
]
const store = useStore()
const reload: () => any = inject('reload')
const switchLang = (value: string) => {
    store.changeLanguage(value)
    reload()
}
import type { ComponentSize } from 'element-plus'
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
</script>

<style scoped lang="less"></style>