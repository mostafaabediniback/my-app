import { View, Text } from "react-native";

export default function WalletScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#333" }}>
        صفحه کیف پول
      </Text>
      <Text style={{ marginTop: 8, color: "#777" }}>
        موجودی و کیف پول اینجا نمایش داده می‌شود.
      </Text>
    </View>
  );
}


