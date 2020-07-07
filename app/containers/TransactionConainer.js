import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import { palette } from 'helpers';
import Switcher from 'components/Switcher';
import TransactionCell from 'components/Cell/TransactionCell';

const DateHeading = ({ text }) => <Text style={styles.date}>{text}</Text>;

const TransactionContainer = () => {
  const [view, setView] = useState('Transactions');

  const handleCurrencyChange = (name) => {
    setView(name);
  };

  const image = <Image style={styles.image} source={{ uri: 'https://picsum.photos/32/32' }} />;

  return (
    <View style={styles.container}>
      <Switcher items={['Transactions', 'Settings']} active={view} onPress={handleCurrencyChange} />
      <View>
        <DateHeading text="Yesterday" />
        <TransactionCell name="...xJw82" value="+ 0.0000012 BTC" sub="9:36 am" note="~12.01 USD" image={image} status="done" />
        <TransactionCell name="Super Store" value="- 0.0000137 BTC" sub="12:42 pm" note="~ 126.45 USD" image={image} status="pending" />

        <DateHeading text="Sunday, 20 Feb" />
        <TransactionCell name="...xJw23k" value="- 0.000212 BTC" sub="9:36 am" note="~126.45 USD" image={image} status="error" />
        
        <DateHeading text="Saturday, 19 Feb" />
        <TransactionCell name="Pizza Hut" value="- 0.0000137 BTC" sub="4:11 am" note="~ 126.45 USD" image={image} status="done" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  date: {
    marginTop: 16,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    color: palette.twilight,
  }
})


export default TransactionContainer;
