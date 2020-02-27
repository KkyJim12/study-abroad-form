import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import BirthdayInput from "./components/BirthdayInput.vue";
import SundayInput from "./components/SundayInput.vue";
import DurationInput from "./components/DurationInput.vue";
import DomitoryInput from "./components/DomitoryInput.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.component("navbar", Navbar);
Vue.component("carousel", Carousel);
Vue.component("footerbar", Footer);
Vue.component("birthday-input", BirthdayInput);
Vue.component("sunday-input", SundayInput);
Vue.component("duration-input", DurationInput);
Vue.component("domitory-input", DomitoryInput);

const routes = [
  { path: "/", component: HomePage },
  { path: "/register", component: RegisterPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
