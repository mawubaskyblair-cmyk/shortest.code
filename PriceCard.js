import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceCard = ({ item, style }) => {
  const price = item.price_per_kg || item.price_per_bird || item.price_per_crate;
  const unit = item.price_per_kg ? 'kg' : item.price_per_bird ? 'bird' : 'crate';

  return (
    <View style={[styles.card, style]}>
      <Text style={styles.poultryType}>{item.poultry_type.toUpperCase()}</Text>
      <Text style={styles.price}>UGX {(price ?? 0).toLocaleString()}</Text>
      <Text style={styles.unit}>per {unit}</Text>
      <Text style={styles.district}>{item.district}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  poultryType: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5,
  },
  district: {
    fontSize: 10,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default PriceCard;
