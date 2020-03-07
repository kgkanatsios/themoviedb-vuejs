<template>
  <div class="movies">
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
  name: "Movies",
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapActions({
      fetchNowPlaying: "fetchNowPlayingMovies"
    })
  },
  created() {
    this.fetchNowPlaying();
  },
  components: {
    Movie
  }
};
</script>

<style></style>
