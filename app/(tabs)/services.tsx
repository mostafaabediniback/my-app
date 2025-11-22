import QuickActions from "@/components/services/QuickActions";
import RecentHistory from "@/components/services/RecentHistory";
import ServicePackages from "@/components/services/ServicePackages";
import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

const quickActions: { title: string; icon: IconName }[] = [
  { title: "پرداخت نذر", icon: "flame-outline" },
  { title: "حمایت فوری", icon: "medkit-outline" },
  { title: "کمک به سیل‌زدگان", icon: "water-outline" },
  { title: "کمک معیشتی", icon: "restaurant-outline" },
];

const servicePackages = [
  {
    title: "پویش همدلی",
    description: "تأمین بسته‌های معیشتی برای خانواده‌های نیازمند",
    stats: "۱۲۷ کمک ثبت شد",
  },
  {
    title: "طرح مهر رمضان",
    description: "توزیع غذای گرم و بسته‌های فطریه در سراسر کشور",
    stats: "۹۸ مرکز فعال",
  },
];

const history = [
  { title: "پرداخت کفاره روزه", amount: "500,000 ریال", date: "امروز" },
  { title: "حمایت از دانش‌آموزان", amount: "1,200,000 ریال", date: "دیروز" },
  { title: "کمک به زلزله‌زدگان کرمانشاه", amount: "800,000 ریال", date: "سه‌شنبه" },
];

export default function ServicesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.section}>
        <QuickActions actions={quickActions} />
      </View>

      <View style={styles.section}>
        <ServicePackages packages={servicePackages} />
      </View>

      <View style={styles.section}>
        <RecentHistory history={history} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
    paddingTop: 24,
  },
  section: {
    marginTop: 20,
  },
});


