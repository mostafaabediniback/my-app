import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UpcomingPayment {
  title: string;
  date: string;
  amount: string;
}

interface UpcomingPaymentsProps {
  payments: UpcomingPayment[];
}

export default function UpcomingPayments({ payments }: UpcomingPaymentsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>برداشت‌های برنامه‌ریزی شده</Text>
      {payments.map((item, index) => (
        <View
          key={index}
          style={[
            styles.paymentItem,
            index === payments.length - 1 && styles.lastItem,
          ]}
        >
          <View>
            <Text style={styles.paymentTitle}>{item.title}</Text>
            <Text style={styles.paymentDate}>{item.date}</Text>
          </View>
          <Text style={styles.paymentAmount}>{item.amount}</Text>
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1C1E',
    marginBottom: 12,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#F0F1F4',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  paymentTitle: {
    color: '#1A1C1E',
    fontWeight: '600',
    fontSize: 15,
  },
  paymentDate: {
    color: '#7A7F87',
    marginTop: 4,
    fontSize: 13,
  },
  paymentAmount: {
    color: '#1A73E8',
    fontWeight: '700',
    fontSize: 15,
  },
});

