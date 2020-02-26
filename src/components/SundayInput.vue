<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="dates"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-combobox
          v-model="dates"
          multiple
          chips
          small-chips
          label="Start Date"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on"
        ></v-combobox>
      </template>
      <v-date-picker v-model="dates" multiple no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    dates: [],
    menu: false
  })
};
</script>
