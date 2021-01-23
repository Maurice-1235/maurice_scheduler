<template>
  <div>
    <CreateObject table_name="Subject" v-bind:cols="cols"></CreateObject>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cols: ["name"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>