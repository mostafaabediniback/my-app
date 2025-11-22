import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface AccessGateProps {
  message: string;
}

export default function AccessGate({ message }: AccessGateProps) {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="lock-closed-outline" size={40} color="#1A73E8" />
        <Text style={styles.title}>لطفاً ابتدا وارد شوید</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/register')}
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>ثبت‌نام</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>ورود</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  title: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1C1E',
    textAlign: 'center',
  },
  message: {
    marginTop: 8,
    fontSize: 13,
    color: '#7A7F87',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  registerButton: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1A73E8',
    paddingVertical: 12,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#1A73E8',
    fontWeight: '600',
  },
  loginButton: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: '#1A73E8',
    paddingVertical: 12,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});

