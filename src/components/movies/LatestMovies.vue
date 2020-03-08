<template>
  <div class="latest-movies">
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
  name: "LatestMovies",
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapActions({
      fetchLatest: "fetchLatestMovies"
    })
  },
  created() {
    this.fetchLatest();
  },
  components: {
    Movie
  }
};
</script>

<style></style>
