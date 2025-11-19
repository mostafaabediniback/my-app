import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/useAuthStore";
// import { signIn, signOut } from "../api/authApi";
import { useRouter } from "expo-router";
import { signIn, signOut } from "@/services/authApi";

export default function useLogin() {
  const router = useRouter();
  const loginStore = useAuthStore();

  const login = useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      const { accessToken, user } = data.data;
      console.log(data)

      await loginStore.login(accessToken, user);

      router.push("/");
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
