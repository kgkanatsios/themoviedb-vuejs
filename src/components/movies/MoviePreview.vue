<template>
  <div class="movie-preview shadow-md flex w-full">
    <div
      class="h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <img :src="imageChecker(movie.poster_path)" :alt="movie.original_title" />
    </div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col w-full justify-between leading-normal"
    >
      <div class="pb-2">
        <p
          class="text-sm text-gray-600 flex content-center items-center text-yellow-400 hover:text-yellow-600 font-bold"
        >
          <font-awesome-icon icon="star"></font-awesome-icon>
          <span class="ml-1 text-black"
            >{{ movie.vote_average }} ({{ movie.vote_count }})</span
          >
        </p>
        <div class="text-gray-900 font-bold text-base mb-2">
          <router-link
            :to="{ name: 'Movie', params: { id: movie.id } }"
            class="hover:text-teal-400 text-teal-500"
            >{{ movie.title }}
            <span v-if="movie.title != movie.original_title" class="text-xs"
              >({{ movie.original_title }})</span
            ></router-link
          >
        </div>
        <p class="text-gray-700 text-sm">
          {{ movie.overview | charactersLimiter(300) }}
        </p>
      </div>
      <div class="flex items-center pt-2 border-t border-gray-400">
        <div class="text-sm">
          <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
          <span class="ml-1 text-black">{{ movie.release_date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageChecker } from "@/mixins";
export default {
  name: "MoviePreview",
  props: ["movie"],
  mixins: [imageChecker]
};
</script>

<style></style>
