import BackButton from "@/components/BackButton";
import { showToast } from "@/components/Toast";
import { Colors } from "@/constants/colors";
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

export default function RegisterScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!phone || !password || !confirm) {
      showToast.error("خطا", "لطفاً تمام فیلدها را پر کنید");
      return;
    }
    if (password !== confirm) {
      showToast.error("خطا", "رمز عبور و تکرار آن یکسان نیستند");
      return;
    }
    if (password.length < 6) {
      showToast.error("خطا", "رمز عبور باید حداقل ۶ کاراکتر باشد");
      return;
    }
    if (!accepted) {
      showToast.error("خطا", "لطفاً قوانین و مقررات را بپذیرید");
      return;
    }
    showToast.success("ثبت‌نام موفق", "حساب کاربری شما با موفقیت ایجاد شد");
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
          <Text style={styles.title}>ثبت‌نام</Text>
          <Text style={styles.subtitle}>حساب کاربری جدید ایجاد کنید</Text>

          <TextInput
            style={styles.input}
            placeholder="شماره تماس"
            placeholderTextColor={Colors.light.border}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            textAlign="right"
            autoCapitalize="none"
          />

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

          <View style={styles.passwordWrapper}>
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.passwordInput}
              placeholder="تکرار رمز عبور"
              placeholderTextColor={Colors.light.border}
              secureTextEntry={!showConfirmPassword}
              value={confirm}
              onChangeText={setConfirm}
              textAlign="right"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setAccepted(!accepted)}
          >
            <View style={[styles.checkbox, accepted && styles.checkboxActive]}>
              {accepted && <Ionicons name="checkmark" size={14} color="#fff" />}
            </View>
            <Text style={styles.checkboxText}>پذیرش قوانین و مقررات</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>ثبت‌نام</Text>
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
    textAlign: "right",
    writingDirection: "rtl",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
  checkboxContainer: {
    flexDirection: "row-reverse",
    gap:10,
    alignItems: "center",
    marginBottom: 24,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.light.primary,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  checkboxText: {
    color: Colors.light.text,
    fontSize: 14,
    
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
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
