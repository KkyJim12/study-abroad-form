<template>
  <div>
    <v-app-bar color="success"  dark>
      <router-link to="/">
        <v-toolbar-title>
          <img class="mango-logo mt-4" src="../assets/img/logo.png" />
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn text>เข้าสู่ระบบ</v-btn>

      <v-btn text>ลงทะเบียน</v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
.mango-logo {
  width: 150px;
}
</style>

<script>
export default {};
</script>