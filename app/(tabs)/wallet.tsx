import useAuthStore from '@/store/useAuthStore';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AccessGate() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F7F8FA',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}
    >
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          padding: 24,
          alignItems: 'center',
          width: '100%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.08,
          shadowRadius: 16,
          elevation: 4,
        }}
      >
        <Ionicons name="wallet-outline" size={40} color="#1A73E8" />
        <Text
          style={{
            marginTop: 16,
            fontSize: 18,
            fontWeight: '700',
            color: '#1A1C1E',
            textAlign: 'center',
          }}
        >
          لطفاً ابتدا وارد شوید
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 13,
            color: '#7A7F87',
            textAlign: 'center',
          }}
        >
          برای مشاهده کیف پول و موجودی، وارد حساب کاربری خود شوید.
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/register')}
            style={{
              flex: 1,
              marginHorizontal: 6,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#1A73E8',
              paddingVertical: 12,
            }}
          >
            <Text style={{ textAlign: 'center', color: '#1A73E8', fontWeight: '600' }}>
              ثبت‌نام
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            style={{
              flex: 1,
              marginHorizontal: 6,
              borderRadius: 12,
              backgroundColor: '#1A73E8',
              paddingVertical: 12,
            }}
          >
            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}>
              ورود
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const walletActions = [
  { title: 'شارژ کیف پول', icon: 'add-circle-outline', color: '#1A73E8' },
  { title: 'برداشت', icon: 'remove-circle-outline', color: '#FF3B30' },
  { title: 'تاریخچه', icon: 'time-outline', color: '#34C759' },
  { title: 'تنظیمات', icon: 'settings-outline', color: '#8E8E93' },
];

const transactions = [
  {
    title: 'شارژ کیف پول',
    amount: '+2,500,000 ریال',
    date: 'امروز',
    type: 'charge',
  },
  {
    title: 'پرداخت صدقه',
    amount: '-500,000 ریال',
    date: 'دیروز',
    type: 'payment',
  },
  {
    title: 'شارژ کیف پول',
    amount: '+1,000,000 ریال',
    date: 'سه‌شنبه',
    type: 'charge',
  },
];

export default function WalletScreen() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <AccessGate />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>کیف پول</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#1A1C1E" />
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>موجودی کیف پول</Text>
          <Text style={styles.balanceAmount}>3,000,000 ریال</Text>
          <View style={styles.balanceActions}>
            {walletActions.map((action) => (
              <TouchableOpacity key={action.title} style={styles.actionButton}>
                <Ionicons name={action.icon as any} size={24} color={action.color} />
                <Text style={styles.actionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>تراکنش‌های اخیر</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>مشاهده همه</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionsList}>
            {transactions.map((transaction, index) => (
              <View
                key={index}
                style={[
                  styles.transactionItem,
                  index === transactions.length - 1 && styles.lastTransaction,
                ]}
              >
                <View style={styles.transactionIcon}>
                  <Ionicons
                    name={
                      transaction.type === 'charge'
                        ? 'arrow-down-circle'
                        : 'arrow-up-circle'
                    }
                    size={24}
                    color={transaction.type === 'charge' ? '#34C759' : '#FF3B30'}
                  />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>{transaction.title}</Text>
                  <View style={styles.transactionMeta}>
                    <Ionicons name="time-outline" size={14} color="#A0A4AB" />
                    <Text style={styles.transactionDate}>{transaction.date}</Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.transactionAmount,
                    transaction.type === 'charge' && styles.chargeAmount,
                  ]}
                >
                  {transaction.amount}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
    direction: 'rtl',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#7A7F87',
    marginBottom: 8,
    // textAlign: 'right',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1A73E8',
    marginBottom: 24,
    // textAlign: 'right',
  },
  balanceActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F4FB',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionText: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1C1E',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  seeAllText: {
    fontSize: 14,
    color: '#1A73E8',
    fontWeight: '500',
  },
  transactionsList: {
    marginTop: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F1F4',
  },
  lastTransaction: {
    borderBottomWidth: 0,
  },
  transactionIcon: {
    marginLeft: 12,
  },
  transactionInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1C1E',
    marginBottom: 4,
  },
  transactionMeta: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  transactionDate: {
    fontSize: 12,
    color: '#7A7F87',
    marginRight: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF3B30',
  },
  chargeAmount: {
    color: '#34C759',
  },
});
