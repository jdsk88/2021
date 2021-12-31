import axios from "axios";
const url = "https://85.222.120.170:59119/api";
const api = axios.create({
  baseURL: url,
});

export default api;
