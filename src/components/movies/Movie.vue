<template>
  <div class="movie max-w-sm w-full lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{
        backgroundImage:
          'url(https://image.tmdb.org/t/p/original' + movie.poster_path + ')'
      }"
      :title="movie.original_title"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          {{ movie.vote_average }}
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ movie.original_title }}
        </div>
        <p class="text-gray-700 text-base">
          {{ movie.overview }}
        </p>
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
          :title="movie.original_title"
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Jonathan Reinink</p>
          <p class="text-gray-600">{{ movie.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"]
};
</script>

<style></style>