<template>
  <div>
    <ListObjects :table_name="$route.params.tablename" :headers="headers"></ListObjects>
    <AddButton :table_name="$route.params.tablename"></AddButton>
  </div>
</template>

<script>
export default {
    computed: {
        headers() {
            return this.$store.state.headers[this.$route.params.tablename];
        }
    },
};
</script>

<style lang="scss" scoped>
</style>