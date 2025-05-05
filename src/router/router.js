import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProgramsView from "@/views/ProgramsView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeView},
        {path: '/programs/:program', component: ProgramsView},
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})