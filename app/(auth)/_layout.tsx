import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: 'ورود' }} />
      <Stack.Screen name="register" options={{ title: 'ثبت‌نام' }} />
    </Stack>
  );
}
