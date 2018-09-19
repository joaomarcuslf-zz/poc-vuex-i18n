import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import i18n from "@/middlewares/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
