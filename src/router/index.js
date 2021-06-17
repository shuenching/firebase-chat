import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      component: () => import("../views/login")
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

export default router;
