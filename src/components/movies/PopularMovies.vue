<template>
  <div class="popular-movies">
    <movie
      v-for="(movie, index) in movies"
      v-bind:key="index"
      v-bind:movie="movie"
    ></movie>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Movie from "@/components/movies/Movie.vue";

export default {
  name: "PopularMovies",
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapActions({
      fetchPopular: "fetchPopularMovies"
    })
  },
  created() {
    this.fetchPopular();
  },
  components: {
    Movie
  }
};
</script>

<style></style>
