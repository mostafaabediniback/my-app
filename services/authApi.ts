// import axiosInstance from "@/utils/axiosConfig";

// export const signIn = async (data: any) => {
//   const res = await axiosInstance.post("/Identity/Login", data);
//   return res.data;
// };

// export const signOut = async () => {
//   const res = await axiosInstance.post("/Authentication/Logout");
//   return res.data;
// };

// export const captcha = async () => {
//   const res = await axiosInstance.get("/Authentication/Captcha");
//   return res.data;
// };

export const signIn = async (data: any) => {
  const { username, password } = data || {};
  if (username && password) {
    return {
      data: {
        accessToken: "local-token",
        user: {
          id: 1,
          fullName: "کاربر محلی", // ← درست شد
          supporterId: "87421", // ← اضافه شد
          phone: username,
          email: "local@example.com", // ← اضافه شد
        },
      },
    };
  }
  const error: any = new Error("Invalid credentials");
  error.response = { data: { message: "نام کاربری یا رمز عبور اشتباه است" } };
  throw error;
};

export const signOut = async () => {
  return { data: { success: true } };
};

export const captcha = async () => {
  return { data: { captchaId: "local", image: null } };
};
