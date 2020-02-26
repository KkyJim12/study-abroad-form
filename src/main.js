import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import HomePage from "./pages/HomePage.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.component("navbar", Navbar);
Vue.component("carousel", Carousel);
Vue.component("footerbar", Footer);

const routes = [{ path: "/", component: HomePage }];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
