<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/admin/dashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/carousel">
          <v-list-item-action>
            <v-icon>mdi-view-carousel</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Carousel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/student">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Student</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/school">
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>School</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/admin/course">
          <v-list-item-action>
            <v-icon>mdi-book-open</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Course</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue" app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Mango Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="token">
        <v-btn cpo class="mr-2" text>{{ firstname }} {{ lastname }}</v-btn>
        <v-btn to="/" v-if="admin" class="mr-2" color="success">หน้าหลัก</v-btn>
        <v-btn @click="Logout()" class="mr-2" color="error">ลงชื่อออก</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="blue" app dark>
      <span>Mango Learning Express &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    if (this.token) {
      this.getUserInfo();
    } else {
      window.location.href = "/";
    }
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    token: localStorage.token,
    firstname: "",
    lastname: "",
    admin: null
  }),
  methods: {
    getUserInfo() {
      axios
        .get(process.env.VUE_APP_MAIN_API + "/api/getUserInfo", {
          headers: {
            authorization: this.token
          }
        })
        .then(response => {
          this.firstname = response.data.data.firstname;
          this.lastname = response.data.data.lastname;
          this.admin = response.data.data.admin;

          if (this.admin !== true) {
            window.location.href = "/";
          }
        });
    },
    Logout() {
      localStorage.clear();
      window.location.href = "/";
    }
  }
};
</script>
