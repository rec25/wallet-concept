import React, { useState } from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { flex, palette } from 'helpers';
import ReceiveModal from 'components/Modals/ReceiveModal';
import { Receive as ReceiveImage } from 'assets/action'; // todo: make it as svg

const ReceiveButton = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const handleModalToggle = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <TouchableOpacity style={styles.action} activeOpacity={0.95} onPress={handleModalToggle}>
      <Image source={ReceiveImage} style={{ position: 'relative', top: 4 }} />
      <Text style={styles.actionText}>Receive</Text>
      <ReceiveModal isVisible={isModalVisible} onClose={handleModalToggle} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  action: {
    ...flex.row,
    ...flex.center,
    flex: 1,
    marginHorizontal: 8,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#fff',

    shadowColor: palette.orange,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  actionText: {
    marginLeft: 8,
    color: palette.orange,
    fontSize: 14,
    fontWeight: '600',
  },
})


export default ReceiveButton;
