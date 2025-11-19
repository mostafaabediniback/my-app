import axiosInstance from "@/utils/axiosConfig";

export const signIn = async (data: any) => {
  const res = await axiosInstance.post("/Identity/Login", data);
  return res.data;
};

export const signOut = async () => {
  const res = await axiosInstance.post("/Authentication/Logout");
  return res.data;
};

export const captcha = async () => {
  const res = await axiosInstance.get("/Authentication/Captcha");
  return res.data;
};
