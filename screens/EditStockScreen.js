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


export default function EditStockScreen({ navigation, route, onUpdateStock }) {
    const { stock } = route.params;

    const [ticker, setTicker] = useState(stock.ticker);
    const [name, setName] = useState(stock.name);
    const [targetPrice, setTargetPrice] = useState(stock.targetPrice);
    const [notes, setNotes] = useState(stock.notes || '');

    const handleSave = () => {
        if (!ticker.trim()) {
            Alert.alert('Missing ticker', 'Ticker cannot be empty.');
            return;
        }

        onUpdateStock(stock.id, {
            ticker: ticker.trim().toUpperCase(),
            name: name.trim() || ticker.trim().toUpperCase(),
            targetPrice: targetPrice.trim(),
            notes: notes.trim(),
        });

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Edit Stock</Text>
            <Text style={styles.subheading}> Update the details of this symbol in your watchlist.</Text>

            <TextInput style={styles.input} placeholder="Ticker" placeholderTextColor={TEXT_MUTED} value={ticker} onChangeText={setTicker}/>
            <TextInput style={styles.input} placeholder="Company Name" placeholderTextColor={TEXT_MUTED} value={name} onChangeText={setName}/>
            <TextInput style={styles.input} placeholder="Target Price" placeholderTextColor={TEXT_MUTED} keyboardType="numeric" value={targetPrice} onChangeText={setTargetPrice}/>
            <TextInput style={[styles.input, styles.notesInput]} placeholder="Notes" placeholderTextColor={TEXT_MUTED} value={notes} onChangeText={setNotes} multiline/>

            <View style={styles.primaryButton}>
                <Button title="Save Changes" onPress={handleSave} color={PRIMARY} />
            </View>
        </View>
    );
}