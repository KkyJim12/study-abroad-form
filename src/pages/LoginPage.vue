<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-form>
                <v-toolbar color="success" dark flat>
                  <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    label="อีเมลล์"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="พาสเวิร์ด"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn @click="Login()" color="success">ลงชื่อเข้า</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-dialog v-model="dialog" width="500" v-if="error">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          เกิดข้อผิดพลาด
        </v-card-title>

        <v-card-text class="mt-5">
          {{ error }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            รับทราบ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      dialog: false
    };
  },
  methods: {
    Login() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.status == "success") {
            localStorage.token = response.data.token;
            window.location.href = "/";
          } else if (response.data.status == "fail") {
            this.error = response.data.msg;
            this.dialog = true;
          } else {
            this.error = "มีบางอย่่างผิดพลาด";
            this.dialog = true;
          }
        });
    }
  }
};
</script>
