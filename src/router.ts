import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "./views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/poetry",
    name: "poetry",
    component: () => import("./views/PoetryView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
