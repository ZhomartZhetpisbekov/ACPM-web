import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/pages/HomePage";
// import MainPage from "../components/pages/MainPage";
import InformationPage from "../components/pages/InformationPage";
// import InfoText from "../components/molecules/InfoText"
import InfoLol from "../components/atoms/InfoLol"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:name/:item?",
    name: "Information",
    component: InformationPage,
    children: [
      {
        path: "",
        component: InfoLol,
      },
    ],
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
