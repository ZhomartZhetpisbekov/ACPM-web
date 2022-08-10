import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";
// import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: localStorage.getItem("currentLanguage"),
    news: [],
    article: [],
    group: [],
    categoryDetails: [],
    searchResults: [],
    menu: {
      pages: {
        headerNavTop: [
          { name: "Новости", path: "news", routerName: "News" },
          { name: "Контакты", path: "contacts", routerName: "Contacts" },
          { name: "Личный Кабинет", path: "account", routerName: "Account" },
        ],
        headerNavBottom: [
          {
            name: "Общество",
            path: "society",
            routerName: "Information",
          },
          {
            name: "События",
            path: "events",
            routerName: "Information",
          },
          {
            name: "Образование",
            path: "education",
            routerName: "Information",
          },
          {
            name: "Клинические протоколы",
            path: "protocols",
            routerName: "Information",
          },
          {
            name: "Новости в медицине",
            path: "news",
            routerName: "News",
          },
        ],
      },
    },
  },
  getters: {
    headerTopItems(state) {
      return state.menu.pages.headerNavTop;
    },
    headerBottomItems(state) {
      return state.menu.pages.headerNavBottom;
    },
    headerAllItems(state) {
      return [
        ...state.menu.pages.headerNavTop,
        ...state.menu.pages.headerNavBottom,
      ];
    },
    // headerBottomChildren(state, payload) {
    //   return state.menu.pages.headerNavBottom[payload];
    // },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    },
    SET_GROUP(state, group) {
      state.group = group;
    },
    SET_CATEGORY_DETAILS(state, categoryDetails) {
      state.categoryDetails = categoryDetails;
    },
    SET_LANG(state, lang) {
      localStorage.setItem("currentLanguage", lang);
      state.currentLanguage = lang;
    },
    SET_SEARCH_RESULTS(state, payload) {
      state.searchResults = payload;
    },
  },
  actions: {
    async getNews({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/news`)
        .then((res) => {
          commit("SET_NEWS", res.data);
          // console.log('store_actions', res.data);
          // return res.data;
        });
    },
    async getArticle({ commit }, id) {
      return await api.get(`/api/v1/news/${id}`).then((res) => {
        commit("SET_ARTICLE", res.data);
        // console.log(res.data);
        // return res.data
      });
    },
    async getGroup({ commit, state }, group) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/${group}`)
        .then((res) => {
          commit("SET_GROUP", res.data);
        });
    },
    async getCategoryDetails({ commit, state }, payload) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/${payload.group}/${payload.category}`)
        .then((res) => {
          commit("SET_CATEGORY_DETAILS", res.data);
        });
    },
    async getSearchResults({ commit }, payload) {
      return await api.get(`/api/v1/search/${payload}`).then((res) => {
        commit("SET_SEARCH_RESULTS", res.data);
      });
    },
    // async getProduct({ commit }, productId) {
    //   localStorage.setItem("id", productId);
    //   return await api.get(`/menu/${productId}`).then((res) => {
    //     commit("SET_PRODUCT", res.data);
    //     return res.data;
    //   });
    // },
    // async getOrders({ commit }) {
    //   const { data } = await api.get("/orders").then(({ data }) => data);
    //   commit("SET_ORDERS", data.order);
    // },
    // addProductToCart({ commit }, p) {
    //   commit("ADD_PRODUCT_CART", p);
    // },
    // removeProductToCart({ commit }, p) {
    //   commit("REMOVE_PRODUCT_CART", p);
    // },
    // clearCart({ commit }) {
    //   commit("CLEAR_CART");
    // },
    // registerUser({ commit }, user) {
    //   api
    //     .post("register", {
    //       email: user.email,
    //       password: user.password,
    //     })
    //     .then((response) => {
    //       commit("REGISTER", response.data);
    //     });
    // },
    // loginUser({ commit }, user) {
    //   api
    //     .post("login", {
    //       email: user.email,
    //       password: user.password,
    //     })
    //     .then((response) => {
    //       commit("LOGIN", response.data.data);
    //       router.push("/orders");
    //       console.log("Log in!");
    //     })
    //     .catch((error) => {
    //       console.log("Password or email incorrect!\n");
    //       console.log("");
    //       console.log(error);
    //       this.state.loginEr = "Неправильный пароль !";
    //     });
    // },
    // goto({ commit }, id) {
    //   commit("SCROLLING", id);
    // },
  },
});
