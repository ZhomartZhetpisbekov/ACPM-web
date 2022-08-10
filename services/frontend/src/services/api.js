import axios from "axios";

const api = axios.create({
  baseURL: `http://192.168.0.112`
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
