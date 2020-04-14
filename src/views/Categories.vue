<template>
  <div class="categories">
    <div class="flex -mx-2">
      <div
        v-for="(list, index) in lists"
        :key="index"
        class="flex-1 flex flex-wrap text-gray-700 text-center bg-gray-400 m-2"
      >
        <router-link
          :to="/categories/ + list.link"
          class="w-full text-lg p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-200"
        >
          {{ list.label }}</router-link
        >
        <router-link :to="/categories/ + list.link" class="flex flex-wrap">
          <span
            v-for="(sample, index) in list.samples.slice(0, 9)"
            :key="index"
            class="flex w-1/3"
          >
            <img
              :src="imageChecker(sample.poster_path)"
              :alt="sample.original_title"
              class="opacity-50 hover:opacity-100 transition duration-200 ease-in-out"
            />
          </span>
        </router-link>
        <router-link
          :to="/categories/ + list.link"
          class="w-full p-2 transition duration-200 ease-in-out hover:bg-gray-800 hover:text-gray-200"
        >
          Show All</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { imageChecker } from "@/mixins";
export default {
  name: "Categories",
  computed: {
    ...mapGetters(["languageCurrent", "lists"])
  },
  methods: {
    ...mapActions({
      fetchListsData: "fetchListsData"
    })
  },
  watch: {
    languageCurrent: function() {
      this.fetchListsData();
    }
  },
  created() {
    this.fetchListsData();
  },
  mixins: [imageChecker]
};
</script>

<style></style>
