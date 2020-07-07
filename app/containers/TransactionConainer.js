import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Switcher from 'components/Switcher';

const TransactionContainer = () => {
  const [view, setView] = useState('Transactions');

  const handleCurrencyChange = (name) => {
    setView(name);
  };

  return (
    <View style={styles.container}>
      <Switcher items={['Transactions', 'Settings']} active={view} onPress={handleCurrencyChange} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
})


export default TransactionContainer;
