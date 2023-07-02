import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Header from "@/views/LandingPage/Header.vue";
import RegisterOccurences from "@/views/LandingPage/RegisterOccurences.vue";
import Login from "@/views/Login.vue";
import RegisterAnimal from "@/views/Protetora/RegisterAnimals.vue";
import Register from "@/views/RegisterUsers/Register.vue";
import HomeAssociate from "@/views/Associate/HomeAssociate.vue";
import UpdateAssociate from "@/views/Associate/UpdateAssociate.vue";
import Administrator from "@/views/Administrator/Administrator.vue";
import HomeCaregiver from "@/views/Protetora/HomeCaregiver.vue";
import { Token } from "@/model/Token";
import Modal from "@/views/Modal.vue";
import HeaderVue from "@/views/LandingPage/Header.vue";
import ListOccurrence from "@/views/Protetora/ListOcurrences.vue";
import ProviderView from "@/views/Provider/ProviderView.vue";
import RegisterServiceView from "@/views/Provider/RegisterServiceView.vue";
import UpdateProviderView from "@/views/Provider/UpdateProviderView.vue";
import EditServiceView from "@/views/Provider/UpdateServiceView.vue";

Vue.use(VueRouter);
const loginInstance = new Login();
const tokenLogin: Token = loginInstance.tokenLogin;
const user: string = loginInstance.tokenLogin.token;
const userauth: boolean = loginInstance.tokenLogin.auth;
const routes: Array<RouteConfig> = [
  {
    path: "/update-service",
    name: "update-service",
    component: EditServiceView,
  },
  {
    path: "/update-provider",
    name: "update-provider",
    component: UpdateProviderView,
  },
  {
    path: "/register-provider",
    name: "register-provider",
    component: RegisterServiceView,
  },
  {
    path: "/provider",
    name: "provider",
    component: ProviderView,
  },

  {
    path: "/protetora/:id",
    name: "protetora",
    component: HomeCaregiver,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem("token");

      if (!token) {
        next("/login");
      } else {
        next();
      }
    },
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Header",
    component: Header,
  },
  {
    path: "/register-occurences",
    name: "Register Occurences",
    component: RegisterOccurences,
  },
  {
    path: "/associado/:id",
    name: "Associado",
    component: HomeAssociate,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem("token");

      if (!token) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/associado/update/:id",
    name: "Editar associado",
    component: UpdateAssociate,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem("token");

      if (!token) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/administrador",
    name: "Adminitrador",
    component: Administrator,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "",
    name: "Modal",
    component: Modal,
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
