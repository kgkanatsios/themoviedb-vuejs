<template>
  <div class="movies">
    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/movies/latest">Latest Movies</router-link>
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/movies/now-playing">Now Playing</router-link>
      </div>
    </div>
    <div class="flex bg-gray-200">
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/movies/popular">Popular Movies</router-link>
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <router-link to="/movies/top-rated">Top Rated</router-link>
      </div>
      <div class="flex-1 text-gray-900 text-center bg-gray px-4 py-2 m-2">
        <router-link to="/movies/upcoming">Upcoming</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies"
};
</script>

<style></style>
