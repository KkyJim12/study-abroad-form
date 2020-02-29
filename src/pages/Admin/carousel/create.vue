<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>สร้างสไลด์</h1>
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
            <v-text-field label="ชื่อสไลด์" v-model="name"></v-text-field>
            <v-text-field label="ลิงค์" v-model="link"></v-text-field>
            <v-text-field
              label="เรียง"
              type="number"
              v-model="sort"
            ></v-text-field>
            <label>รูป</label>
            <image-upload @ImageUpload="ImageUpload"></image-upload>
            <v-btn @click="addCarousel()" class="mt-5" color="success" block
              >สร้างสไลด์</v-btn
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
      link: "",
      sort: "",
      image: "",
      errors: null
    };
  },
  methods: {
    ImageUpload(e) {
      this.image = e;
    },
    addCarousel() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/carousel", {
          name: this.name,
          link: this.link,
          sort: this.sort,
          image: this.image
        })
        .then(response => {
          if (response.data.status == "success") {
            this.$router.push("/admin/carousel");
          } else {
            this.errors = "มีบางอย่างผิดพลาด";
          }
        });
    }
  }
};
</script>
