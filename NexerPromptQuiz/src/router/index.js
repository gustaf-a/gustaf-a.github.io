import { createRouter, createWebHistory } from "vue-router"

import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizesView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView,
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router