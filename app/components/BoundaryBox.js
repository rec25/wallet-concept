import React from 'react';
import { StyleSheet, View } from 'react-native';

import flex from 'helpers/flex';

// todo: describe prop types
const BoundaryBox = ({
  width = 24,
  height = width,
  style,
  onClick,
  children,
}) => (
  <View style={[flex.center, { ...style, width, height }]} onClick={onClick}>
    {children}
  </View>
);

export default BoundaryBox;
