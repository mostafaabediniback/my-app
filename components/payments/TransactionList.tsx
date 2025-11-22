import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Transaction {
  title: string;
  amount: string;
  status: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>تراکنش‌های اخیر</Text>
        <Text style={styles.downloadText}>دانلود گزارش</Text>
      </View>
      {transactions.map((item, index) => (
        <View
          key={index}
          style={[
            styles.transactionItem,
            index === transactions.length - 1 && styles.lastItem,
          ]}
        >
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <View style={styles.transactionMeta}>
              <Ionicons
                name="time-outline"
                size={14}
                color="#A0A4AB"
                style={{ marginLeft: 4 }}
              />
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.transactionAmount}>
            <Text
              style={[
                styles.amountText,
                item.amount.startsWith('-') && styles.negativeAmount,
              ]}
            >
              {item.amount}
            </Text>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1C1E',
  },
  downloadText: {
    fontSize: 12,
    color: '#1A73E8',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#F0F1F4',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionTitle: {
    fontWeight: '600',
    color: '#1A1C1E',
    marginBottom: 4,
  },
  transactionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  transactionDate: {
    color: '#7A7F87',
    fontSize: 12,
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    color: '#1A73E8',
    fontWeight: '700',
    fontSize: 15,
  },
  negativeAmount: {
    color: '#D32F2F',
  },
  statusText: {
    color: '#7A7F87',
    fontSize: 12,
    marginTop: 4,
  },
});

