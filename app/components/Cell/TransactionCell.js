import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faClock, faExclamationCircle } from '@fortawesome/pro-solid-svg-icons';

import { palette, flex, theme } from 'helpers/';

const propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  note: PropTypes.string,
  status: PropTypes.oneOf('done', 'pending', 'error').isRequired,
};

const defaultProps = {};

const BitcoinIcon = () => (
  <BoundaryBox width={32} style={{ backgroundColor: palette.orange, borderRadius: 8 }}>
    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>B</Text>
  </BoundaryBox>
);

const TransactionCell = ({
  image: Image,
  name,
  sub,
  value,
  note,
  status,
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'done':
        return <FontAwesomeIcon style={styles.statusIcon} icon={faCheckCircle} color={palette.emerald} />;
      case 'pending':
        return <FontAwesomeIcon style={styles.statusIcon} icon={faClock} color={palette.koromiko} />;
      case 'error':
        return <FontAwesomeIcon style={styles.statusIcon} icon={faExclamationCircle} color={palette.carnation} />;
      default:
        throw Error('Transaction status is required');
    }
  };

  const icon = <View style={styles.statusIconContainer}>{getStatusIcon()}</View>

  const statusTextColor = { ...status === 'error' && { color: palette.carnation } };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {Image}
        {icon}
      </View>
      <View style={styles.content}>
        <View style={[flex.row, flex.alignCenter]}>
          <View style={flex.justifyCenter}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.sub}>
              {`${sub} • `}
              <Text style={[styles.statusText, statusTextColor]}>{status}</Text>
            </Text>
          </View>
        </View>
        <View style={[flex.justifyCenter, flex.alignEnd]}>
          <Text style={styles.value}>{value}</Text>
          {note && <Text style={styles.note}>{note}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex.row,
    ...flex.alignCenter,
  },
  imageContainer: {
    marginRight: 16,
  },
  content: {
    ...flex.row,
    ...flex.betweenCenter,
    flexGrow: 1,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: palette.athens,
  },
  name: {
    fontSize: 13,
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
    lineHeight: 20,
    fontWeight: '600',
    color: palette.twilight,
  },
  note: {
    fontSize: 10,
    lineHeight: 16,
    color: palette.cadet,
  },
  statusIcon: {
    fontSize: 12,
  },
  statusIconContainer: {
    position: 'absolute',
    right: -6,
    bottom: -6,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  statusText: { textTransform: 'capitalize' },
});

TransactionCell.propTypes = propTypes;
TransactionCell.defaultProps = defaultProps;

export default TransactionCell;
