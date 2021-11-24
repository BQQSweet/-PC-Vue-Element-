import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import store from "./store";
import "./utils/animate.min.css";
import VueCookies from "vue-cookie";
import request from "./utils/ajax";
import "./style/iconfont.css";
import router from "./router";
Vue.prototype.rq = request;
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.config.productionTip = false;
const vue = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
export default vue;
