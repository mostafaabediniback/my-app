import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { showToast } from "@/components/Toast";

const actions = [
  { title: "پرداخت صدقه", icon: "heart-outline" },
  { title: "فطریه", icon: "moon-outline" },
  { title: "کفاره", icon: "cafe-outline" },
  { title: "اکرام", icon: "gift-outline" },
  { title: "کیف پول", icon: "briefcase-outline" },
  { title: "پرداخت خودکار", icon: "timer-outline" },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {actions.map((item, i) => (
        <Pressable
          key={i}
          style={({ pressed }) => [
            styles.card,
            pressed && { opacity: 0.8 },
          ]}
          onPress={() =>
            showToast.info(item.title, 'این قابلیت به زودی فعال می‌شود')
          }
        >
          <Ionicons name={item.icon as any} size={28} color="#06b6d4" />
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#1f2937", // معادل bg-gray-800
    width: "30%",
    aspectRatio: 1,
    borderRadius: 24, // rounded-3xl
    marginBottom: 16, // mb-4
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    marginTop: 8, // mt-2
    fontSize: 13, // text-sm
    textAlign: "center",
  },
});
