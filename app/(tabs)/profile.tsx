import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { Colors } from '@/constants/colors';

export default function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>پروفایل کاربر 👤</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>خروج از حساب</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.light.secondary,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
