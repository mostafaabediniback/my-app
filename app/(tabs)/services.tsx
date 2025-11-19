import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      style={{ flex: 1, backgroundColor: "#F7F8FA" }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 120 }}
    >
      <View style={{ marginTop: 24, direction: "rtl" }}>

      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          padding: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.05,
          shadowRadius: 16,
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#1A1C1E",
            marginBottom: 14,
            textAlign: "right",
          }}
        >
          دسترسی سریع
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.title}
              style={{
                width: "48%",
                paddingVertical: 14,
                borderRadius: 16,
                backgroundColor: "#F1F4FB",
                flexDirection: "row-reverse",
                alignItems: "center",
                paddingHorizontal: 14,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: "#E3F2FD",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 12,
                }}
              >
                <Ionicons name={action.icon} size={20} color="#1A73E8" />
              </View>
              <Text style={{ color: "#1A1C1E", fontWeight: "600" }}>
                {action.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        {servicePackages.map((pkg) => (
          <View
            key={pkg.title}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 18,
              marginBottom: 16,
              direction: "rtl",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.05,
              shadowRadius: 14,
              elevation: 4,
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    color: "#1A1C1E",
                  }}
                >
                  {pkg.title}
                </Text>
                <Text
                  style={{
                    marginTop: 6,
                    fontSize: 13,
                    color: "#6D7075",
                  }}
                >
                  {pkg.description}
                </Text>
              </View>
              <Ionicons name="chevron-back" size={22} color="#A0A4AB" />
            </View>
            <Text
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "#1A73E8",
              }}
            >
              {pkg.stats}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          padding: 18,
          marginTop: 4,
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#1A1C1E",
            }}
          >
            سوابق اخیر شما
          </Text>
          <Text style={{ fontSize: 12, color: "#1A73E8" }}>مشاهده همه</Text>
        </View>
        {history.map((item) => (
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
              <Text
                style={{ color: "#1A1C1E", fontWeight: "600" }}
              >
                {item.title}
              </Text>
              <Text style={{ color: "#7A7F87", marginTop: 4 }}>{item.date}</Text>
            </View>
            <Text style={{ color: "#1A73E8", fontWeight: "700" }}>
              {item.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}


