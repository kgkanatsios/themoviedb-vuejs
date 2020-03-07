import Axios from "axios";
import languages from "./languages";

const state = {
  movies: [],
  page: null,

};

const mutations = {
  SET_MOVIES(
    state, {
      movies
    }
  ) {
    state.movies = movies;
  },
  SET_PAGE(
    state, {
      page
    }
  ) {
    state.page = page;
  }
};

const actions = {
  fetchNowPlayingMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get("/movie/now_playing?api_key=" + process.env.VUE_APP_TMDB_API_KEY + "&language=" + lang.value)
      .then(res => {
        commit("SET_MOVIES", {
          movies: res.data.results
        });
        commit("SET_PAGE", {
          page: res.data.page
        });
      })
      .catch(error => console.log(error));
  },
};
const getters = {
  movies: state => {
    return state.movies;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};