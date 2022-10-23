<template>
  <main>
    <TheaterMovies />
    <PopularMovies />
    <TopRatingMovies />
  </main>
</template>

<script>
import TheaterMovies from "../components/MainContent/TheaterMovies";
import PopularMovies from "../components/MainContent/PopularMovies";
import TopRatingMovies from "../components/MainContent/TopRatingMovies";

export default {
  name: "HomePage",
  components: { TheaterMovies, PopularMovies, TopRatingMovies },
};
</script>

<style scoped>
main {
  margin: 30px 0;
}
</style>
