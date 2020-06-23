import React from 'react';
import { StyleSheet, View } from 'react-native';

// todo: describe prop types
// todo: extend prop styles
const Layout = ({ children }) => <View style={styles.layout}>{children}</View>;

const styles = StyleSheet.create({
  layout: {
    paddingLeft: 16,
    paddingRight: 16,
  }
})


export default Layout;
