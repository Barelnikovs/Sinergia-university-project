import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProgramsView from "@/views/ProgramsView.vue";
import RequestView from "@/views/RequestView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeView, name: 'home'},
        {path: '/programs/:program', component: ProgramsView, name: 'programs'},
        {path: '/request', component: RequestView, name: 'request'},
    ],
    scrollBehavior() {
        return { top: 0 }
    },
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})