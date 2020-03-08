<template>
  <div id="app">
    <div class="bg-black shadow-md mb-4">
      <div class="container mx-auto">
        <nav class="flex items-center justify-between flex-wrap p-3">
          <div class="flex items-center flex-shrink-0 text-teal-400 mr-6">
            <span class="font-semibold text-xl tracking-tight"
              >The Movie DB API - VueJS</span
            >
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-lg lg:flex-grow">
              <router-link
                to="/"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white px-4"
                exact
                >Home</router-link
              >
              <router-link
                to="/movies"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white px-4"
                exact
                >Movies</router-link
              >
              <router-link
                to="/about"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white px-4"
                exact
                >About</router-link
              >
            </div>
          </div>
          <div class="block flex-grow lg:items-center">
            <select
              @change="updateCurrentLanguage($event)"
              class="float-right appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
    <div class="container mx-auto">
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
