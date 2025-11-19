import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set:any) => ({
  token: null,
  user: null,
  login: async (token:any, user:any) => {
    await AsyncStorage.setItem("token", token);
    set({ token, user });
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ token: null, user: null });
  },
}));

export default useAuthStore;
