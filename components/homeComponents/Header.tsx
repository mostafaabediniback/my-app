// app/home/components/Header.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
      }}
    >
      {/* Search Icon */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#E3F2FD",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="search-outline" size={22} color="#1A73E8" />
      </TouchableOpacity>

      {/* Title */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#1A1C1E",
          }}
        >
          صدقه
        </Text>
        <Text
          style={{
            marginTop: 2,
            fontSize: 12,
            color: "#7A7F87",
          }}
        >
          سامانه خدمات مالی
        </Text>
      </View>

      {/* Notification */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#E3F2FD",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.push("/notifications")}
      >
        <Ionicons name="notifications-outline" size={22} color="#1A73E8" />
      </TouchableOpacity>
    </View>
  );
}
