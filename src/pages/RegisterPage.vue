<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>ลงทะเบียน</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-account"
                label="Firstname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-account-box"
                label="Lastname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-ab-testing"
                label="Nickname"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <birthday-input></birthday-input>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-alpha-l-box-outline"
                label="Line"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                prepend-icon="mdi-phone"
                label="Phone"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <label>Gender</label>
              <v-radio-group>
                <v-radio label="Male"></v-radio>
                <v-radio label="Female"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="6">
              <label>School</label>
              <v-checkbox v-model="checkbox" label="EV Academy"></v-checkbox>
              <v-checkbox v-model="checkbox" label="SMEAG"></v-checkbox>
              <v-checkbox v-model="checkbox" label="I.Breeze"></v-checkbox>
              <v-checkbox v-model="checkbox" label="QQ English"></v-checkbox>
              <v-checkbox v-model="checkbox" label="Beci"></v-checkbox>
              <v-checkbox v-model="checkbox" label="IDEA"></v-checkbox>
              <v-checkbox v-model="checkbox" label="CELA"></v-checkbox>
              <v-row>
                <v-col cols="1">
                  <v-checkbox v-model="enabled" hide-details></v-checkbox>
                </v-col>
                <v-col cols="10">
                  <v-text-field
                    :disabled="!enabled"
                    label="อื่นๆ"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <label>Course</label>
              <v-checkbox v-model="checkbox" label="ESL"></v-checkbox>
              <v-checkbox v-model="checkbox" label="SPARTA"></v-checkbox>
              <v-checkbox v-model="checkbox" label="IELTS"></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                label="POWER SPEAKING"
              ></v-checkbox>
              <v-checkbox v-model="checkbox" label="TOEIC"></v-checkbox>
              <v-checkbox v-model="checkbox" label="BUSSINESS"></v-checkbox>
              <v-checkbox v-model="checkbox" label="CELA"></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="6">
              <sunday-input></sunday-input>
            </v-col>
            <v-col cols="6">
              <duration-input></duration-input>
            </v-col>
            <v-col cols="6">
              <domitory-input></domitory-input>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-check"
                label="Consult"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5 mt-5">
          <v-row>
            <v-col cols="12">
              <v-textarea
                prepend-icon="mdi-comment"
                label="Comments"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn class="mt-5" color="success" block>ลงทะเบียน</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      enabled: false
    };
  }
};
</script>
