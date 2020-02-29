<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-success="vsuccess"
  ></vue-dropzone>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "app",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: process.env.VUE_APP_MAIN_API + "/api/image-upload",
        thumbnailWidth: 150,
        maxFilesize: 2,
        maxFiles: 1
      }
    };
  },
  methods: {
    vsuccess(file, response) {
      this.$emit("ImageUpload", response.data);
    }
  }
};
</script>
