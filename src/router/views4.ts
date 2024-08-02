import Layout from "@/views/Layout/index.vue";
const route = {
    path: "/views4",
    component: Layout,
    redirect: "/views4/1",
    meta: {
        index: "4",
        title: "Home4",
        hidden: false,
    },
    children: [
        {
            path: "/views4/1",
            name: "views4",
            meta: {
                index: "4-1",
                title: "Home4-1",
                hidden: false,
            },
            component: () => import("@/views/views4/index.vue"),
        },
    ],
};

export default route;
