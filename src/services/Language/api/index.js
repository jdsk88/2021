import axios from "axios";
const url = "https://localhost:8888/api";
const api = axios.create({
  baseURL: url,
});

export default api;
