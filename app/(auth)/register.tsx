import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "@/constants/colors";
import BackButton from "@/components/BackButton";

export default function RegisterScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegister = () => {
    if (!phone || !password || password !== confirm || !accepted) {
      alert("لطفاً اطلاعات را کامل و صحیح وارد کنید");
      return;
    }
    alert("ثبت‌نام موفق ✅");
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>ثبت‌نام</Text>

      <TextInput
        style={styles.input}
        placeholder="شماره تماس"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="رمز عبور"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="تکرار رمز عبور"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAccepted(!accepted)}
      >
        <View style={[styles.checkbox, accepted && styles.checkboxActive]} />
        <Text style={styles.checkboxText}>پذیرش قوانین و مقررات</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>ثبت‌نام</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
    textAlign: "right", 
    writingDirection: "rtl",
  },
  checkboxContainer: {
    flexDirection: "row-reverse",
    gap: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Colors.light.primary,
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: Colors.light.primary,
  },
  checkboxText: {
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
