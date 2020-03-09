<template>
  <div class="latest-movies"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LatestMovies",
  computed: {
    ...mapGetters(["movies"])
  },
  methods: {
    ...mapActions({
      fetchLatest: "fetchLatestMovies"
    })
  },
  created() {
    this.fetchLatest();
  }
};
</script>

<style></style>
