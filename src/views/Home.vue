<template>
  <div class="home">
    <div
      class="mb-4 pb-1 border-b border-gray-400 border-gray-400 text-2xl font-bold text-teal-900"
    >
      Daily Movie Trends
    </div>
    <carousel
      class="-mx-2 mb-8"
      :autoplay="!0"
      :autoplayTimeout="5000"
      :autoplayHoverPause="!0"
      :paginationPadding="5"
      paginationColor="#cbd5e0"
      paginationActiveColor="#38b2ac"
    >
      <slide v-for="(movie, index) in trending" :key="index" class="px-2">
        <movie-preview :movie="movie"></movie-preview>
      </slide>
    </carousel>
    <div
      v-if="!moviesLoading"
      class="mb-4 pb-1 border-b border-gray-400 border-gray-400 text-2xl font-bold text-teal-900"
    >
      The Most Newly Created Movie
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
import { Carousel, Slide } from "vue-carousel";
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
    MoviePreview,
    Carousel,
    Slide
  }
};
</script>
