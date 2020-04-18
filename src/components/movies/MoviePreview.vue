<template>
  <div class="movie-preview sm:flex-no-wrap flex flex-wrap">
    <clazy-load
      :src="imageChecker(movie.poster_path)"
      loadedClass="flex w-full border border-gray-400 sm:border-r-0 sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
      loadingClass="flex w-full sm:w-1/3 rounded-t sm:rounded-t-none sm:rounded-l text-center overflow-hidden"
    >
      <img
        class="self-center m-auto"
        :src="imageChecker(movie.poster_path)"
        :alt="movie.original_title"
      />
      <div slot="placeholder" class="flex justify-center h-full w-full">
        <font-awesome-icon
          icon="spinner"
          class="fa-spin text-teal-500 m-auto text-2xl"
        ></font-awesome-icon>
      </div>
    </clazy-load>
    <div
      class="w-full sm:w-2/3 border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"
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
