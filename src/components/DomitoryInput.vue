<template>
  <v-select
    prepend-icon="mdi-bed-empty"
    :items="items"
    label="Domitory (Beds)"
    @change="Select()"
    v-model="domitory"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      domitory: "",
      items: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    Select() {
      this.$emit("selectDomitory", this.domitory);
    }
  }
};
</script>
