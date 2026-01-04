import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8083",   // 👈 BACKEND URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
