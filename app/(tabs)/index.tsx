import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/colors";
import HomeHeader from "@/components/HomeHeader";
import QuickActions from "@/components/QuickActions";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <HomeHeader />
      <View className="px-5 mt-4">
        <Text className="text-right text-lg font-bold text-gray-700 mb-3">
          دسترسی سریع
        </Text>
        <QuickActions />
      </View>
    </ScrollView>
    // <View style={styles.container}>
    //   <Text style={styles.title}>صفحه خانه 🏠</Text>
    //   <Text style={styles.text}>به نسخه مهمان یا کاربر لاگین خوش اومدی!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.primary,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Colors.light.text,
  },
});
