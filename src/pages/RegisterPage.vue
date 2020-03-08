<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>ลงทะเบียน</h1>
        <v-alert color="error" v-if="errors">
          <ul>
            <li v-for="error in errors">{{ error.msg }}</li>
          </ul>
        </v-alert>
        <v-alert color="error" v-if="emailExist">
          <ul>
            <li>{{ emailExist }}</li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-account"
                label="Firstname"
                v-model="firstname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-account-box"
                label="Lastname"
                v-model="lastname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-ab-testing"
                label="Nickname"
                v-model="nickname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <birthday-input @selectBirthday="selectBirthday"></birthday-input>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-alpha-l-box-outline"
                label="Line"
                v-model="line"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-phone"
                label="Phone"
                v-model="phone"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-email"
                label="Email"
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-lock"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-col>
            <v-col class="ml-5" cols="2">
              <label>Gender</label>
              <v-radio-group v-model="gender">
                <v-row>
                  <v-col cols="6">
                    <v-radio :value="1" label="Male"></v-radio>
                  </v-col>
                  <v-col cols="6">
                    <v-radio :value="2" label="Female"></v-radio>
                  </v-col>
                </v-row>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="6">
              <label>School</label>
              <v-checkbox
                v-for="show in schoolLists"
                v-model="school"
                :value="show.name"
                :label="show.name"
              ></v-checkbox>
              <v-row>
                <v-col cols="1">
                  <v-checkbox v-model="schoolOther" hide-details></v-checkbox>
                </v-col>
                <v-col cols="10">
                  <v-text-field
                    v-model="checkboxOther"
                    label="อื่นๆ"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <label>Course</label>
              <v-checkbox
                v-for="show in courseLists"
                v-model="course"
                :value="show.name"
                :label="show.name"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="6">
              <sunday-input @selectStartDate="selectStartDate"></sunday-input>
            </v-col>
            <v-col cols="6">
              <duration-input @selectDuration="selectDuration"></duration-input>
            </v-col>
            <v-col cols="6">
              <domitory-input @selectDomitory="selectDomitory"></domitory-input>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-check"
                label="Consult"
                v-model="consult"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5 mt-5">
          <v-row>
            <v-col cols="12">
              <v-textarea
                prepend-icon="mdi-comment"
                label="Comments"
                v-model="comments"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn @click="Register()" class="mt-5" color="success" block
          >ลงทะเบียน</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getSchoolLists();
    this.getCourseLists();
  },
  data() {
    return {
      schoolLists: [],
      courseLists: [],
      firstname: "",
      lastname: "",
      nickname: "",
      birthday: "",
      line: "",
      phone: "",
      email: "",
      password: "",
      gender: 1,
      school: [],
      course: [],
      start_date: "",
      duration: "",
      domitory: "",
      consult: "",
      comments: "",
      errors: null,
      emailExist: null,
      checkboxOther: "",
      schoolOther: false
    };
  },
  methods: {
    selectBirthday(e) {
      this.birthday = e;
    },
    selectStartDate(e) {
      this.start_date = e;
    },
    selectDuration(e) {
      this.duration = e;
    },
    selectDomitory(e) {
      this.domitory = e;
    },
    getSchoolLists() {
      axios.get(process.env.VUE_APP_MAIN_API + "/api/school").then(response => {
        this.schoolLists = response.data.data;
      });
    },
    getCourseLists() {
      axios.get(process.env.VUE_APP_MAIN_API + "/api/course").then(response => {
        this.courseLists = response.data.data;
      });
    },
    Register() {
      if (this.schoolOther == true) {
        this.school.push(this.checkboxOther);
      }
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/register", {
          firstname: this.firstname,
          lastname: this.lastname,
          nickname: this.nickname,
          birthday: this.birthday,
          line: this.line,
          phone: this.phone,
          email: this.email,
          password: this.password,
          gender: this.gender,
          school: this.school,
          course: this.course,
          start_date: this.start_date,
          duration: this.duration,
          domitory: this.domitory,
          consult: this.consult,
          comments: this.comments
        })
        .then(response => {
          if (response.data.status == "success") {
            localStorage.token = response.data.token;
            window.location.href = "/";
          } else if (response.data.status == "validate fail") {
            this.errors = response.data.data;
            window.scrollTo(0, 0);
          } else if (response.data.status == "Email Exist") {
            this.emailExist = response.data.msg;
            window.scrollTo(0, 0);
          }
        });
    }
  }
};
</script>
