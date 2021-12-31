import axios from "axios";
const url = "https://192.168.0.24:8888/api";
const api = axios.create({
  baseURL: url,
});

export default api;
