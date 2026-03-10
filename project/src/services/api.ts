import axios from "axios";

/**
 * Change this to your PythonAnywhere base URL
 * Example:
 * https://yourusername.pythonanywhere.com
 */
const BASE_URL = "https://AurexBackend.pythonanywhere.com";
// const BASE_URL = "http://192.168.1.60:8257";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // keep false unless using cookies/session auth
});

export default api;
