import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WatchlistScreen from './screens/WatchlistScreen';
import AddStockScreen from './screens/AddStockScreen';
import EditStockScreen from './screens/EditStockScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [stocks, setStocks] = useState([
    {
      id: '1',
      ticker: 'AAPL',
      name: 'Apple Inc.',
      targetPrice: '235',
      notes: 'Long-term hold',
    },
    {
      id: '2',
      ticker: 'VOO',
      name: 'Vanguard S&P 500 ETF',
      targetPrice: '605',
      notes: 'Core index exposure',
    },
  ]);

  const generateId = () => Date.now().toString();

  const addStock = (stock) => {
    const newStock = { id: generateId(), ...stock };
    setStocks((current) => [newStock, ...current]);
  };

  const updateStock = (id, updatedFields) => {
    setStocks((current) =>
      current.map((stock) =>
        stock.id === id ? { ...stock, ...updatedFields } : stock
      )
    );
  };

  const deleteStock = (id) => {
    setStocks((current) => current.filter((stock) => stock.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Watchlist" options={{ title: 'Stock Watchlist' }}>
          {(props) => (
            <WatchlistScreen
              {...props}
              stocks={stocks}
              onDeleteStock={deleteStock}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddStock" options={{ title: 'Add Stock' }}>
          {(props) => <AddStockScreen {...props} onAddStock={addStock} />}
        </Stack.Screen>

        <Stack.Screen name="EditStock" options={{ title: 'Edit Stock' }}>
          {(props) => (
            <EditStockScreen
              {...props}
              onUpdateStock={updateStock}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}