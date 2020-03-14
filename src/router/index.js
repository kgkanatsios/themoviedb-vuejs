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
    path: "/movies/:listType",
    name: "MoviesList",
    component: () => import("../components/movies/MoviesList.vue")
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () => import("../components/movies/Movie.vue")
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
