// app/home/components/CardSwiper.tsx
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import useAuthStore from "@/store/useAuthStore";

const width = Dimensions.get("window").width;

export default function CardSwiper() {
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = Boolean(token);

  const cards = [
    { id: 1, title: "کوتاه‌مدت", balance: "530,931 ریال" },
    { id: 2, title: "جاری", balance: "1,200,000 ریال" },
  ];

  if (!isLoggedIn) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 18,
          paddingVertical: 18,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderColor: "#E3E5EB",
        }}
        activeOpacity={0.85}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#1A1C1E",
          }}
        >
          اضافه کردن کارت بانکی یا حساب
        </Text>
        <Text
          style={{
            marginTop: 6,
            fontSize: 13,
            color: "#7A7F87",
          }}
        >
          برای مشاهده موجودی و تراکنش‌ها، کارت خود را اضافه کنید.
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <Carousel
      width={width - 32}
      height={170}
      style={{
        alignSelf: "center",
      }}
      data={cards}
      scrollAnimationDuration={700}
      renderItem={({ item }) => (
        <View
          style={{
            width: "100%",
            backgroundColor: "#1A73E8",
            borderRadius: 20,
            padding: 20,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 140,
              height: 140,
              borderRadius: 70,
              backgroundColor: "rgba(255, 255, 255, 0.18)",
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -50,
              left: -30,
              width: 160,
              height: 160,
              borderRadius: 80,
              backgroundColor: "rgba(21, 101, 192, 0.8)",
            }}
          />

          <Text
            style={{
              color: "#E3F2FD",
              fontSize: 14,
            }}
          >
            نوع حساب
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "700",
              marginTop: 4,
            }}
          >
            {item.title}
          </Text>

          <View
            style={{
              marginTop: 18,
            }}
          >
            <Text
              style={{
                color: "#E3F2FD",
                fontSize: 13,
              }}
            >
              موجودی
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: "700",
                marginTop: 4,
              }}
            >
              {item.balance}
            </Text>
          </View>
        </View>
      )}
    />
  );
}
