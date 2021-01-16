<template>
  <div>
    <CreateObject table_name="Assignments" v-bind:cols="cols"></CreateObject>
  </div>
</template>

<script>
import CreateObject from "~/components/CreateObject.vue";
export default {
  components: {
    CreateObject,
  },
  data() {
    return {
      cols: [
        "Subject",
        "Title",
        "Detail",
        "Due date",
        "Score",
        "Done",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>