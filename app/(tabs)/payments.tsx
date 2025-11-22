import AccessGate from "@/components/payments/AccessGate";
import TransactionList from "@/components/payments/TransactionList";
import UpcomingPayments from "@/components/payments/UpcomingPayments";
import useAuthStore from "@/store/useAuthStore";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const transactions = [
  { title: "کمک معیشتی خانواده الف", amount: "-750,000 ریال", status: "موفق", date: "۴ ساعت پیش" },
  { title: "واریز ماهانه شما", amount: "+1,500,000 ریال", status: "شارژ", date: "دیروز" },
  { title: "حمایت از مدرسه", amount: "-900,000 ریال", status: "در انتظار", date: "سه‌شنبه" },
];

const upcoming = [
  { title: "برداشت خودکار صدقه", date: "۲۵ آبان", amount: "300,000 ریال" },
  { title: "اقساط طرح مهر", date: "۱۰ آذر", amount: "450,000 ریال" },
];

export default function PaymentsScreen() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <AccessGate message="برای مشاهده سوابق پرداخت، وارد حساب شوید." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>تاریخچه پرداخت‌ها</Text>
          <Text style={styles.headerSubtitle}>
            ریز تراکنش‌های اخیر و برداشت‌های آینده
          </Text>
        </View>

        <View style={styles.section}>
          <TransactionList transactions={transactions} />
        </View>

        <View style={styles.section}>
          <UpcomingPayments payments={upcoming} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    direction: "rtl",
  },
  header: {
    marginTop: 24,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1C1E",
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#7A7F87",
  },
  section: {
    marginTop: 16,
  },
});


