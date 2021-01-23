<template>
  <div>
    <template>
      <v-simple-table v-if="loaded">
        <template v-slot:default>
          <thead>
            <tr>
              <th
                class="text-left"
                v-for="(header, index) in headers"
                :key="index"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.id">
              <td>{{ record.id }}</td>
              <td>{{ record.name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    table_name: String,
  },
  data() {
    return {
      loaded: false,
      records: null,
    };
  },
  mounted() {
    this.fetchSomething();
  },
  methods: {
    async fetchSomething() {
      const records = await this.$axios.$get(
        this.table_name + "/"
      );
      this.records = records;
      this.loaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>