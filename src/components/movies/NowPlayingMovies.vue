<template>
  <div class="latest-movies grid gap-6 grid-cols-2">
    <movie
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
    MoviePreview
  }
};
</script>

<style></style>
