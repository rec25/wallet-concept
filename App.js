import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';
import CurrencyScreen from 'screens/CurrencyScreen';

const Stack = createStackNavigator();

const initialState = {
  currency: null,
  amount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CELL':
      return {
        ...state,
        ...action.payload, // currency: 'BTC', amount: 123,0123.23
      }
    default:
      throw new Error('Reducer error');
  };
}

const App = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const { currency } = state;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
