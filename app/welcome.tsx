import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/colors';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>به اپلیکیشن خوش اومدی </Text>

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/(auth)/register')}>
        <Text style={styles.buttonPrimaryText}>ثبت‌نام</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/(auth)/login')}>
        <Text style={styles.buttonSecondaryText}>ورود</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(tabs)')}>
        <Text style={styles.guestText}>ورود به عنوان مهمان</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: Colors.light.text,
    marginBottom: 60,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: Colors.light.primary,
    width: '85%',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  buttonSecondary: {
    borderColor: Colors.light.primary,
    borderWidth: 1.5,
    width: '85%',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: Colors.light.primary,
    fontSize: 17,
    fontWeight: '500',
  },
  guestText: {
    color: Colors.light.text,
    fontSize: 15,
    marginTop: 10,
  },
});
