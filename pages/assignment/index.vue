<template>
  <div>
    <ListObjects table_name="assignment" v-bind:headers="headers"></ListObjects>
  </div>
</template>

<script>
import ListObjects from "~/components/ListObjects.vue";
export default {
  data() {
    return {
      headers: [
        "ID",
        "Subject",
        "Title",
        "Detail",
        "Due date",
        "Score",
        "Done",
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