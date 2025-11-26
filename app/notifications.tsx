import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { ComponentProps } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type IconName = ComponentProps<typeof Ionicons>["name"];

const notifications: { title: string; description: string; time: string; icon: IconName }[] = [
  {
    title: "واریز جدید به صندوق صدقه",
    description: "۱,۰۰۰,۰۰۰ ریال به حساب پویش همدلی اضافه شد.",
    time: "۲ دقیقه پیش",
    icon: "cash-outline",
  },
  {
    title: "گزارش هزینه‌کرد مهر رمضان",
    description: "گزارش کامل برای بازه ۱۰ تا ۲۰ آبان آماده مشاهده است.",
    time: "۱ ساعت پیش",
    icon: "document-text-outline",
  },
  {
    title: "برداشت برنامه‌ریزی شده",
    description: "مبلغ ۳۰۰,۰۰۰ ریال فردا از حساب شما برداشت می‌شود.",
    time: "دیروز",
    icon: "calendar-outline",
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          margin:10
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#1A1C1E" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#1A1C1E" }}>
          اعلان‌ها
        </Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((item) => (
          <View
            key={item.title}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 18,
              padding: 16,
              marginBottom: 12,
              flexDirection: "row-reverse",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "#E3F2FD",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 12,
              }}
            >
              <Ionicons name={item.icon} size={22} color="#1A73E8" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "700", color: "#1A1C1E", fontSize: 15 }}>
                {item.title}
              </Text>
              <Text style={{ color: "#6D7075", fontSize: 13, marginTop: 4 }}>
                {item.description}
              </Text>
              <Text style={{ color: "#A0A4AB", fontSize: 12, marginTop: 6 }}>
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

