import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import useAuthStore from "@/store/useAuthStore";

const queryClient = new QueryClient();
export const unstable_settings = {
  initialRouteName: "welcome",
};

export default function RootLayout() {
  const token = useAuthStore((state) => state.token);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {token ? (
            <Stack.Screen name="(tabs)" />
          ) : (
            <>
              <Stack.Screen name="welcome" />
              <Stack.Screen name="(auth)" />
            </>
          )}
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
