import { useRouter } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/welcome"); // 👈 fallback امن
    }
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <Ionicons name="chevron-back" size={22} color={Colors.light.text} />
      <Text style={styles.backText}>بازگشت</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: Colors.light.text,
    marginLeft: 4,
  },
});
