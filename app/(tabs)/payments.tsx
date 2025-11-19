import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "@/store/useAuthStore";

const transactions = [
  { title: "کمک معیشتی خانواده الف", amount: "-750,000 ریال", status: "موفق", date: "۴ ساعت پیش" },
  { title: "واریز ماهانه شما", amount: "+1,500,000 ریال", status: "شارژ", date: "دیروز" },
  { title: "حمایت از مدرسه", amount: "-900,000 ریال", status: "در انتظار", date: "سه‌شنبه" },
];

const upcoming = [
  { title: "برداشت خودکار صدقه", date: "۲۵ آبان", amount: "300,000 ریال" },
  { title: "اقساط طرح مهر", date: "۱۰ آذر", amount: "450,000 ریال" },
];

function AccessGate({ message }: { message: string }) {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F8FA",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          padding: 24,
          alignItems: "center",
          width: "100%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.08,
          shadowRadius: 16,
          elevation: 4,
        }}
      >
        <Ionicons name="lock-closed-outline" size={40} color="#1A73E8" />
        <Text
          style={{
            marginTop: 16,
            fontSize: 18,
            fontWeight: "700",
            color: "#1A1C1E",
            textAlign: "center",
          }}
        >
          لطفاً ابتدا وارد شوید
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 13,
            color: "#7A7F87",
            textAlign: "center",
          }}
        >
          گزارش تراکنش‌ها و برداشت‌ها فقط برای کاربران وارد شده نمایش داده می‌شود.
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            style={{
              flex: 1,
              marginHorizontal: 6,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#1A73E8",
              paddingVertical: 12,
            }}
          >
            <Text style={{ textAlign: "center", color: "#1A73E8", fontWeight: "600" }}>
              ثبت‌نام
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={{
              flex: 1,
              marginHorizontal: 6,
              borderRadius: 12,
              backgroundColor: "#1A73E8",
              paddingVertical: 12,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}>
              ورود
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function PaymentsScreen() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <AccessGate message="برای مشاهده سوابق پرداخت، وارد حساب شوید." />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
          direction: "rtl",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#1A1C1E",
            }}
          >
            تاریخچه پرداخت‌ها
          </Text>
          <Text
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#7A7F87",
            }}
          >
            ریز تراکنش‌های اخیر و برداشت‌های آینده
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 18,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.05,
            shadowRadius: 14,
            elevation: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1A1C1E" }}>
              تراکنش‌های اخیر
            </Text>
            <Text style={{ fontSize: 12, color: "#1A73E8" }}>دانلود گزارش</Text>
          </View>
          {transactions.map((item) => (
            <View
              key={item.title}
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: "#F0F1F4",
              }}
            >
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontWeight: "600", color: "#1A1C1E" }}>{item.title}</Text>
                <View style={{ flexDirection: "row-reverse", marginTop: 4, alignItems: "center" }}>
                  <Ionicons name="time-outline" size={14} color="#A0A4AB" style={{ marginLeft: 4 }} />
                  <Text style={{ color: "#7A7F87", fontSize: 12 }}>{item.date}</Text>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    color: item.amount.startsWith("-") ? "#D32F2F" : "#1A73E8",
                    fontWeight: "700",
                  }}
                >
                  {item.amount}
                </Text>
                <Text style={{ color: "#7A7F87", fontSize: 12, marginTop: 4 }}>{item.status}</Text>
              </View>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: 16,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 18,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.05,
            shadowRadius: 14,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#1A1C1E", marginBottom: 12 }}>
            برداشت‌های برنامه‌ریزی شده
          </Text>
          {upcoming.map((item) => (
            <View
              key={item.title}
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: "#F0F1F4",
              }}
            >
              <View>
                <Text style={{ color: "#1A1C1E", fontWeight: "600" }}>{item.title}</Text>
                <Text style={{ color: "#7A7F87", marginTop: 4 }}>{item.date}</Text>
              </View>
              <Text style={{ color: "#1A73E8", fontWeight: "700" }}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


