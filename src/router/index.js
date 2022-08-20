import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home")
  },
  {
    path: "/pray-time",
    name: "pray-time",
    component: () => import("../views/PrayTimes")
  },
  {
    path: "/muslims-calendar",
    name: "muslims-calendar",
    component: () => import("../views/Calendar")
  },
  {
    path: "/user-settings",
    name: "user-settings",
    component: () => import("../views/Settings")
  },
  {
    path: "/update-passwords",
    name: "update-pasword",
    component: () => import("../views/Settings")
  },
  {
    path: '/search-result/search/:query',
    name: "search-result",
    component: () => import("../views/Search")
  },
  {
     path: '/favorite',
     name: 'favorite',
     component: () => import("../views/Favorite")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
