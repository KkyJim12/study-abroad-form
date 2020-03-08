<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>คอร์ส</h1>
        <v-btn to="/admin/course/create" color="success">สร้างคอร์ส</v-btn>
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
            :items="courseLists"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn icon :to="'/admin/course/' + item._id + '/edit'">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon @click="deleteCourse(item._id)" small
                  >mdi-delete</v-icon
                >
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
    this.getCourseLists();
  },
  data() {
    return {
      search: "",
      courseLists: [],
      headers: [
        {
          text: "ชื่อ",
          sortable: true,
          value: "name"
        },
        {
          text: "เรียง",
          sortable: true,
          value: "sort"
        },
        { text: "จัดการ", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    getCourseLists() {
      axios
        .get(process.env.VUE_APP_MAIN_API + "/api/course")
        .then(response => {
          this.courseLists = response.data.data;
        });
    },
    deleteCourse(id) {
      if (confirm("ต้องการลบจริงหรือ?")) {
        axios
          .delete(process.env.VUE_APP_MAIN_API + "/api/course/" + id)
          .then(response => {
            if (response.data.status == "success") {
              this.getCourseLists();
            }
          });
      }
    }
  }
};
</script>
