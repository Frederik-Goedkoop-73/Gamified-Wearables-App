import { getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home_page.vue") },
        { path: "/sign-in", component: () => import("../views/SignIn_page.vue") },

        {
            path: "/dashboard",
            component: () => import("../views/Dashboard_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/health",
            component: () => import("../views/Health_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/quests",
            component: () => import("../views/Quests_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/shop", component: () => import("../views/Shop_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/badges", component: () => import("../views/Badges_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/leaderboard", component: () => import("../views/Leaderboard_page.vue"),
            meta: {
                requiresAuth: true,
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            //alert("Please login before entering this page :D");
            next("/");
        }
    } else {
        next();
    }
}); // Runs before vue router processes routes

export default router;