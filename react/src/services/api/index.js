import axios from "axios";
const remote = "http://85.222.120.170:8888/api";
const local = "http://192.168.0.24:8888/api";
const api = axios.create({
  baseURL: remote,
});

export default api;
