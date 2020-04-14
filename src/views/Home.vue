<template>
  <div class="home">
    <div class="grid gap-6 grid-cols-2">
      <movie-preview
        v-for="(movie, index) in trending"
        v-bind:key="index"
        v-bind:movie="movie"
      ></movie-preview>
    </div>
    <movie-preview v-if="!moviesLoading" :movie="latestMovie"></movie-preview>
    <div v-else class="text-center my-6">
      <div
        class="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 hover:border-teal-500 rounded text-2xl inline-block"
      >
        <font-awesome-icon icon="spinner" class="fa-spin"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviePreview from "@/components/movies/MoviePreview.vue";

export default {
  name: "Home",
  computed: {
    ...mapGetters([
      "languageCurrent",
      "trending",
      "latestMovie",
      "moviesLoading"
    ])
  },
  methods: {
    ...mapActions({
      fetchLatestMovie: "fetchLatestMovie",
      fetchTrending: "fetchTrending"
    })
  },
  watch: {
    languageCurrent: function() {
      this.fetchTrending();
      this.fetchLatestMovie();
    }
  },
  created() {
    this.fetchTrending();
    this.fetchLatestMovie();
  },
  components: {
    MoviePreview
  }
};
</script>
