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
     path: '/auth',
     name: 'auth',
     meta: {
      layout: 'auth'
     },
     component: () => import("../views/Auth")
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

router.beforeEach((to, from, next) => {
  if(to.meta.auth) {
      if (localStorage.getItem("user_token") && $cookies.isKey('user_favorite') && $cookies.isKey('user_pass') && $cookies.isKey('user_pic') && $cookies.isKey('user_lastname') && $cookies.isKey('user_username') && $cookies.isKey('user_name') && $cookies.isKey('user_city') && $cookies.isKey('user_country') && $cookies.isKey('user_token_expired_day')){
          return next()
      }
      else if(to.path=="/"){
          return next("/auth")
      }
      else {
           return next("/auth")  
      }
  } else {
      return next()
  }
  return next('/')
});

export default router;
