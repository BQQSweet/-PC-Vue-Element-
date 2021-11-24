import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/find_music",
  },
  {
    path: "/find_music",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FindMusic"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
  linkActiveClass: "active",
});

export default router;
