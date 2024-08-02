import Layout from "@/views/Layout/index.vue";
const route = {
    path: "/views5",
    component: Layout,
    redirect: "/views5/1",
    meta: {
        index: "5",
        title: "Home5",
        hidden: false,
    },
    children: [
        {
            path: "/views5/1",
            name: "views5",
            meta: {
                index: "4-1",
                title: "Home5-1",
                hidden: false,
            },
            component: () => import("@/views/views5/index.vue"),
        },
    ],
};

export default route;
