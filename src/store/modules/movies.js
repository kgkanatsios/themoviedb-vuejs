import Axios from "axios";
import languages from "./languages";

const state = {
  movies: [],
  page: null,
  lists: ["now_playing", "popular", "top_rated", "upcoming"]
};

const mutations = {
  SET_MOVIES(state, {
    movies
  }) {
    state.movies = movies;
  },
  SET_PAGE(state, {
    page
  }) {
    state.page = page;
  }
};

const actions = {
  fetchNowPlayingMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
        "/movie/now_playing?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
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
  fetchLatestMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
        "/movie/latest?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
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
  fetchPopularMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
        "/movie/popular?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
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
  fetchTopRatedMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
        "/movie/top_rated?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
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
  fetchUpcomingMovies: ({
    commit
  }) => {
    let lang = languages.getters.languageCurrent(languages.state);
    Axios.get(
        "/movie/upcoming?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
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
  fetchMovies: ({
    commit
  }, listType) => {
    let lang = languages.getters.languageCurrent(languages.state);
    listType = (state.lists.find(list => list == listType) === undefined) ? state.lists[0] : listType;
    console.log(listType);
    Axios.get(
        "/movie/" + listType + "?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value
      )
      .then(res => {
        commit("SET_MOVIES", {
          movies: res.data.results
        });
        commit("SET_PAGE", {
          page: res.data.page
        });
      })
      .catch(error => console.log(error));
  }
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