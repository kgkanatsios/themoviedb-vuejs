import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../views/Movies.vue")
  },
  {
    name: "LatestMovies",
    path: "/movies/latest",
    component: () => import("../components/movies/LatestMovies.vue")
  },
  {
    name: "NowPlayingMovies",
    path: "/movies/now-playing",
    component: () => import("../components/movies/NowPlayingMovies.vue")
  },
  {
    name: "PopularMovies",
    path: "/movies/popular",
    component: () => import("../components/movies/PopularMovies.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
