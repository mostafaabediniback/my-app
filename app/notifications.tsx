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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 14,
          backgroundColor: "#F5F7FA",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-forward" size={26} color="#1A1C1E" />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
            color: "#1A1C1E",
            marginLeft: 26,
          }}
        >
          اعلان‌ها
        </Text>
      </View>

      {/* Notifications List */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 10,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 16,
              marginBottom: 14,
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            {/* Icon Wrap */}
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(26, 115, 232, 0.1)",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 4,
              }}
            >
              <Ionicons name={item.icon} size={22} color="#1A73E8" />
            </View>

            {/* Text Content */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "#1A1C1E",
                  fontSize: 15,
                  marginBottom: 4,
                  textAlign: "right",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  color: "#6D7075",
                  fontSize: 13,
                  lineHeight: 20,
                  textAlign: "right",
                }}
              >
                {item.description}
              </Text>

              <Text
                style={{
                  color: "#9AA0A6",
                  fontSize: 11.5,
                  marginTop: 6,
                  textAlign: "right",
                }}
              >
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
