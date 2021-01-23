<template>
  <div>
    <ListObjects :table_name="table_name" v-bind:headers="headers"></ListObjects>
    <AddButton :table_name="table_name"></AddButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table_name:"subject",
      headers: [
        "ID",
        "Name",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>