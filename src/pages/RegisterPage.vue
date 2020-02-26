<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <h1>ลงทะเบียน</h1>
          <v-row>
            <v-col cols="4">
              <v-text-field label="Firstname"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Lastname"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Nickname"></v-text-field>
            </v-col>
            <v-col cols="4">
              <birthday-input></birthday-input>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Line"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Phone"></v-text-field>
            </v-col>
            <v-col cols="1">
              <label>Gender</label>
              <v-radio-group>
                <v-radio label="Male"></v-radio>
                <v-radio label="Female"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="2">
              <label>School</label>
              <v-checkbox v-model="checkbox" label="EV Academy"></v-checkbox>
              <v-checkbox v-model="checkbox" label="SMEAG"></v-checkbox>
              <v-checkbox v-model="checkbox" label="I.Breeze"></v-checkbox>
              <v-checkbox v-model="checkbox" label="QQ English"></v-checkbox>
              <v-checkbox v-model="checkbox" label="Beci"></v-checkbox>
              <v-checkbox v-model="checkbox" label="IDEA"></v-checkbox>
              <v-checkbox v-model="checkbox" label="CELA"></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                hide-details
                class="shrink mr-2 mt-0"
              ></v-checkbox>
              <v-text-field label="อื่นๆ" disabled></v-text-field>
            </v-col>
            <v-col cols="2">
              <sunday-input></sunday-input>
            </v-col>
            <v-col cols="2">
              <duration-input></duration-input>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
