import Layout from "@/views/Layout/index.vue";
const route = {
    path: "/views2",
    component: Layout,
    redirect: "/views2/1",
    meta: {
        index: "2",
        title: "Home2",
        hidden: false,
    },
    children: [
        {
            path: "/views2/1",
            name: "views2",
            meta: {
                index: "2-1",
                title: "Home2-1",
                hidden: false,
            },
            component: () => import("@/views/views2/index.vue"),
        },
    ],
};

export default route;
