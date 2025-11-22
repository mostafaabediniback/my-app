import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ServicePackage {
  title: string;
  description: string;
  stats: string;
}

interface ServicePackagesProps {
  packages: ServicePackage[];
}

export default function ServicePackages({ packages }: ServicePackagesProps) {
  return (
    <View style={styles.container}>
      {packages.map((pkg, index) => (
        <View key={pkg.title} style={styles.packageCard}>
          <View style={styles.packageHeader}>
            <View style={styles.packageInfo}>
              <Text style={styles.packageTitle}>{pkg.title}</Text>
              <Text style={styles.packageDescription}>{pkg.description}</Text>
            </View>
            <Ionicons name="chevron-back" size={22} color="#A0A4AB" />
          </View>
          <Text style={styles.packageStats}>{pkg.stats}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  packageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    direction: 'rtl',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 4,
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packageInfo: {
    flex: 1,
  },
  packageTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1C1E',
    marginBottom: 6,
  },
  packageDescription: {
    marginTop: 6,
    fontSize: 13,
    color: '#6D7075',
  },
  packageStats: {
    marginTop: 12,
    fontSize: 12,
    color: '#1A73E8',
  },
});

