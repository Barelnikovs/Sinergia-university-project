import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProgramsView from "@/views/ProgramsView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeView},
        {path: '/programs', component: ProgramsView},
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})