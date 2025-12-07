import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import StockListItem from '../components/StockListItem';

const PRIMARY = '#00b289';
const TEXT_DARK = '#1f2933';
const TEXT_MUTED = '#7b8794';
const SCREEN_BG = '#f5f7fa';
const CARD_BG = '#ffffff';

export default function WatchlistScreen({ navigation, stocks, onDeleteStock }) {
  const renderItem = ({ item }) => (
    <StockListItem
      stock={item}
      onPress={() =>
        navigation.navigate('EditStock', {
          stock: item,
        })
      }
      onDelete={() => onDeleteStock(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Stock Watchlist</Text>
      <Text style={styles.subheading}>
        Track tickers, target prices, and notes for your portfolio ideas.
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Total Symbols</Text>
        <Text style={styles.summaryValue}>{stocks.length}</Text>
        <Text style={styles.summaryHint}>
          Tap a stock to edit it, or press the X to remove it.
        </Text>
      </View>

      <View style={styles.addButton}>
        <View style={styles.primaryButton}>
          <Button
            title="Add Stock"
            onPress={() => navigation.navigate('AddStock')}
            color={PRIMARY}
          />
        </View>
      </View>

      <FlatList
        data={stocks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Your watchlist is empty. Tap "Add Stock" to begin.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
    padding: 16,
  },
  heading: {
    color: TEXT_DARK,
    fontSize: 24,
    fontWeight: '700',
  },
  subheading: {
    color: TEXT_MUTED,
    fontSize: 13,
    marginBottom: 12,
  },
  summaryCard: {
    backgroundColor: CARD_BG,
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  summaryTitle: {
    color: TEXT_MUTED,
    fontSize: 13,
  },
  summaryValue: {
    color: PRIMARY,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 4,
  },
  summaryHint: {
    color: TEXT_MUTED,
    fontSize: 12,
    marginTop: 6,
  },
  addButton: {
    marginBottom: 8,
  },
  primaryButton: {
    borderRadius: 999,
    overflow: 'hidden',
  },
  empty: {
    color: TEXT_MUTED,
    marginTop: 24,
    textAlign: 'center',
  },
});