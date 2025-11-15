import { View, Image, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const slides = [
  { id: "1", image: "https://picsum.photos/400/200" },
  { id: "2", image: "https://picsum.photos/401/200" },
  { id: "3", image: "https://picsum.photos/402/200" },
];

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
        )}
      />
      <Text style={styles.caption}>به بخش خیریه ما خوش آمدید 🌙</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 24,
    overflow: "hidden",
    height: 190,
  },
  image: {
    width: width - 32, // چون margin افقی 16px داریم
    height: "100%",
    borderRadius: 24,
  },
  caption: {
    color: "#fff",
    marginTop: 8,
    fontSize: 13,
    textAlign: "center",
  },
});
