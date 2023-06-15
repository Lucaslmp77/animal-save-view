import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/views/Login.vue";
import RegisterAnimal from "@/views/Protetora/RegisterAnimals.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register-animal",
    name: "RegisterAnimal",
    component: RegisterAnimal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
