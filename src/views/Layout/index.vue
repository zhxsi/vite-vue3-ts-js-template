<template>
    <div>
        <template v-for="(item, index) in filterRoutes(router.getRoutes())" :key="index">
            <template v-if="item.children.length === 1">
                <template v-for="(item2, index2) in item.children" :key="index2">
                    <template v-if="!item2.children || item2.children.length === 0">
                        <el-button @click="handleRoute(item2)">{{ $t(item2.meta.title) }}</el-button>
                    </template>
                    <template v-else>
                        <el-button-group class="ml-4">
                            <el-button type="primary" v-for="(item2, index2) in item.children" :key="index2"
                                @click="handleRoute(item2)">
                                <template #default>
                                    <span>{{ $t(item2.meta.title) }}</span>
                                </template>
                            </el-button>
                            <el-button type="primary" v-for="(item3, index3) in item2.children" :key="index3"
                                @click="handleRoute(item3)">
                                <template #default>
                                    <span>{{ $t(item3.meta.title) }}</span>
                                </template>
                            </el-button>
                        </el-button-group>
                    </template>
                </template>
            </template>
            <template v-else>
                <el-button-group class="ml-4">
                    <el-button type="primary" v-for="(item2, index2) in item.children" :key="index2"
                        @click="handleRoute(item2)">
                        <template #default>
                            <span>{{ item2.meta.title }}</span>
                        </template>
                    </el-button>
                </el-button-group>
            </template>
        </template>
        <router-view v-slot="{ Component }">
            <keep-alive :include="store.cachedViews">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>
<script setup lang="ts" name="Layout">
import type { RouteRecordRaw } from "vue-router";
const router = useRouter();
const store = useStore();
// const menuList = ref<Array<RouteRecordRaw>>([]);
const filterRoutes = (
    routes: RouteRecordRaw[],
    level: number = 1,
): RouteRecordRaw[] => {
    return routes
        .filter((route) => {
            if (
                route.path !== "/404" &&
                (level > 1 || route.redirect !== undefined)
            ) {
                if (route.meta && route.meta.hidden !== true) {
                    return true;
                }
            }
            return false;
        })
        .map((route) => {
            if (route.children) {
                route.children = filterRoutes(route.children, level + 1);
            }
            return route;
        });
};
// console.log(filterRoutes(router.getRoutes()));

// 路由跳转
const handleRoute = (item: RouteRecordRaw) => {
    store.addCacheRoute(item.name);
    router.push(item.path);
};

</script>