import { createApp } from "vue";
import App from "./App.vue";
import '@/assets/scss/main.scss'
import router from "@/router/router.js";
import { createPinia } from 'pinia'
const pinia = createPinia()
import { IMaskComponent } from 'vue-imask'

const app = createApp(App);
app.component('imask-input', IMaskComponent)
app.use(router);
app.use(pinia)
app.mount("#app");
