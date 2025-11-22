import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Ionicons name="heart" size={60} color={Colors.light.primary} />
            </View>
          </View>

          <Text style={styles.title}>صدقه</Text>
          <Text style={styles.subtitle}>
            کمک به نیازمندان را آسان‌تر کنید
          </Text>
          <Text style={styles.description}>
            با اپلیکیشن صدقه، به راحتی می‌توانید به نیازمندان کمک کنید و در کارهای خیریه شرکت کنید
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push('/(auth)/register')}
              activeOpacity={0.8}
            >
              <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
              <Text style={styles.buttonPrimaryText}>ثبت‌نام</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push('/(auth)/login')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonSecondaryText}>ورود</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.guestButton}
              onPress={() => router.push('/(tabs)')}
              activeOpacity={0.7}
            >
              <Text style={styles.guestText}>ورود به عنوان مهمان</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
    backgroundColor: '#F8F9FA',
  },
  iconContainer: {
    marginBottom: 32,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 42,
    color: Colors.light.text,
    marginBottom: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.light.primary,
    marginBottom: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#8E8E93',
    marginBottom: 48,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: Colors.light.primary,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSecondary: {
    borderColor: Colors.light.primary,
    borderWidth: 2,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonSecondaryText: {
    color: Colors.light.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  guestButton: {
    marginTop: 8,
    paddingVertical: 12,
  },
  guestText: {
    color: '#8E8E93',
    fontSize: 15,
    fontWeight: '500',
  },
});
