<template>
  <div id="app">
    <div class="bg-black shadow-md mb-4">
      <div class="container mx-auto">
        <nav class="flex items-center justify-between flex-wrap p-3">
          <div
            class="flex w-full sm:w-auto mb-2 items-center flex-shrink-0 text-teal-400"
          >
            <span class="font-semibold text-xl tracking-tight m-auto"
              >The Movie DB API - VueJS</span
            >
          </div>
          <div class="flex w-1/2 sm:w-auto justify-center">
            <router-link to="/" class="hover:text-teal-200 text-white p-2" exact
              >Home</router-link
            >
            <router-link
              to="/categories"
              class="hover:text-teal-200 text-white p-2"
              exact
              >Movies</router-link
            >
          </div>
          <div class="flex w-1/2 sm:w-auto justify-center">
            <select
              @change="updateCurrentLanguage($event)"
              class="text-center appearance-none bg-gray-200 border border-gray-200 text-gray-700 p-1 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option
                v-for="(language, index) in languageList"
                :value="language.value"
                :key="index"
                :selected="language.value == languageCurrent.value"
                >{{ language.label }}</option
              >
            </select>
          </div>
        </nav>
      </div>
    </div>
    <div class="container mx-auto px-3 pb-3">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["languageCurrent", "languageList"])
  },
  methods: {
    ...mapActions({
      changeCurrentLanguage: "changeCurrentLanguage",
      fetchLanguages: "fetchLanguages"
    }),
    updateCurrentLanguage(event) {
      this.changeCurrentLanguage(event.target.value);
    }
  },
  created() {
    this.fetchLanguages();
  }
};
</script>
