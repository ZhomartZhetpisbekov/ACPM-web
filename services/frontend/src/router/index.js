import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import InformationPage from "../components/views/InformationPage.vue";
import SocietyPage from "../components/views/SocietyPage";
import EventsPage from "../components/views/EventsPage";
import NewsPage from "../components/views/NewsPage.vue";
import ArticlePage from "../components/views/ArticlePage.vue";
import LoginPage from "../components/views/LoginPage.vue";

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
    // children: [
    //   {
    //     path: "/:articleTitle",
    //     name: 'Article',
    //     component: ArticlePage,
    //   },
    // ],
    // props: true,
  },
  {
    path: "/news/:id",
    name: "Article",
    component: ArticlePage,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    props: true,
  },
  {
    path: "/soska/:category?",
    name: "Society",
    component: SocietyPage,
  },
  {
    path: "/evangelion/:category?",
    name: "Events",
    component: EventsPage,
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
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
