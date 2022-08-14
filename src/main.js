import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import '@/assets/styles/index.css'
import '@/assets/styles/style.css'

createApp(App).use(router).use(store).mount("#app");
