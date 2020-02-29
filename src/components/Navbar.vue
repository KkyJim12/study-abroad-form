<template>
  <div>
    <v-app-bar color="success" dark>
      <router-link to="/">
        <v-toolbar-title>
          <img class="mango-logo mt-4" src="../assets/img/logo.png" />
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <div v-if="token && admin">
        <v-btn class="mr-2" text>{{ firstname }} {{ lastname }}</v-btn>
        <v-btn to="/admin/dashboard" class="mr-2" color="primary">แอดมิน</v-btn>
        <v-btn @click="Logout()" class="mr-2" color="error">ลงชื่อออก</v-btn>
      </div>

      <div v-else-if="token">
        <v-btn class="mr-2" text>{{ firstname }} {{ lastname }}</v-btn>
        <v-btn @click="Logout()" class="mr-2" color="error">ลงชื่อออก</v-btn>
      </div>

      <div v-else>
        <v-btn text to="/login">เข้าสู่ระบบ</v-btn>

        <v-btn text to="/register">ลงทะเบียน</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.mango-logo {
  width: 150px;
}
</style>

<script>
import axios from "axios";
export default {
  mounted() {
    if (this.token) {
      this.getUserInfo();
    }
  },
  data() {
    return {
      token: localStorage.token,
      firstname: "",
      lastname: "",
      admin: ""
    };
  },
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
        });
    },
    Logout() {
      localStorage.clear();
      window.location.href = "/";
    }
  }
};
</script>
