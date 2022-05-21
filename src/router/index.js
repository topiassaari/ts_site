import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Projects from "../views/Projects.vue";
import Videos from "../views/Videos.vue";
import Work from "../views/Work.vue";
import Dev from "../views/Dev.vue";
import Personal from "../views/Personal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/projects/videos",
    name: "Videos",
    component: Videos,
  },
  {
    path: "/projects/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/projects/dev",
    name: "Dev",
    component: Dev,
  },
  {
    path: "/projects/personal",
    name: "Personal",
    component: Personal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
