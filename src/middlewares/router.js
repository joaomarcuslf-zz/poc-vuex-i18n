import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

import Home from "@/views/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/states",
      name: "states",
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "states" */ "@/views/States")
    },
    {
      path: "*",
      name: "404",
      component: () =>
        import(/* webpackChunkName: "notfound" */ "@/views/NotFound")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    return store
      .dispatch("getAuthToken")
      .then(() => next())
      .catch(() => {
        return next({
          path: "/",
          params: { nextUrl: to.fullPath }
        });
      });
  }

  next();
});

export default router;
