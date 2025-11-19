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
import useLogin from "@/hooks/useLogin";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoading } = useLogin();
  console.log("phone:", phone);
  console.log("password:", password);

  const handleLogin = () => {
    if (!phone || !password) {
      alert("لطفاً شماره تماس و رمز را وارد کنید");
      return;
    }
    login({
      username: phone,
      password: password,
    });
    alert("ورود موفق ✅");
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>ورود</Text>

      {/* شماره تماس - ورودی آزاد */}
      <TextInput
        style={styles.input}
        placeholder="شماره تماس"
        value={phone}
        onChangeText={setPhone}
        textAlign="right"
      />

      {/* رمز عبور با آیکون چشم */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.passwordInput}
          placeholder="رمز عبور"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          textAlign="right"
        />

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
      </View>

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
    writingDirection: "rtl",
  },
  // passwordWrapper: {
  //   position: "relative",
  //   marginBottom: 14,
  // },
  // eyeIcon: {
  //   position: "absolute",
  //   left: 10,
  //   top: 15,
  // },
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
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
  },

  passwordInput: {
    flex: 1,
    fontSize: 15,
    writingDirection: "rtl",
  },
  eyeIcon: {
    marginLeft: 10,
  },
});
