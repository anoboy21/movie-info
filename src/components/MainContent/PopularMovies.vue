<template>
  <h3>Popular movies</h3>
  <div id="popularMovies" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        :key="movie.id"
        v-for="(movie, index) in movies"
        :class="['carousel-item', index === 0 ? 'active' : '']"
      >
        <div class="three-movies">
          <div>
            <img :src="movie[0].image" class="d-block w-100" alt="movie" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.fullTitle }}</h5>
            </div>
          </div>
          <div>
            <img :src="movie[1].image" class="d-block w-100" alt="movie" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.fullTitle }}</h5>
            </div>
          </div>
          <div>
            <img :src="movie[2].image" class="d-block w-100" alt="movie" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.fullTitle }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#popularMovies"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#popularMovies"
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
  name: "PopularMovies",
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    const res = await fetch(
      "https://imdb-api.com/en/API/MostPopularMovies/k_ir8hoai5"
    );

    const data = await res.json();

    const initialMovies = data.items.slice(0, 30);
    const chunkSize = 3;
    const finalMovies = [];
    for (let i = 0; i < initialMovies.length; i += chunkSize) {
      const chunk = initialMovies.slice(i, i + chunkSize);
      finalMovies.push(chunk);
    }
    this.movies = finalMovies;
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
}

img {
  width: 33%;
  height: 550px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto;
  transition: all 0.3s;
}

img:hover {
  transform: scale(120%);
}

.three-movies {
  justify-content: center;
  display: flex;
  gap: 20px;
}
</style>
