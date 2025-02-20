import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue")},
        { path: "/dashboard", component: () => import("../views/Dashboard.vue")},
        { path: "/sign-in", component: () => import("../views/SignIn.vue")}
        /* ... */
    ]
});

export default router;