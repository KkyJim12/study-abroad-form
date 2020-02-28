<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="start_date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-combobox
          v-model="start_date"
          multiple
          chips
          small-chips
          label="Start Date"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on"
        ></v-combobox>
      </template>
      <v-date-picker
        v-model="start_date"
        multiple
        no-title
        scrollable
        :allowed-dates="onlySunday()"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="selectStartDate(start_date)"
          >OK</v-btn
        >
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    start_date: [],
    menu: false
  }),
  methods: {
    onlySunday() {},
    selectStartDate(e) {
      this.$refs.menu.save(e);
      this.$emit("selectStartDate", e);
    }
  }
};
</script>
