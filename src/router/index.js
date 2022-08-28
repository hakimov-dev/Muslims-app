import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "main",
      auth: true
    },
    component: () => import("../views/Home")
  },
  {
    path: "/pray-time",
    name: "pray-time",
    meta: {
      layout: "main",
      auth: true
    },
    component: () => import("../views/PrayTimes")
  },
  {
    path: "/muslims-calendar",
    name: "muslims-calendar",
    meta: {
      layout: "main",
      auth: true
    },
    component: () => import("../views/Calendar")
  },
  {
    path: "/user-settings",
    name: "user-settings",
    meta: {
      layout: "main",
      auth: true
    },
    component: () => import("../views/Settings")
  },
  {
    path: "/auth",
    name: "auth",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/Auth")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/Auth")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (
      localStorage.getItem("user_token") &&
      $cookies.isKey("user_favorite") &&
      $cookies.isKey("user_pass") &&
      $cookies.isKey("user_lastname") &&
      $cookies.isKey("user_username") &&
      $cookies.isKey("user_name") &&
      $cookies.isKey("user_token_expired_day")
    ) {
      return next();
    } else if (to.path == "/") {
      return next("/auth");
    } else {
      return next("/login");
    }
  } else {
    return next();
  }
  return next("/");
});

export default router;
