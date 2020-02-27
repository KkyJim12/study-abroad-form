<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>สร้างสไลด์</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-text-field label="ชื่อสไลด์"></v-text-field>
          <v-text-field label="ลิงค์"></v-text-field>
          <v-text-field label="เรียง" type="number"></v-text-field>
          <label>รูป</label>
          <image-upload></image-upload>
          <v-btn class="mt-5" color="success" block>สร้างสไลด์</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
