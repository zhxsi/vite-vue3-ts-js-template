<template>
    <div>
        <el-switch v-model="val" @change="switchChange"></el-switch>
        <div>
            <el-table :data="list" :max-height="availHeight > 300 ? availHeight : 300" class="outline outline-1 w-full">
                <template v-for="(item, index) in columns">
                    <template v-if="item.prop !== 'countryList'" :key="index">
                        <el-table-column fixed="right" min-width="120" align="center" :label="$t(item.label)">
                            <template #default="{ row }">
                                <span>{{ row.label }}</span>
                            </template>
                        </el-table-column>
                    </template>
                    <template v-else>
                        <el-table-column fixed="right" min-width="120" align="center" :label="$t(item.label)">
                            <template #default="{ row }">
                                <span>{{ row.countryList.map((item) => item.zh) }}</span>
                            </template>
                        </el-table-column>
                    </template>
                </template>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'views4'
})
import { getCode } from "@/api/countries"
const val: Ref<boolean> = ref(true)
const switchChange = () => {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            useToggle(useDark())()
        })
    } else {
        useToggle(useDark())()
    }
}
const list = ref([])
const columns = ref([
    { prop: 'label', label: 'label' },
    { prop: 'countryList', label: 'countryList' },
    { prop: 'label', label: 'Age' },
]);
const availHeight = ref(875)
onMounted(() => {
    getCode().then((res) => {
        if (res.data.code === 200) {
            list.value = res.data.data
        }
    })
    availHeight.value = window.innerHeight - 64
})
</script>

<style scoped></style>