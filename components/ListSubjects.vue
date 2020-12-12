<template>
  <div>
    <template>
      <v-simple-table v-if="loaded">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subject in subjects" :key="subject.id">
              <td>{{ subject.id }}</td>
              <td>{{ subject.name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      headers: ["id", "name"],
      subjects: null,
    };
  },
  mounted() {
    this.fetchSomething();
  },
  methods: {
    async fetchSomething() {
      const subjects = await this.$axios.$get(
        "http://localhost/maurice_scheduler/listSubjects.php"
      );
      this.subjects = subjects;
      this.loaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>