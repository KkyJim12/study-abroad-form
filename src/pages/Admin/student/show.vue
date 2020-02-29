<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-5">
          <h1>ข้อมูลนักเรียน</h1>
          <v-divider></v-divider>
          <p class="mt-5">
            ชื่อ: {{ firstname }} {{ lastname }} ({{ nickname }})
          </p>
          <p>
            เพศ: <span v-if="gender == 1">ชาย</span>
            <span v-else>หญิง</span>
          </p>
          <p>วันเกิด:{{ birthday }}</p>
          <p>อีเมลล์: {{ email }}</p>
          <p>ไลน์: {{ line }}</p>
          <p>เบอร์โทร: {{ phone }}</p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <h1>เพิ่มเติม</h1>
          <v-divider></v-divider>
          <p class="mt-5">คอมเมนท์</p>
          <p>{{ comments }}</p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <h1>รายละเอียดการเรียน</h1>
          <v-divider></v-divider>
          <p class="mt-5">
            โรงเรียน:
            <ul>
              <li v-for="show in school">{{ show }}</li>
            </ul>
          </p>
          <p>
            คอร์ส:
            <ul>
              <li v-for="show in course">{{ show }}</li>
            </ul>
          </p>
          <p>
            วันเริ่มไป:
            <ul>
              <li v-for="show in start_date">{{ show }}</li>
            </ul>
          </p>
          <p>ระยะเวลา: {{ duration }}</p>
          <p>หอพัก: {{ domitory }} เตียง</p>
          <p>ที่ปรึกษา: {{ consult }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getStudentInfo();
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      nickname: "",
      birthday: "",
      line: "",
      phone: "",
      email: "",
      gender: "",
      school: [],
      course: [],
      start_date: "",
      duration: "",
      domitory: "",
      consult: "",
      comments: ""
    };
  },
  methods: {
    getStudentInfo() {
      axios
        .get(
          process.env.VUE_APP_MAIN_API + "/api/student/" + this.$route.params.id
        )
        .then(response => {
          this.firstname = response.data.data.firstname;
          this.lastname = response.data.data.lastname;
          this.nickname = response.data.data.nickname;
          this.birthday = response.data.data.birthday;
          this.line = response.data.data.line;
          this.phone = response.data.data.phone;
          this.email = response.data.data.email;
          this.gender = response.data.data.gender;
          this.school = response.data.data.school;
          this.course = response.data.data.course;
          this.start_date = response.data.data.start_date;
          this.duration = response.data.data.duration;
          this.domitory = response.data.data.domitory;
          this.consult = response.data.data.consult;
          this.comments = response.data.data.comments;
        });
    }
  }
};
</script>
