<template>
  <div>Detail for movies with ID: {{ $route.params.id }}</div>
</template>

<script>
export default {
  name: "DetailPage",
  data() {
    return {
      detail: {},
    };
  },
  async created() {
    // const res = await fetch("");
  },
};
</script>
