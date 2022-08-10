import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";
// import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: localStorage.getItem("currentLanguage"),
    news: [],
    article: [],
    society: [],
    searchResults: [],
    societyDetails: [],
    events: [],
    eventsDetails: [],
    education: [],
    educationDetails: [],
    protocols: [],
    protocolsDetails: [],
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
            routerName: "Society",
            children: [
              { path: "about-us", name: "О нас" },
              { path: "history", name: "История создания" },
              { path: "purpose", name: "Цель, миссия" },
              { path: "membership", name: "Членство" },
              { path: "partnership", name: "Сотрудничество" },
              { path: "partners", name: "Партнеры" },
              { path: "mass-media", name: "СМИ о нас" },
            ],
          },
          {
            name: "События",
            path: "events",
            routerName: "Events",
            children: [],
          },
          {
            name: "Образование",
            path: "education",
            routerName: "Education",
            children: [],
          },
          {
            name: "Клинические протоколы",
            path: "protocols",
            routerName: "Protocols",
            children: [],
          },
          {
            name: "Новости в медицине",
            path: "news",
            routerName: "News",
            children: [],
          },
        ],
      },
    },
    parser: {
      " ": "Главная",
      society: "Общество",
      "about-us": "О нас",
      history: "История создания",
      purpose: "Цель, миссия",
      membership: "Членство",
      partnership: "Сотрудничество",
      partners: "Партнеры",
      "mass-media": "СМИ о нас",
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
    SET_SOCIETY(state, society) {
      state.society = society;
    },
    SET_SOCIETY_DETAILS(state, societyDetails) {
      state.societyDetails = societyDetails;
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENTS_DETAILS(state, eventsDetails) {
      state.eventsDetails = eventsDetails;
    },
    SET_EDUCATION(state, education) {
      state.education = education;
    },
    SET_EDUCATION_DETAILS(state, educationDetails) {
      state.educationDetails = educationDetails;
    },
    SET_PROTOCOLS(state, protocols) {
      state.protocols = protocols;
    },
    SET_PROTOCOLS_DETAILS(state, protocolsDetails) {
      state.protocolsDetails = protocolsDetails;
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
    async getCategoryDetails({ commit, state }, group, category) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/${group}/${category}`)
        .then((res) => {
          commit("SET_CATEGORY_DETAILS", res.data);
        });
    },
    async getSociety({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/society`)
        .then((res) => {
          commit("SET_SOCIETY", res.data);
        });
    },
    async getSocietyDetails({ commit, state }, category) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/society/${category}`)
        .then((res) => {
          commit("SET_SOCIETY_DETAILS", res.data);
        });
    },
    async getEvents({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/events`)
        .then((res) => {
          commit("SET_EVENTS", res.data);
        });
    },
    async getEventsDetails({ commit, state }, category) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/events/${category}`)
        .then((res) => {
          commit("SET_EVENTS_DETAILS", res.data);
        });
    },
    async getEducation({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/education`)
        .then((res) => {
          commit("SET_EDUCATION", res.data);
        });
    },
    async getEducationDetails({ commit, state }, category) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/education/${category}`)
        .then((res) => {
          commit("SET_EDUCATION_DETAILS", res.data);
        });
    },
    async getProtocols({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/protocols`)
        .then((res) => {
          commit("SET_PROTOCOLS", res.data);
        });
    },
    async getProtocolsDetails({ commit, state }, category) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/protocols/${category}`)
        .then((res) => {
          commit("SET_PROTOCOLS_DETAILS", res.data);
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
