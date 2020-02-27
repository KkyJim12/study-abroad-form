<template>
  <v-carousel
    :continuous="false"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="100%"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "primary",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>