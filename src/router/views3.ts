import Layout from "@/views/Layout/index.vue";
const route = {
    path: "/views3",
    component: Layout,
    redirect: "/views3/1",
    meta: {
        index: "3",
        title: "Home3",
        hidden: false,
    },
    children: [
        {
            path: "/views3/1",
            name: "views3",
            meta: {
                index: "3-1",
                title: "Home3-1",
                hidden: false,
            },
            component: () => import("@/views/views3/index.vue"),
        },
    ],
};

export default route;
