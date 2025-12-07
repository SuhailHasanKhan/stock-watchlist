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