<template>
  <v-carousel
    :continuous="false"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="100%"
  >
    <v-carousel-item v-for="show in slides">
      <img :src="'http://localhost:3000/api/image/' + show.image" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios.get(process.env.VUE_APP_MAIN_API + "/api/carousel").then(response => {
      console.log(response.data);
      this.slides = response.data.data;
    });
  },
  data() {
    return {
      slides: []
    };
  }
};
</script>
