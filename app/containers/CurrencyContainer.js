import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign, faRubleSign } from '@fortawesome/pro-regular-svg-icons';

import palette from 'helpers/palette';
import { BoundaryBox, Switcher } from 'components';
import CurrencyCell from 'components/Cell/CurrencyCell';

// todo: remove temporary DollarIcon plug
const DollarIcon = () => (
  <BoundaryBox width={32} style={{ backgroundColor: palette.emerald, borderRadius: 8 }}>
    <FontAwesomeIcon style={{ fontSize: 14 }} icon={faDollarSign} color="#fff" />
  </BoundaryBox>
);

// todo: remove temporary RubleIcon plug
const RubleIcon = () => (
  <BoundaryBox width={32} style={{ backgroundColor: palette.france, borderRadius: 8 }}>
    <FontAwesomeIcon style={{ fontSize: 14 }} icon={faRubleSign} color="#fff" />
  </BoundaryBox>
);

// todo: remove temporary MonetaIcon plug
const MonetaIcon = () => (
  <BoundaryBox width={32} style={{ backgroundColor: palette.tuna, borderRadius: 8 }}>
    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>M</Text>
  </BoundaryBox>
);

// todo: remove temporary BitcoinIcon plug
const BitcoinIcon = () => (
  <BoundaryBox width={32} style={{ backgroundColor: palette.orange, borderRadius: 8 }}>
    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>B</Text>
  </BoundaryBox>
);

const CurrencyContainer = () => {
  const [currency, setCurrency] = useState('Fiat');

  const handleCurrencyChange = (name) => {
    setCurrency(name);
  };

  const fiatList = (
    <View style={styles.currencyList}>
      <CurrencyCell title="US Dollar" value="253.12 USD" icon={<DollarIcon />} />
      <CurrencyCell title="Russian Ruble" value="13,543.16 RUB" icon={<RubleIcon />} note="~172.01 USD" />
    </View>
  );

  const cryptoList = (
    <View style={styles.currencyList}>
      <CurrencyCell title="MonetaX" value="5,333.000012 MNTX" icon={<MonetaIcon />} note="~1,261.01 USD" />
      <CurrencyCell title="Bitcoin" value="0.000012 BTC" icon={<BitcoinIcon />} note="~12.64 USD" />
    </View>
  );

  const renderList = () => {
    switch (currency) {
      case 'Crypto':
        return cryptoList;
      case 'Fiat':
      default:
        return fiatList;
    }
  }

  return (
    <View>
      <Switcher items={['Fiat', 'Crypto']} active={currency} onPress={handleCurrencyChange} />
      {renderList()}
    </View>
  )
};

const styles = StyleSheet.create({
  currencyList: { marginTop: 4 },
})


export default CurrencyContainer;
