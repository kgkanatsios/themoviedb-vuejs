<template>
  <div class="movie">
    <div class="text-right my-6">
      <button
        @click="$router.go(-1)"
        class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded"
      >
        Back
      </button>
    </div>
    {{ movie.title }}
    {{ movie.overview }}
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
