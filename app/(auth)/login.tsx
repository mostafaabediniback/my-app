import BackButton from "@/components/BackButton";
import { showToast } from "@/components/Toast";
import { Colors } from "@/constants/colors";
import useLogin from "@/hooks/useLogin";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useLogin();
  console.log("phone:", phone);
  console.log("password:", password);

  const handleLogin = () => {
    if (!phone || !password) {
      showToast.error("خطا", "لطفاً شماره تماس و رمز را وارد کنید");
      return;
    }
    login({
      username: phone,
      password: password,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackButton />

        <View style={styles.content}>
          <Text style={styles.title}>ورود</Text>
          <Text style={styles.subtitle}>به حساب کاربری خود وارد شوید</Text>

          {/* شماره تماس - ورودی آزاد */}
          <TextInput
            style={styles.input}
            placeholder="شماره تماس"
            placeholderTextColor={Colors.light.border}
            value={phone}
            onChangeText={setPhone}
            // keyboardType="phone-pad"
            textAlign="right"
            autoCapitalize="none"
          />

          {/* رمز عبور با آیکون چشم */}
          <View style={styles.passwordWrapper}>
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.passwordInput}
              placeholder="رمز عبور"
              placeholderTextColor={Colors.light.border}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              textAlign="right"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              showToast.info(
                "بازیابی رمز عبور",
                "این قابلیت به زودی فعال می‌شود"
              )
            }
          >
            <Text style={styles.forgotText}>فراموشی رمز عبور؟</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "در حال ورود..." : "ورود"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 16,
    color: Colors.light.text,
    writingDirection: "rtl",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  forgotText: {
    textAlign: "right",
    color: Colors.light.primary,
    marginBottom: 24,
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.text,
    writingDirection: "rtl",
  },
  eyeIcon: {
    padding: 4,
  },
});
