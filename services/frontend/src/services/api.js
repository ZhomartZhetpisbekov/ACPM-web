import axios from "axios";
import i18n from "../plugins/i18n";

const api = axios.create({
  baseURL: `http://192.168.54.178/api/v1/${i18n.locale}`,
  base: 'http://192.168.54.178',
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
