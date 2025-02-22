import { createRouter, createWebHistory } from "vue-router";
import Health from "../components/Health.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home_page.vue")},
        { path: "/dashboard", component: () => import("../views/Dashboard_page.vue")},
        { path: "/sign-in", component: () => import("../views/SignIn_page.vue")},

        { path: "/health", component: () => import("../views/Health_page.vue")},
        { path: "/quests", component: () => import("../views/Quests_page.vue")},
        { path: "/shop", component: () => import("../views/Shop_page.vue")},
        { path: "/badges", component: () => import("../views/Badges_page.vue")},
        { path: "/leaderboard", component: () => import("../views/Leaderboard_page.vue")},
    ]
});

export default router;