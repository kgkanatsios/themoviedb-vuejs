<template>
  <div class="movie">
    <div v-if="!movieLoading">
      <div class="text-right my-6">
        <a
          v-if="movie.imdb_id !== null"
          target="_blank"
          :href="movie.imdb_id | imdbLink"
          class="hover:text-teal-400 text-teal-500 font-bold py-2 px-4 hover:border-teal-500 inline-block align-middle"
        >
          <font-awesome-icon icon="link" class="mr-1"></font-awesome-icon>
          Show on IMDB
        </a>
        <button
          @click="$router.go(-1)"
          class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded inline-block align-middle"
        >
          Back
        </button>
      </div>
      <div class="flex align-middle h-full mb-4">
        <div class="sm:w-1/4 sm:mr-4 w-full">
          <img
            v-if="movie.poster_path !== null"
            :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
            :alt="movie.original_title"
            class="mx-auto"
          />
          <img
            v-else
            src="../assets/logo.png"
            :alt="movie.original_title"
            class="mx-auto"
          />
        </div>
        <div class="sm:w-3/4 w-full items-center">
          <div class="mb-1 text-2xl font-bold text-teal-900">
            {{ movie.title }}
          </div>
          <div class="mb-1">{{ movie.tagline }}</div>
          <div class="w-full my-1 align-middle">
            {{ movie.overview }}
          </div>
          <div
            v-if="movie.genres.length > 0"
            class="w-full my-2 align-middle text-sm"
          >
            <span
              class="mr-3"
              v-for="(genre, index) in movie.genres"
              :key="index"
            >
              <font-awesome-icon
                icon="tag"
                class="mr-1 text-teal-900"
              ></font-awesome-icon>
              {{ genre.name }}
            </span>
          </div>
          <div
            class="text-sm flex content-center items-center text-gray-800 -mx-2"
          >
            <div class="flex-1 text-center align-middle m-2">
              <font-awesome-icon
                icon="star"
                class="mr-1 text-yellow-400 hover:text-yellow-600"
              ></font-awesome-icon>
              <span class="text-black font-bold"
                >{{ movie.vote_average }} ({{ movie.vote_count }})</span
              >
            </div>
            <div
              v-if="movie.release_date !== null && movie.release_date !== ''"
              class="flex-1 text-center align-middle m-2"
            >
              <font-awesome-icon
                icon="calendar-alt"
                class="mr-1"
              ></font-awesome-icon>
              <span class="text-black font-bold">{{ movie.release_date }}</span>
            </div>
            <div class="flex-1 text-center align-middle m-2">
              Runtime:
              <span class="text-black font-bold">{{ movie.runtime }} min</span>
            </div>
          </div>
          <div
            class="text-sm flex content-center items-center text-gray-800 -mx-2"
          >
            <div class="flex-1 text-center align-middle m-2">
              Popularity:
              <span class="text-black font-bold">{{ movie.popularity }}</span>
            </div>
            <div
              v-if="movie.spoken_languages.length > 0"
              class="flex-1 text-center align-middle m-2"
            >
              Original Language:
              <span class="text-black font-bold">{{
                movie.spoken_languages[0].name
              }}</span>
            </div>
            <div class="flex-1 text-center align-middle m-2">
              Status:
              <span class="text-black font-bold">{{ movie.status }}</span>
            </div>
          </div>
          <div v-if="credits.cast.length > 0" class="flex flex-wrap my-1 -mx-1">
            <div class="w-full mb-1 text-xl font-bold text-teal-900">
              Actors
            </div>
            <div
              v-for="(actor, index) in credits.cast"
              :key="index"
              class="w-1/5 flex my-1 p-1"
            >
              <div class="w-1/4 pr-1">
                <img
                  v-if="actor.profile_path !== null"
                  :src="
                    'https://image.tmdb.org/t/p/original' + actor.profile_path
                  "
                  :alt="actor.name"
                  class="mx-auto"
                />
                <img
                  v-else
                  src="../assets/logo.png"
                  :alt="actor.name"
                  class="mx-auto"
                />
              </div>
              <div class="w-3/4 text-sm pl-1">
                <span class="font-bold">{{ actor.name }}</span>
                <span
                  v-if="actor.character !== null && actor.character != ''"
                  class="italic"
                >
                  as {{ actor.character }}</span
                >
              </div>
            </div>
          </div>
          <div class="w-full my-8">
            <button
              v-if="!movieVideosLoad"
              @click="loadVideo"
              class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded inline-block align-middle"
            >
              Load Videos
            </button>
            <div class="grid gap-6 grid-cols-2">
              <component
                v-for="(video, index) in movieVideos"
                :is="video.site"
                v-bind:video="video"
                v-bind:key="index"
              />
            </div>
            <div
              v-if="movieVideosLoad && movieVideos.length == 0"
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Sorry! Videos Not Available</p>
                  <p class="text-sm">
                    This movie does not have available videos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
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
import { YouTube, Vimeo } from "@/components/videos";
export default {
  name: "Movie",
  computed: {
    ...mapGetters([
      "movie",
      "credits",
      "languageCurrent",
      "movieLoading",
      "movieVideos",
      "movieVideosLoad"
    ])
  },
  methods: {
    ...mapActions({
      fetchMovie: "fetchMovie",
      fetchMovieVideos: "fetchMovieVideos"
    }),
    loadVideo() {
      this.fetchMovieVideos(this.movie.id);
    }
  },
  watch: {
    languageCurrent: function() {
      this.fetchMovie([this.$route.params.id]);
    }
  },
  created() {
    this.fetchMovie([this.$route.params.id]);
  },
  components: {
    YouTube,
    Vimeo
  }
};
</script>

<style></style>
