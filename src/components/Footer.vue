<template>
  <v-footer dark padless>
    <v-card flat tile class="success text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
      >Mango Learning Express บริการให้คำปรึกษา ช่วยวางแผนการเรียนต่อที่ประเทศอังกฤษ ในระดับมัธยม ปริญญาตรีและปริญญาโท เรียนภาษาระยะสั้น และซัมเมอร์แคมป์</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Mango Learning Express</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  })
};
</script>