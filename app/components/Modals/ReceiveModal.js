import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Share,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { faQrcode, faCopy, faInfoCircle, faPlusCircle } from '@fortawesome/pro-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { flex, palette} from 'helpers';
import BoundaryBox from 'components/BoundaryBox';

const propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  isVisible: false,
};

const SendModal = ({ isVisible, onClose }) => {
  const [isAmountVisible, setAmountVisibility] = useState(false);

  const handleAmountVisibility = () => {
    setAmountVisibility(true);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'monetawallet/receive/3jks83kl2',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderAmountSection = () => {
    if (isAmountVisible) {
      return (
        <View style={{ marginBottom: 24 }}>
          <View style={[styles.inputContainer, { marginBottom: 16 }]}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Amount"
              placeholderTextColor={palette.cadet}
            />
            <Text style={styles.inputCurrency}>btc</Text>
          </View>

          <View style={[flex.row, flex.betweenCenter]}>
            <Text style={[styles.fee, styles.colorCadet]}>Fee:</Text>
            <Text style={[styles.text, styles.colorTwilight]}>0.00000000001 BTC</Text>
          </View>
        </View>
      );
    }

    return (
      <TouchableOpacity style={styles.amountMessageContainer} onPress={handleAmountVisibility}>
        <BoundaryBox style={{ marginRight: 8 }}>
          <FontAwesomeIcon size={16} icon={faPlusCircle} color={palette.lightslate} />
        </BoundaryBox>
        <Text style={styles.amountMessage}>Add requested amount</Text>
      </TouchableOpacity>
    );
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
          <Text style={styles.heading}>Receive funds</Text>

          <BoundaryBox width={144} style={styles.qrcodeContainer}>
            <FontAwesomeIcon size={144} icon={faQrcode} color={palette.lightslate} />
          </BoundaryBox>

          <Text style={styles.addressHeadingText}>Wallet address</Text>

          <View style={[flex.row, flex.center]}>
            <Text>45McNRgEXte93MG9pXuoBWYeWW</Text>
            <BoundaryBox style={{ marginLeft: 8 }}>
              <FontAwesomeIcon size={16} icon={faCopy} color={palette.lightslate} />
            </BoundaryBox>
          </View>

          <View style={styles.infoContainer}>
            <BoundaryBox style={{ marginRight: 8 }}>
              <FontAwesomeIcon size={16} icon={faInfoCircle} color={palette.cadet} />
            </BoundaryBox>
            <Text style={styles.infoText}>Use this address only for receiving Bitcoin BTC. Any other cryptocurrency sent to this address will not be credited.</Text>
          </View>

          {renderAmountSection()}
  
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={[styles.shareButtonText, styles.semibold]}>Share</Text>
            <BoundaryBox>
              <FontAwesomeIcon size={16} icon={faPaperPlane} color="#fff" />
            </BoundaryBox>
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
  
  qrcodeContainer: {
    marginBottom: 16,
    alignSelf: 'center',
  },

  addressHeadingText: {
    marginBottom: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 24,
    color: palette.twilight,
  },
  infoContainer: {
    ...flex.row,
    marginTop: 24,
    flexWrap: 'wrap',
  },
  infoText: {
    flex: 1,
    flexWrap: 'wrap',
    color: palette.cadet,
  },

  amountMessageContainer: {
    ...flex.row,
    ...flex.center,
    marginTop: 56,
    marginBottom: 24,
  },
  amountMessage: {
    fontSize: 14,
    lineHeight: 24,
    color: palette.lightslate,
  },

  shareButton: {
    ...flex.center,
    ...flex.row,
    alignSelf: 'center',
    marginVertical: 16,
    paddingHorizontal: 32,
    height: 48,
    backgroundColor: palette.lightslate,
    borderRadius: 12,
    shadowColor: palette.lightslate,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  shareButtonText: {
    marginRight: 8,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },

  // Input
  inputContainer: {
    ...flex.row,
    ...flex.alignCenter,
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 56,
    borderRadius: 12,
    backgroundColor: palette.athens,
  },
  inputCurrency: {
    paddingLeft: 16,
    fontSize: 16,
    color: palette.cadet,
    textTransform: 'uppercase',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  fee: {
    fontSize: 12,
    lineHeight: 20,
  },
  colorCadet: { color: palette.cadet },
  colorTwilight: { color: palette.twilight },
});

SendModal.propTypes = propTypes;
SendModal.defaultProps = defaultProps;

export default SendModal;
