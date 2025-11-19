import { Colors } from "@/constants/colors";
import useAuthStore from "@/store/useAuthStore";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { ComponentProps } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockUser = {
  fullName: "زهرا رستگار",
  supporterId: "کد نیکوکار: 87421",
  phone: "0912 456 3021",
  email: "zahra@example.com",
};

type IconName = ComponentProps<typeof Ionicons>["name"];

const quickLinks: { title: string; icon: IconName }[] = [
  { title: "پیگیری کمک‌ها", icon: "time-outline" },
  { title: "ویرایش اطلاعات", icon: "create-outline" },
  { title: "پشتیبانی ۲۴ ساعته", icon: "chatbubble-ellipses-outline" },
];

export default function ProfileScreen() {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const logoutStore = useAuthStore((state) => state.logout);

  const isLoggedIn = Boolean(token);
  const activeUser = user ?? mockUser;

  const handleLogout = async () => {
    await logoutStore();
    router.replace("/welcome");
  };

  const handleAuthNavigation = (path: "(auth)/login" | "(auth)/register") => {
    router.push(`/${path}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >


        {isLoggedIn ? (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {activeUser.fullName.slice(0, 2)}
              </Text>
            </View>
            <Text style={styles.name}>{activeUser.fullName}</Text>
            <Text style={styles.badge}>{activeUser.supporterId}</Text>

            <View style={styles.infoRow}>
              <Ionicons name="call-outline" size={18} color="#7A7F87" />
              <Text style={styles.infoText}>{activeUser.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="mail-outline" size={18} color="#7A7F87" />
              <Text style={styles.infoText}>{activeUser.email}</Text>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>۱۲</Text>
                <Text style={styles.statLabel}>کمک‌های فعال</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>۳۸M</Text>
                <Text style={styles.statLabel}>مجموع حمایت ریالی</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={18} color="#fff" />
              <Text style={styles.logoutText}>خروج از حساب</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={32} color="#1A73E8" />
            </View>
            <Text style={styles.name}>به
               خوش آمدید</Text>
            <Text style={styles.subtitle}>
              برای مشاهده کیف پول، تراکنش‌ها و تاریخچه کمک‌ها لازم است وارد حساب
              شوید یا ثبت‌نام کنید.
            </Text>

            <View style={{ flexDirection: "row", width: "100%", marginTop: 12 }}>
              <TouchableOpacity
                style={[styles.authButton, { borderColor: "#1A73E8", borderWidth: 1 }]}
                onPress={() => handleAuthNavigation("(auth)/register")}
              >
                <Text style={[styles.authButtonText, { color: "#1A73E8" }]}>
                  ثبت‌نام
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.authButton, { backgroundColor: "#1A73E8", marginLeft: 12 }]}
                onPress={() => handleAuthNavigation("(auth)/login")}
              >
                <Text style={[styles.authButtonText, { color: "#fff" }]}>ورود</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>میانبرهای مفید</Text>
          {quickLinks.map((item) => (
            <TouchableOpacity key={item.title} style={styles.linkRow}>
              <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
                <View style={styles.linkIcon}>
                  <Ionicons name={item.icon} size={18} color="#1A73E8" />
                </View>
                <Text style={styles.linkTitle}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-back" size={20} color="#A0A4AB" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    alignItems: "flex-end",
    direction: "rtl",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.light.text,
  },
  headerSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#7A7F87",
  },
  card: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#1A73E8",
    fontSize: 20,
    fontWeight: "700",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.text,
  },
  badge: {
    marginTop: 6,
    fontSize: 13,
    color: "#1A73E8",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 13,
    color: "#7A7F87",
    textAlign: "center",
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 14,
    gap: 8,
  },
  infoText: {
    color: "#4A4D52",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 24,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#F4F6FB",
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1C1E",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#7A7F87",
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#E0E3E8",
  },
  logoutButton: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.light.secondary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },
  authButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  authButtonText: {
    fontWeight: "600",
    fontSize: 15,
  },
  section: {
    marginTop: 24,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1C1E",
    marginBottom: 12,
    textAlign: "right",
  },
  linkRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  linkIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  linkTitle: {
    color: "#1F2024",
    fontWeight: "600",
  },
});
