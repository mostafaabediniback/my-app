// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Colors } from "@/constants/colors";
// import HomeHeader from "@/components/HomeHeader";
// import QuickActions from "@/components/QuickActions";
// import { useRouter } from "expo-router";

// export default function HomeScreen() {
//   const router = useRouter();

//   const goToLogin = () => {
//     router.push("/login");
//   };

//   return (
//     <ScrollView
//       style={styles.body}
//       contentContainerStyle={{ direction: "ltr" }}
//     >
//       <HomeHeader />

//       <View>
//         <Text style={styles.headText}>دسترسی سریع</Text>

//         <View style={styles.quickActionsContainer}>
//           <QuickActions />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={goToLogin}>
//           <Text style={styles.buttonText}>رفتن به صفحه ورود</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     padding: 10,
//     direction: "rtl",
//     writingDirection: "rtl",
//   },

//   headText: {
//     marginBottom: 10,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "right",
//   },

//   quickActionsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "flex-end",
//     gap: 12,
//     marginBottom: 20,
//   },

//   button: {
//     marginTop: 20,
//     backgroundColor: Colors.light.primary,
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// app/home/HomeScreen.tsx
import Banners from "@/components/homeComponents/Banners";
import CardSwiper from "@/components/homeComponents/CardSwiper";
import Header from "@/components/homeComponents/Header";
import Services from "@/components/homeComponents/Services";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
          direction: "rtl",
        }}
      >
        <Header />

        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
          <CardSwiper />
        </View>

        <View style={{ marginTop: 16 }}>
          <Services />
        </View>

        <View style={{ marginTop: 8, paddingBottom: 8 }}>
          <Banners />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
