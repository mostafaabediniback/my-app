// app/home/components/Banners.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Banners() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 16, paddingLeft: 16 }}
    >
      <View
        style={{
          width: 280,
          height: 120,
          backgroundColor: "#1565C0",
          borderRadius: 18,
          marginRight: 12,
          padding: 16,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "#BBDEFB", fontSize: 13, textAlign: "right" }}>
          پیشنهاد ویژه
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontWeight: "700",
            textAlign: "right",
          }}
        >
          انتخاب‌های متنوع سرمایه‌گذاری
        </Text>
        <Text style={{ color: "#E3F2FD", fontSize: 12, textAlign: "right" }}>
          سود مطمئن، دسترسی آسان و امکان برداشت سریع.
        </Text>
      </View>

      <View
        style={{
          width: 280,
          height: 120,
          backgroundColor: "#283593",
          borderRadius: 18,
          marginRight: 12,
          padding: 16,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "#C5CAE9", fontSize: 13, textAlign: "right" }}>
          به زودی
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 17,
            fontWeight: "700",
            textAlign: "right",
          }}
        >
          سرویس‌های جدید پرداخت و کیف پول
        </Text>
        <Text style={{ color: "#E8EAF6", fontSize: 12, textAlign: "right" }}>
          تجربه‌ای ساده‌تر برای مدیریت هزینه‌های روزمره شما.
        </Text>
      </View>
    </ScrollView>
  );
}
