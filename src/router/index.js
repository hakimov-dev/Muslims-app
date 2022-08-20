import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Home")
  },
  {
    path: "/pray-time",
    name: "pray-time",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/PrayTimes")
  },
  {
    path: "/muslims-calendar",
    name: "muslims-calendar",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Calendar")
  },
  {
    path: "/user-settings",
    name: "user-settings",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Settings")
  },
  {
    path: "/update-passwords",
    name: "update-pasword",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Settings")
  },
  {
    path: '/search-result/search/:query',
    name: "search-result",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Search")
  },
  {
     path: '/favorite',
     name: 'favorite',
     meta: {
      layout: 'main'
     },
     component: () => import("../views/Favorite")
  },
  {
     path: '/:catchAll(.*)',
     redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
