<template>
  <v-select prepend-icon="mdi-bed-empty" :items="items" label="Domitory (Beds)"></v-select>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>
