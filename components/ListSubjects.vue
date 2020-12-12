<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>