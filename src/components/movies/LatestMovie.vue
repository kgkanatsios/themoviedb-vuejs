<template>
  <div class="latest-movie"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LatestMovie",
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
