import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'
import HomeView from "./views/HomeView.vue";
import NotFound from "./views/NotFound.vue";

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
  },
  {
    path: "/:all",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
