<template>
  <div id="TheaterMovies" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        :key="movie.id"
        v-for="(movie, index) in movies"
        :class="['carousel-item', index === 0 ? 'active' : '']"
      >
        <router-link :to="`/${movie.id}`">
          <img :src="movie.image" class="d-block w-100" alt="movie" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ movie.fullTitle }}</h5>
          </div>
        </router-link>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#TheaterMovies"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#TheaterMovies"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "TheaterMovies",
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    const res = await fetch(
      "https://imdb-api.com/en/API/InTheaters/k_ir8hoai5"
    );

    const data = await res.json();

    this.movies = data.items.slice(0, 5);
  },
};
</script>

<style scoped>
img {
  width: 30% !important;
  height: 550px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto;
  transition: all 0.3s;
}

img:hover {
  transform: scale(120%);
}
</style>
