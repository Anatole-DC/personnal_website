import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/frontend",
    name: "frontend",
    component: () => import("../views/FrontendView.vue"),
  },
  {
    path: "/backend",
    name: "backend",
    component: () => import("../views/BackendView.vue"),
  },
  {
    path: "/videogame",
    name: "videogame",
    component: () => import("../views/VideogameView.vue"),
  },
  {
    path: "/iot",
    name: "iot",
    component: () => import("../views/IotView.vue"),
  },
  {
    path: "/uiux",
    name: "uiux",
    component: () => import("../views/UiuxView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
