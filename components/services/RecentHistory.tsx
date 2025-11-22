import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HistoryItem {
  title: string;
  amount: string;
  date: string;
}

interface RecentHistoryProps {
  history: HistoryItem[];
}

export default function RecentHistory({ history }: RecentHistoryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>سوابق اخیر شما</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>مشاهده همه</Text>
        </TouchableOpacity>
      </View>
      {history.map((item, index) => (
        <View
          key={index}
          style={[
            styles.historyItem,
            index === history.length - 1 && styles.lastItem,
          ]}
        >
          <View style={styles.historyInfo}>
            <Text style={styles.historyTitle}>{item.title}</Text>
            <Text style={styles.historyDate}>{item.date}</Text>
          </View>
          <Text style={styles.historyAmount}>{item.amount}</Text>
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
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  header: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1C1E',
  },
  seeAllText: {
    fontSize: 12,
    color: '#1A73E8',
  },
  historyItem: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#F0F1F4',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  historyInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  historyTitle: {
    color: '#1A1C1E',
    fontWeight: '600',
    fontSize: 15,
  },
  historyDate: {
    color: '#7A7F87',
    marginTop: 4,
    fontSize: 13,
  },
  historyAmount: {
    color: '#1A73E8',
    fontWeight: '700',
    fontSize: 15,
  },
});

