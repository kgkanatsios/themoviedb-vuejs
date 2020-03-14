<template>
  <div class="movie">
    <div v-if="!movieLoading">
      <div class="text-right my-6">
        <a
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
      <div class="bg-teal-900 text-white px-4 py-2 font-bold mb-4">
        <span class="text-xl inline-block align-middle">{{ movie.title }}</span>
        <span class="text-sm mx-2 inline-block align-middle"
          >(<font-awesome-icon icon="calendar-alt"></font-awesome-icon>
          {{ movie.release_date }})</span
        >
      </div>

      {{ movie.overview }}
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
export default {
  name: "Movie",
  computed: {
    ...mapGetters(["movie", "languageCurrent", "movieLoading"])
  },
  methods: {
    ...mapActions({
      fetchMovie: "fetchMovie"
    })
  },
  watch: {
    languageCurrent: function() {
      this.fetchMovie([this.$route.params.id]);
    }
  },
  created() {
    this.fetchMovie([this.$route.params.id]);
  }
};
</script>

<style></style>
