import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    alert('ورود موفق!');
    router.back(); // برمی‌گرده به صفحه قبل
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>صفحه ورود 🔐</Text>
      <Button title="ورود به عنوان کاربر تستی" onPress={handleLogin} />
    </View>
  );
}
