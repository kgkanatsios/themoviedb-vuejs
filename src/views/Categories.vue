<template>
  <div class="categories">
    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link
          v-if="movies.length > 0"
          :to="{ name: 'Movie', params: { id: movies[0].id } }"
          >Latest Movies</router-link
        >
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/categories/now_playing">Now Playing</router-link>
      </div>
    </div>
    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/categories/popular">Popular Movies</router-link>
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/categories/top_rated">Top Rated</router-link>
      </div>
      <div class="flex-1 text-gray-900 text-center bg-gray px-4 py-2 m-2">
        <router-link to="/categories/upcoming">Upcoming</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Categories",
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapActions({
      fetchLatestMovie: "fetchLatestMovie"
    })
  },
  created() {
    this.fetchLatestMovie();
  }
};
</script>

<style></style>
