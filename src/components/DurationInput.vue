<template>
  <v-select :items="items" label="Duration"></v-select>
</template>

<script>
export default {
  data() {
    return {
      items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    };
  }
};
</script>
