import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
export const unstable_settings = {
  initialRouteName: "welcome",
};

function RootNavigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <>
          <Stack.Screen name="welcome" />
          <Stack.Screen name="(auth)" />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
