import axios from "axios";
// import i18n from "../plugins/i18n";
import store from "../store/store";

const api = axios.create({
  baseURL: `http://192.168.28.178/api/v1/${store.state.currentLanguage}`,
  base: 'http://192.168.28.178',
});

api.interceptors.request.use(
  function(config) {
    const access_token = localStorage.getItem("token");

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default api;
