<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>สร้างโรงเรียน</h1>
        <v-alert v-if="errors" color="danger">
          {{ errors }}
        </v-alert>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-form>
            <v-text-field label="ชื่อโรงเรียน" v-model="name"></v-text-field>
            <v-text-field
              label="เรียง"
              type="number"
              v-model="sort"
            ></v-text-field>
            <v-btn @click="addSchool()" class="mt-5" color="success" block
              >สร้างโรงเรียน</v-btn
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
  data() {
    return {
      name: "",
      sort: "",
      errors: null
    };
  },
  methods: {
    addSchool() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/school", {
          name: this.name,
          sort: this.sort,
        })
        .then(response => {
          if (response.data.status == "success") {
            this.$router.push("/admin/school");
          } else {
            this.errors = "มีบางอย่างผิดพลาด";
          }
        });
    }
  }
};
</script>
