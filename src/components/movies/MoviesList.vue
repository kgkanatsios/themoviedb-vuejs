<template>
  <div class="movies-list">
    <div class="flex flex-wrap -mx-2">
      <movie-preview
        v-for="(movie, index) in movies"
        v-bind:key="index"
        v-bind:movie="movie"
        class="w-1/2 sm:w-full lg:w-1/2 flex mb-2 px-2"
      ></movie-preview>
    </div>
    <div v-if="!moviesLoading" class="text-center my-6">
      <button
        @click="loadNextPage"
        class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded"
      >
        Load More
      </button>
    </div>
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
  name: "MoviesList",
  computed: {
    ...mapGetters(["movies", "languageCurrent", "moviesPage", "moviesLoading"])
  },
  methods: {
    ...mapActions({
      fetchMovies: "fetchMovies"
    }),
    loadNextPage() {
      this.fetchMovies([this.$route.params.listType, this.moviesPage + 1]);
    }
  },
  watch: {
    languageCurrent: function() {
      this.fetchMovies([this.$route.params.listType]);
    }
  },
  created() {
    this.fetchMovies([this.$route.params.listType]);
  },
  components: {
    MoviePreview
  }
};
</script>

<style></style>
