import Axios from "axios";
import languages from "./languages";

const state = {
  movies: [],
  page: null,
  loading: false,
  lists: ["now_playing", "popular", "top_rated", "upcoming"]
};

const mutations = {
  SET_MOVIES(state, { movies }) {
    state.movies = movies;
  },
  SET_MOVIES_PAGE(state, { page }) {
    state.page = page;
  },
  ADD_MOVIES(state, { movies }) {
    state.movies.push(...movies);
  },
  SET_MOVIES_LOADING(state, { loading }) {
    state.loading = loading;
  }
};

const actions = {
  setLoading: ({ commit }, loading) => {
    commit("SET_MOVIES_LOADING", {
      loading: loading
    });
  },
  fetchLatestMovie: ({ commit }) => {
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
        commit("SET_MOVIES_PAGE", {
          page: res.data.page
        });
      })
      .catch(error => console.log(error));
  },
  fetchMovies: ({ commit, dispatch }, [listType, page = 1]) => {
    let lang = languages.getters.languageCurrent(languages.state);
    listType =
      state.lists.find(list => list == listType) === undefined
        ? state.lists[0]
        : listType;
    Axios.get(
      "/movie/" +
        listType +
        "?api_key=" +
        process.env.VUE_APP_TMDB_API_KEY +
        "&language=" +
        lang.value +
        "&page=" +
        page
    )
      .then(res => {
        commit(page == 1 ? "SET_MOVIES" : "ADD_MOVIES", {
          movies: res.data.results
        });
        commit("SET_MOVIES_PAGE", {
          page: res.data.page
        });
        dispatch("setLoading", false);
      })
      .catch(error => console.log(error));
  }
};
const getters = {
  movies: state => {
    return state.movies;
  },
  moviesPage: state => {
    return state.page;
  },
  moviesLoading: state => {
    return state.loading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
