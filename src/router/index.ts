import { createRouter, createWebHistory } from "vue-router";
import views1 from "./views1";
import views2 from "./views2";
import views3 from "./views3";
import views4 from "./views4";
import views5 from "./views5";
const routes = [views1, views2, views3,views4,views5];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
