// // app/home/components/CardSwiper.tsx
// import React from "react";
// import { Dimensions, Text, TouchableOpacity, View } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// import useAuthStore from "@/store/useAuthStore";

// const width = Dimensions.get("window").width;

// export default function CardSwiper() {
//   const token = useAuthStore((state) => state.token);
//   const isLoggedIn = Boolean(token);

//   const cards = [
//     { id: 1, title: "کوتاه‌مدت", balance: "530,931 ریال" },
//     { id: 2, title: "جاری", balance: "1,200,000 ریال" },
//   ];

//   if (!isLoggedIn) {
//     return (
//       <TouchableOpacity
//         style={{
//           backgroundColor: "#FFFFFF",
//           borderRadius: 18,
//           paddingVertical: 18,
//           paddingHorizontal: 20,
//           borderWidth: 1,
//           borderColor: "#E3E5EB",
//         }}
//         activeOpacity={0.85}
//       >
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: "600",
//             color: "#1A1C1E",
//           }}
//         >
//           اضافه کردن کارت بانکی یا حساب
//         </Text>
//         <Text
//           style={{
//             marginTop: 6,
//             fontSize: 13,
//             color: "#7A7F87",
//           }}
//         >
//           برای مشاهده موجودی و تراکنش‌ها، کارت خود را اضافه کنید.
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     <Carousel
//       width={width - 32}
//       height={150}
//       style={{
//         alignSelf: "center",
//       }}
//       data={cards}
//       scrollAnimationDuration={700}
//       renderItem={({ item }) => (
//         <View
//           style={{
//             width: "100%",
//             backgroundColor: "#1A73E8",
//             borderRadius: 20,
//             padding: 20,
//             overflow: "hidden",
//           }}
//         >
//           <View
//             style={{
//               position: "absolute",
//               top: -40,
//               right: -40,
//               width: 140,
//               height: 140,
//               borderRadius: 70,
//               backgroundColor: "rgba(255, 255, 255, 0.18)",
//             }}
//           />
//           <View
//             style={{
//               position: "absolute",
//               bottom: -50,
//               left: -30,
//               width: 160,
//               height: 160,
//               borderRadius: 80,
//               backgroundColor: "rgba(21, 101, 192, 0.8)",
//             }}
//           />

//           <Text
//             style={{
//               color: "#E3F2FD",
//               fontSize: 14,
//             }}
//           >
//             نوع حساب
//           </Text>
//           <Text
//             style={{
//               color: "#FFFFFF",
//               fontSize: 20,
//               fontWeight: "700",
//               marginTop: 4,
//             }}
//           >
//             {item.title}
//           </Text>

//           <View
//             style={{
//               marginTop: 18,
//             }}
//           >
//             <Text
//               style={{
//                 color: "#E3F2FD",
//                 fontSize: 13,
//               }}
//             >
//               موجودی
//             </Text>
//             <Text
//               style={{
//                 color: "#FFFFFF",
//                 fontSize: 22,
//                 fontWeight: "700",
//                 marginTop: 4,
//               }}
//             >
//               {item.balance}
//             </Text>
//           </View>
//         </View>
//       )}
//     />
//   );
// }
// app/home/components/CampaignStories.tsx
import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import useAuthStore from "@/store/useAuthStore";

export default function CampaignStories() {
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = Boolean(token);

  // لیست کمپین‌های خیریه
  const campaigns = [
    {
      id: 1,
      title: "کمک به کودکان",
      image: "https://core.ebhome.ngo/wp-content/uploads/2023/07/Helping-orphaned-children1.jpg",
    },
    {
      id: 2,
      title: "حمایت از بیماران",
      image: "https://banyhashem.com/wp-content/uploads/2021/06/%DA%A9%D9%85%DA%A9-%D8%A8%D9%87-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%A7%D9%86-%D9%86%DB%8C%D8%A7%D8%B2%D9%85%D9%86%D8%AF.jpg",
    },
    {
      id: 3,
      title: "کمک معیشتی",
      image: "https://tejaratnews.com/wp-content/uploads/2020/11/157145038.jpg",
    },
    {
      id: 4,
      title: "تجهیز مدرسه",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HAkgoMmv0WHSy2KzAzmX0QQ5uWMasAaug&s",
    },
  ];

  // if (!isLoggedIn) {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         backgroundColor: "#FFFFFF",
  //         borderRadius: 18,
  //         paddingVertical: 18,
  //         paddingHorizontal: 20,
  //         borderWidth: 1,
  //         borderColor: "#E3E5EB",
  //       }}
  //       activeOpacity={0.85}
  //     >
  //       <Text
  //         style={{
  //           fontSize: 16,
  //           fontWeight: "600",
  //           color: "#1A1C1E",
  //         }}
  //       >
  //         ورود به حساب برای مشاهده کمپین‌ها
  //       </Text>
  //       <Text
  //         style={{
  //           marginTop: 6,
  //           fontSize: 13,
  //           color: "#7A7F87",
  //         }}
  //       >
  //         برای مشاهده و مشارکت در کمپین‌های حمایتی، وارد شوید.
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // }

  return (
    <View>
        <View style={{ alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#1A1C1E",
              marginBottom:10
            }}
          >
کمپین های حمایتی          </Text>
        </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 10 }}
    >
      {campaigns.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={{ alignItems: "center", marginLeft: 16 }}
          activeOpacity={0.8}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 3,
              borderWidth: 2,
              borderColor: "#1A73E8",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 35,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 8,
              fontSize: 12,
              color: "#1A1C1E",
              fontWeight: "600",
            }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
}
