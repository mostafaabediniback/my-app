import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface QuickAction {
  title: string;
  icon: IconName;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>دسترسی سریع</Text>
      <View style={styles.actionsGrid}>
        {actions.map((action) => (
          <TouchableOpacity key={action.title} style={styles.actionCard}>
            <View style={styles.iconContainer}>
              <Ionicons name={action.icon} size={20} color="#1A73E8" />
            </View>
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1C1E',
    marginBottom: 14,
    textAlign: 'right',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#F1F4FB',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  actionText: {
    color: '#1A1C1E',
    fontWeight: '600',
    fontSize: 14,
  },
});

