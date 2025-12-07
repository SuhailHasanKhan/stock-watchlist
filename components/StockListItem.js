import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PRIMARY = '#00b289';
const TEXT_DARK = '#1f2933';
const TEXT_MUTED = '#7b8794';
const CARD_BG = '#ffffff';

export default function StockListItem({ stock, onPress, onDelete }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.ticker}>{stock.ticker}</Text>
        <Text style={styles.name}>{stock.name}</Text>
        <Text style={styles.notes}>
          Target: {stock.targetPrice ? `$${stock.targetPrice}` : '—'} •{' '}
          {stock.notes || 'No notes'}
        </Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: CARD_BG,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  ticker: {
    color: PRIMARY,
    fontWeight: '700',
    fontSize: 18,
  },
  name: {
    color: TEXT_DARK,
    fontSize: 14,
  },
  notes: {
    color: TEXT_MUTED,
    fontSize: 12,
    marginTop: 2,
  },
  delete: {
    color: '#d64545',
    fontSize: 18,
    marginLeft: 10,
  },
});