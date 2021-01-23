<template>
  <div>
    <ListObjects :table_name="table_name" :headers="headers"></ListObjects>
    <AddButton :table_name="table_name"></AddButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table_name:"assignment",
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
};
</script>

<style lang="scss" scoped>
</style>