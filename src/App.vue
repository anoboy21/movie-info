<template>
  <MovieHeader />
  <NavBar />
</template>

<script>
import MovieHeader from "./components/MovieHeader.vue";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: { MovieHeader, NavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #ccc;
}
</style>
