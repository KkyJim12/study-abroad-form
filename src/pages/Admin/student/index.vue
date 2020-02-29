<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>นักเรียน</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            ข้อมูล
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="studentLists"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn icon :to="'/admin/student/' + item._id">
                <v-icon small>mdi-account</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getStudentLists();
  },
  data() {
    return {
      search: "",
      studentLists: [],
      headers: [
        {
          text: "ชื่อจริง",
          sortable: true,
          value: "firstname"
        },
        {
          text: "นามสกุล",
          sortable: true,
          value: "lastname"
        },
        {
          text: "ชื่อเล่น",
          sortable: true,
          value: "nickname"
        },
        {
          text: "ระยะเวลา",
          sortable: true,
          value: "duration"
        },
        {
          text: "ที่ปรึกษา",
          sortable: true,
          value: "consult"
        },
        { text: "จัดการ", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    getStudentLists() {
      axios
        .get(process.env.VUE_APP_MAIN_API + "/api/student")
        .then(response => {
          this.studentLists = response.data.data;
        });
    }
  }
};
</script>
