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
  name: "NowPlayingMovies",
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
