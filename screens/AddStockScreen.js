import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

const PRIMARY = '#00b289';
const TEXT_DARK = '#1f2933';
const TEXT_MUTED = '#7b8794';
const SCREEN_BG = '#f5f7fa';
const CARD_BORDER = '#d0d7e2';

export default function AddStockScreen({ navigation, onAddStock }) {
  const [ticker, setTicker] = useState('');
  const [name, setName] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    if (!ticker.trim()) {
        Alert.alert('Missing ticker', 'Please enter a stock ticker symbol.');
        return;
    }

    onAddStock({
      ticker: ticker.trim().toUpperCase(),
      name: name.trim() || ticker.trim().toUpperCase(),
      targetPrice: targetPrice.trim(),
      notes: notes.trim(),
    });

    navigation.goBack();

    
  };

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Add Stock</Text>
        <Text style={styles.subheading}> Add a new symbol to your watchlist with a target price and notes.</Text>

        <TextInput style={styles.input} placeholder="Ticker (e.g. AAPL)" placeholderTextColor={TEXT_MUTED} value={ticker} onChangeText={setTicker}/>
        <TextInput style={styles.input} placeholder="Company Name (optional)" placeholderTextColor={TEXT_MUTED} value={name} onChangeText={setName}/>
        <TextInput style={styles.input} placeholder="Target Price (optional)" placeholderTextColor={TEXT_MUTED} keyboardType="numeric" value={targetPrice} onChangeText={setTargetPrice}/>
        <TextInput style={[styles.input, styles.notesInput]} placeholder="Notes (optional)" placeholderTextColor={TEXT_MUTED} value={notes} onChangeText={setNotes} multiline/>

        <View style={styles.primaryButton}>
            <Button title="Save" onPress={handleSave} color={PRIMARY} />
        </View>
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
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  subheading: {
    color: TEXT_MUTED,
    fontSize: 13,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    color: TEXT_DARK,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    marginBottom: 12,
  },
  notesInput: {
    height: 90,
    textAlignVertical: 'top',
  },
  primaryButton: {
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 4,
  },
});