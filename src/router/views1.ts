import Layout from "@/views/Layout/index.vue";
const route = {
    path: "/",
    component: Layout,
    redirect: "/views1/1",
    meta: {
        index: "1",
        title: "Home1",
        hidden: false,
    },
    children: [
        {
            path: "/views1/1",
            name: "views1",
            meta: {
                index: "1-1",
                title: "Home1-1",
                hidden: false,
            },
            component: () => import("@/views/views1/index.vue"),
        },
    ],
};

export default route;
