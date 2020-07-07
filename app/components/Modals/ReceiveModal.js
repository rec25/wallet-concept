import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';

import { flex, palette} from 'helpers';

const propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  isVisible: false,
};

const ReceiveModal = ({ isVisible, onClose }) => {
  const [amount, setAmount] = useState('0.00');

  const handleChange = (input) => {
    setAmount(input);
  };

  return (
    <View>
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        onSwipeComplete={onClose}
        swipeDirection="down"
        avoidKeyboard
        hideModalContentWhileAnimating
        onBackdropPress={onClose}
      >
        <View style={styles.contentWrapper}>
          <View style={flex.alignCenter}>
            <View style={styles.swipableMarker} />
          </View>
          <Text style={styles.heading}>Refill by VISA / MasterCard</Text>
  
          {/* Limits */}
          <View style={[flex.row, flex.betweenCenter, styles.textMargin]}>
            <Text style={[styles.text, styles.colorCadet]}>Transaction limit:</Text>
            <Text style={[styles.text, styles.colorTwilight]}>
              <Text style={styles.semibold}>60,000</Text> RUB
            </Text>
          </View>
          <View style={[flex.row, flex.betweenCenter, styles.textMargin]}>
            <Text style={[styles.text, styles.colorCadet]}>Monthly limit:</Text>
            <Text style={[styles.text, styles.colorTwilight]}>
              <Text style={styles.semibold}>576,000</Text> / 600,000 RUB
            </Text>
          </View>
  
          {/* Progress bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progress} />
          </View>
          {/* Progress bar */}
  
          <Text style={[styles.text, styles.colorCadet]}>
            Monthly limit will update after <Text style={[styles.text, styles.colorTwilight, styles.semibold]}>3 days</Text>
          </Text>
  
          {/* Balance */}
          <View style={styles.balanceContainer}>
            <Text style={[styles.label, styles.semibold]}>Amount</Text>
            <View style={flex.row}>
              <TextInput style={styles.input} value={amount} keyboardType="numeric" onChangeText={handleChange} />
              <Text style={[styles.inputCurrency, styles.colorCadet]}>rub</Text>
            </View>
          </View>
  
          <View style={[flex.row, flex.betweenCenter, styles.textMargin]}>
            <Text style={[styles.fee, styles.colorCadet]}>Fee:</Text>
            <Text style={[styles.text, styles.colorTwilight]}>0.00 RUB</Text>
          </View>
          <View style={[flex.row, flex.betweenCenter]}>
            <Text style={styles.totalAmount}>Total:</Text>
            <Text style={[styles.totalAmount, styles.semibold]}>{amount} RUB</Text>
          </View>
          <TouchableOpacity style={styles.continueButton} onPress={onClose}>
            <Text style={[styles.continueButtonText, styles.semibold]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    ...flex.justifyEnd,
    margin: 0,
  },
  contentWrapper: {
    padding: 16,
    paddingTop: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',
  },
  swipableMarker: {
    top: -8,
    marginBottom: 4,
    height: 5,
    width: 40,
    backgroundColor: palette.athens,
    borderRadius: 4,
  },
  heading: {
    marginBottom: 16,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center'
  },

  // Limits
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
  textMargin: { marginBottom: 8 },
  colorCadet: { color: palette.cadet },
  colorTwilight: { color: palette.twilight },
  semibold: { fontWeight: '600' },

  // Progress bar
  progressContainer: {
    marginVertical: 8,
    height: 6,
    borderRadius: 16,
    backgroundColor: palette.athens,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: palette.cadet,
    height: 6,
    width: 200,
  },

  // Balance
  balanceContainer: {
    marginTop: 24,
    marginBottom: 54,
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 12,
    borderRadius: 12,
    backgroundColor: palette.athens,
  },
  label: {
    fontSize: 10,
    lineHeight: 18,
    color: palette.cadet,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputCurrency: {
    paddingLeft: 16,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  fee: {
    fontSize: 12,
    lineHeight: 20,
  },
  totalAmount: {
    fontSize: 16,
    lineHeight: 24,
    color: palette.twilight,
  },
  continueButton: {
    ...flex.center,
    marginVertical: 16,
    height: 48,
    backgroundColor: palette.orange,
    borderRadius: 12,
    shadowColor: palette.orange,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 14,
  }
});

ReceiveModal.propTypes = propTypes;
ReceiveModal.defaultProps = defaultProps;

export default ReceiveModal;
