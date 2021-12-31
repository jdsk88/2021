import axios from "axios";
const url = "http://localhost/api";
const api = axios.create({
  baseURL: url,
});

export default api;
