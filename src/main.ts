import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/js/all";
import "bulma/bulma.sass";
import "@/assets/global.css";
import Toasted from "vue-toasted";

Vue.use(Toasted);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
