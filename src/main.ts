import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import i18n from "./lang";
import "@/assets/style/tailwind.config.scss";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
createApp(App).use(i18n).use(createPinia().use(piniaPluginPersistedstate)).use(router).mount('#app')
