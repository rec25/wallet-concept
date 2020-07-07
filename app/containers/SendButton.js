import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

import { flex, palette } from 'helpers';
import { Send as SendImage } from 'assets/action'; // todo: make it as svg

const SendButton = () => (
  <View style={styles.action}>
    <Image source={SendImage} style={{ position: 'relative', bottom: 4 }} />
    <Text style={styles.actionText}>Send</Text>
  </View>
);

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


export default SendButton;
