import axios from "axios";
const url = "http://85.222.120.170:8888/api";
const api = axios.create({
  baseURL: url,
});

export default api;
