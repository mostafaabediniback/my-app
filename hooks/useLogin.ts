import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/useAuthStore";
// import { signIn, signOut } from "../api/authApi";
import { useRouter } from "expo-router";
import { signIn, signOut } from "@/services/authApi";
import { showToast } from "@/components/Toast";

export default function useLogin() {
  const router = useRouter();
  const loginStore = useAuthStore();

  const login = useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      const { accessToken, user } = data.data;
      console.log(data)

      await loginStore.login(accessToken, user);

      showToast.success('ورود موفق', 'به صدقه خوش آمدید');

      router.push("/");
    },
    onError: (error: any) => {
      showToast.error(
        'خطا در ورود',
        error?.response?.data?.message || 'نام کاربری یا رمز عبور اشتباه است'
      );
    },
  });

  const logout = useMutation({
    mutationFn: signOut,
    onSuccess: async () => {
      await loginStore.logout();
      router.replace("/welcome");
    },
  });

  return {
    login: login.mutate,
    logout: logout.mutate,
    isLoading: login.isPending,
  };
}
