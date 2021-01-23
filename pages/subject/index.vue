<template>
  <div>
    <ListObjects table_name="subject" v-bind:headers="headers"></ListObjects>
  </div>
</template>

<script>
import ListObjects from "~/components/ListObjects.vue";
export default {
  data() {
    return {
      headers: [
        "ID",
        "Name",
      ],
    };
  },
  components: {
    ListObjects,
  },
};
</script>

<style lang="scss" scoped>
</style>