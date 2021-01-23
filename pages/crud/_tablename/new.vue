<template>
  <div>
    <CreateObject
      :table_name="$route.params.tablename"
      :headers="headers"
    ></CreateObject>
  </div>
</template>

<script>
export default {
  computed: {
    headers() {
      return this.$store.state.headers[this.$route.params.tablename];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>