<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>แก้ไขคอร์ส</h1>
        <v-alert v-if="errors" color="danger">
          {{ errors }}
        </v-alert>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-form @submit="updateCourse()">
            <v-text-field label="ชื่อคอร์ส" v-model="name"></v-text-field>
            <v-text-field
              label="เรียง"
              type="number"
              v-model="sort"
            ></v-text-field>
            <v-btn type="submit" class="mt-5" color="warning" block
              >แก้ไขคอร์ส</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getCourseInfo();
  },
  data() {
    return {
      name: "",
      sort: "",
      errors: null
    };
  },
  methods: {
    getCourseInfo() {
      axios
        .get(
          process.env.VUE_APP_MAIN_API +
            "/api/course/" +
            this.$route.params.id
        )
        .then(response => {
          this.name = response.data.data.name;
          this.sort = response.data.data.sort;
        });
    },
    updateCourse() {
      axios
        .put(
          process.env.VUE_APP_MAIN_API +
            "/api/course/" +
            this.$route.params.id,
          {
            name: this.name,
            link: this.link,
            sort: this.sort,
            image: this.image
          }
        )
        .then(response => {
          if (response.data.status == "success") {
            this.$router.push("/admin/course");
          } else {
            this.errors = "มีบางอย่างผิดพลาด";
          }
        });
    }
  }
};
</script>
