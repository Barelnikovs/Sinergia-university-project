import { createApp } from "vue";
import App from "./App.vue";
import '@/assets/scss/main.scss'
import router from "@/router/router.js";
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount("#app");
