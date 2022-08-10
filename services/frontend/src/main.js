import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import i18n from "./plugins/i18n";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  VueCookies,
  store,
  render: (h) => h(App),
}).$mount("#app");
