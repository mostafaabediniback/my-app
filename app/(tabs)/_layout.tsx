// app/(tabs)/_layout.tsx

import { HapticTab } from "@/components/haptic-tab";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
// import { HapticTab } from "../components/haptic-tab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 8,
          marginBottom: 4,
        },
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          height: 70,
          backgroundColor: "#ffffff",
          borderRadius: 24,
          borderTopWidth: 0,
          elevation: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.12,
          shadowRadius: 16,
          paddingBottom: 10,
          paddingHorizontal: 16,
        },
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "پروفایل",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={focused ? "#1A73E8" : "#777"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          tabBarLabel: "سرویس‌ها",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={26}
              color={focused ? "#1A73E8" : "#777"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "خانه",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: focused ? "#1A73E8" : "#E3F2FD",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -18,
                shadowColor: "#1A73E8",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: focused ? 0.35 : 0,
                shadowRadius: 10,
                elevation: focused ? 12 : 0,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={focused ? "#fff" : "#1A73E8"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="payments"
        options={{
          tabBarLabel: "تراکنش‌ها",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              size={26}
              color={focused ? "#1A73E8" : "#777"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          tabBarLabel: "کیف پول",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              size={26}
              color={focused ? "#1A73E8" : "#777"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
