<template>
  <div class="popular-movies">
    <movie-preview
      v-for="(movie, index) in movies"
      v-bind:key="index"
      v-bind:movie="movie"
    ></movie-preview>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviePreview from "@/components/movies/MoviePreview.vue";

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
    MoviePreview
  }
};
</script>

<style></style>
