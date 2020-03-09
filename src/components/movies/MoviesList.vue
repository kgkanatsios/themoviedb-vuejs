<template>
  <div class="movies-list grid gap-6 grid-cols-2">
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
  name: "MoviesList",
  computed: {
    ...mapGetters(["movies", "languageCurrent"])
  },
  methods: {
    ...mapActions({
      fetchMovies: "fetchMovies"
    })
  },
  watch: {
    languageCurrent: function() {
      this.fetchMovies(this.$route.params.listType);
    }
  },
  created() {
    this.fetchMovies(this.$route.params.listType);
  },
  components: {
    MoviePreview
  }
};
</script>

<style></style>
