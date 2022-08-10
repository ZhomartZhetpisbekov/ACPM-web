import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import InformationPage from "../components/views/InformationPage.vue";
// import SocietyPage from "../components/views/SocietyPage";
// import EventsPage from "../components/views/EventsPage";
// import EducationPage from "../components/views/EducationPage";
// import ProtocolsPage from "../components/views/ProtocolsPage";
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
  // {
  //   path: "/society/:category?",
  //   name: "Society",
  //   component: SocietyPage,
  // },
  // {
  //   path: "/events/:category?",
  //   name: "Events",
  //   component: EventsPage,
  // },
  // {
  //   path: "/education/:category?",
  //   name: "Education",
  //   component: EducationPage,
  // },
  // {
  //   path: "/protocols/:category?",
  //   name: "Protocols",
  //   component: ProtocolsPage,
  // },
  {
    path: "/:name/:category?",
    name: "Information",
    component: InformationPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
