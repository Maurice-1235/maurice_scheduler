<template>
  <div>
    <v-form>
      <h3>Add New {{table_name}}</h3>
      <v-text-field v-for="header in headers" :key="header"
        v-model="formModel.name"
        :label="table_name + ' ' + header"
        required
      ></v-text-field>
      <v-btn color="primary" @click="submitForm">Add</v-btn>
      <v-btn>Back</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    table_name: String,
    headers: Array,
  },
  data() {
    return {
      formModel: {
        name: "",
      },
    };
  },
  methods: {
    submitForm() {
      let formData = new FormData();
      for(let item in this.formModel){
        formData.append(item, this.formModel[item]);
      }
      this.$axios.$post(
        this.table_name + "/create.php",
        formData
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>