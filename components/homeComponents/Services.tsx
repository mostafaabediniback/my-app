// app/home/components/Services.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

export default function Services() {
  const items: { title: string; icon: IconName }[] = [
    { title: "صدقه", icon: "document-text-outline" },
    { title: "فطریه", icon: "phone-portrait-outline" },
    { title: "کفاره", icon: "swap-horizontal-outline" },
    { title: "اکرام", icon: "card-outline" },
    { title: "زکات", icon: "cash-outline" },
    { title: "سایر خدمات", icon: "ellipsis-horizontal-outline" },
  ];

  return (
    <View
      style={{
        marginTop: 24,
        paddingHorizontal: 16,
        direction: "rtl",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >


        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#1A1C1E",
            }}
          >
            خدمات پرکاربرد
          </Text>
        </View>
                <TouchableOpacity activeOpacity={0.8}>
          {/* <Text
            style={{
              fontSize: 12,
              color: "#1A73E8",
            }}
          >
            مشاهده همه
          </Text> */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.title}
            activeOpacity={0.85}
            style={{
              width: "30%",
              backgroundColor: "#FFFFFF",
              borderRadius: 18,
              paddingVertical: 18,
              alignItems: "center",
              marginBottom: 14,
              borderWidth: 1,
              borderColor: "#E3E5EB",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.05,
              shadowRadius: 12,
              elevation: 3,
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
              }}
            >
              <Ionicons name={item.icon} size={22} color="#1A73E8" />
            </View>

            <Text
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "#1F2024",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
