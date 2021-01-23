<template>
  <div>
    <v-form>
      <h3>Add New {{table_name}}</h3>
      <v-text-field
        v-model="formModel.name"
        label="Subject Name"
        required
      ></v-text-field>
      <v-btn color="primary" @click="submitForm">Add</v-btn>
      <v-btn color="">Back</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    table_name: String,
    cols: Array,
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
        "create" + this.table_name + ".php",
        formData
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>