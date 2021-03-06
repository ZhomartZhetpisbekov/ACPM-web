import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import InformationPage from "../components/views/InformationPage.vue";
import NewsPage from "../components/views/NewsPage.vue";

// import InfoLol from "../components/atoms/InfoLol";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/news",
    name: "News",
    component: NewsPage,
  },
  {
    path: "/:name/:item?",
    name: "Information",
    component: InformationPage,
    // children: [
    //   {
    //     path: "",
    //     component: InfoLol,
    //   },
    // ],
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
