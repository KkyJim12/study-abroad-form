import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import Master from "./layouts/Master.vue";
import Admin from "./layouts/Admin.vue";
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import BirthdayInput from "./components/BirthdayInput.vue";
import SundayInput from "./components/SundayInput.vue";
import DurationInput from "./components/DurationInput.vue";
import DomitoryInput from "./components/DomitoryInput.vue";
import ImageUpload from "./components/ImageUpload.vue";
import DashboardAdmin from "./pages/Admin/Dashboard.vue";
import CarouselAdmin from "./pages/Admin/carousel/index.vue";
import CarouselCreateAdmin from "./pages/Admin/carousel/create.vue";
import CarouselEditAdmin from "./pages/Admin/carousel/edit.vue";
import StudentAdmin from "./pages/Admin/student/index.vue";
import StudentShowAdmin from "./pages/Admin/student/show.vue";
import SchoolAdmin from "./pages/Admin/school/index.vue";
import SchoolCreateAdmin from "./pages/Admin/school/create.vue";
import SchoolEditAdmin from "./pages/Admin/school/edit.vue";
import CourseAdmin from "./pages/Admin/course/index.vue";
import CourseCreateAdmin from "./pages/Admin/course/create.vue";
import CourseEditAdmin from "./pages/Admin/course/edit.vue";

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.component("navbar", Navbar);
Vue.component("carousel", Carousel);
Vue.component("footerbar", Footer);
Vue.component("birthday-input", BirthdayInput);
Vue.component("sunday-input", SundayInput);
Vue.component("duration-input", DurationInput);
Vue.component("domitory-input", DomitoryInput);
Vue.component("image-upload", ImageUpload);

const routes = [
  {
    path: "/",
    component: Master,
    children: [
      { path: "", component: HomePage },
      { path: "register", component: RegisterPage },
      { path: "login", component: LoginPage }
    ]
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "dashboard", component: DashboardAdmin },
      { path: "carousel", component: CarouselAdmin },
      { path: "carousel/create", component: CarouselCreateAdmin },
      { path: "carousel/:id/edit", component: CarouselEditAdmin },
      { path: "student", component: StudentAdmin },
      { path: "student/:id", component: StudentShowAdmin },
      { path: "school", component: SchoolAdmin },
      { path: "school/create", component: SchoolCreateAdmin },
      { path: "school/:id/edit", component: SchoolEditAdmin },
      { path: "course", component: CourseAdmin },
      { path: "course/create", component: CourseCreateAdmin },
      { path: "course/:id/edit", component: CourseEditAdmin }
    ]
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
