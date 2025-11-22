import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "@/components/Toast";

export const serverUrl = "http://192.168.11.25:8080/api";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

// Attach token before each request
axiosInstance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = "خطای ناشناخته! لطفاً دوباره تلاش کنید.";

    if (error.response) {
      // Server responded with error
      message =
        error.response.data?.message ||
        error.response.data?.error ||
        `خطای سرور: ${error.response.status}`;
    } else if (error.request) {
      // No response received
      message = "اتصال برقرار نشد! لطفاً اینترنت خود را بررسی کنید.";
    } else {
      // Internal axios error
      message = error.message;
    }

    showToast.error('خطا', message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
