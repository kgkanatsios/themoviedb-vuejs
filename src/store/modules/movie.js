import Axios from "axios";
import languages from "./languages";

const state = {
  movie: [],
  loading: false
};

const mutations = {
  SET_MOVIE(state, { movie }) {
    state.movie = movie;
  },
  SET_MOVIE_LOADING(state, { loading }) {
    state.loading = loading;
  }
};

const actions = {
  setMovieLoading: ({ commit }, loading) => {
    commit("SET_MOVIE_LOADING", {
      loading: loading
    });
  },
  fetchMovie: ({ commit, dispatch }, movieId) => {
    dispatch("setMovieLoading", true);
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
      "/movie/" +
        movieId +
        "?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
    )
      .then(res => {
        console.log(res);
        commit("SET_MOVIE", {
          movie: res.data
        });
        dispatch("setMovieLoading", false);
      })
      .catch(error => console.log(error));
  }
};
const getters = {
  movie: state => {
    return state.movie;
  },
  movieLoading: state => {
    return state.loading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
