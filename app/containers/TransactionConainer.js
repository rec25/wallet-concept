import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Switcher from 'components/Switcher';
import TransactionCell from 'components/Cell/TransactionCell';

const TransactionContainer = () => {
  const [view, setView] = useState('Transactions');

  const handleCurrencyChange = (name) => {
    setView(name);
  };

  const image = <Image style={styles.image} source={{ uri: 'https://picsum.photos/32/32' }} />;

  return (
    <View style={styles.container}>
      <Switcher items={['Transactions', 'Settings']} active={view} onPress={handleCurrencyChange} />
      <View style={styles.transactionList}>
        <TransactionCell name="...xJw82" value="+ 0.0000012 BTC" sub="9:36 am" note="~12.01 USD" image={image} status="done" />
        <TransactionCell name="Super Store" value="- 0.0000137 BTC" sub="12:42 pm" note="~ 126.45 USD" image={image} status="pending" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  transactionList: { marginTop: 16 },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
})


export default TransactionContainer;
