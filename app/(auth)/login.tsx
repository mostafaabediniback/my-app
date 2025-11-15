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

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!phone || !password) {
      alert("لطفاً شماره تماس و رمز را وارد کنید");
      return;
    }
    alert("ورود موفق ✅");
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>ورود</Text>

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

      <TouchableOpacity onPress={() => alert("بازیابی رمز عبور")}>
        <Text style={styles.forgotText}>فراموشی رمز عبور؟</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ورود</Text>
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
  forgotText: {
    textAlign: "right",
    color: Colors.light.primary,
    marginBottom: 24,
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
