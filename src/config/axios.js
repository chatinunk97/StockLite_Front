import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../utils/token-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((configObj) => {
  const token = getAccessToken();
  if (token) {
    configObj.headers.Authorization = `Bearer ${token}`;
  }
  return configObj;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axios;
