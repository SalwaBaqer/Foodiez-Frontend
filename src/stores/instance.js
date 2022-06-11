import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:8000/api",
  baseURL: "http://localhost:5001/api",
});

export default instance;
