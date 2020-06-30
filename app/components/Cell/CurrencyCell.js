import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { palette, flex } from 'helpers/';

const propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  note: PropTypes.string,
};

const defaultProps = {};

const CurrencyCell = ({
  icon: Icon,
  title,
  sub,
  value,
  note,
}) => {
  return (
    <View style={styles.container}>
      <View style={[flex.row, flex.alignCenter]}>
        <View style={styles.iconContainer}>{Icon}</View>
        <View style={flex.justifyCenter}>
          <Text style={styles.title}>{title}</Text>
          {sub && <Text style={styles.sub}>{sub}</Text>}
        </View>
      </View>
      <View style={[flex.justifyCenter, flex.alignEnd]}>
        <Text style={styles.value}>{value}</Text>
        {note && <Text style={styles.note}>{note}</Text>}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...flex.row,
    ...flex.betweenCenter,
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',

    shadowColor: palette.haiti,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    color: palette.twilight,
  },
  sub: {
    fontSize: 10,
    lineHeight: 18,
    color: palette.cadet,
  },
  value: {
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '600',
    color: palette.twilight,
  },
  note: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 16,
    color: palette.cadet,
  },
});

CurrencyCell.propTypes = propTypes;
CurrencyCell.defaultProps = defaultProps;

export default CurrencyCell;
