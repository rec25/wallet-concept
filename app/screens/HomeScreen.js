import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { faBell } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Layout, BoundaryBox } from 'components';
import palette from 'helpers/palette';
import flex from 'helpers/flex';

import * as ActionImages from 'assets/action'; // todo: make it as svg
import MonetaWalletImage from 'assets/MonetaWallet.png'; // todo: make it as svg
import AvatarImage from 'assets/avatar.png'; // todo: make it as svg

// todo: investigate screen structure
const HomeScreen = () => (
  <View style={styles.linearGradient}>
    <SafeAreaView style={styles.androidStatusBar}>
      <Layout style={styles.container}>
        <View style={[flex.row, flex.betweenCenter]}>
          <Image source={MonetaWalletImage} />
          <View style={flex.row}>
            <BoundaryBox>
              <FontAwesomeIcon style={styles.bellIcon} icon={faBell} color="#fff" />
            </BoundaryBox>
            <Image source={AvatarImage} style={styles.avatar} />
          </View>
        </View>

        <Text style={styles.subTitle}>Est. Total Balance</Text>

        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>1,273.64</Text>
          <Text style={styles.currency}>usd</Text>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.actionContainer}>
            <View style={styles.menuItem}>
              <Image source={ActionImages.Buy} />
            </View>
            <Text style={styles.actionText}>Buy</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.menuItem}>
              <Image source={ActionImages.Sell} />
            </View>
            <Text style={styles.actionText}>Sell</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.menuItem}>
              <Image source={ActionImages.Pay} />
            </View>
            <Text style={styles.actionText}>Pay</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.menuItem}>
              <Image source={ActionImages.Send} />
            </View>
            <Text style={styles.actionText}>Send</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.menuItem}>
              <Image source={ActionImages.Receive} />
            </View>
            <Text style={styles.actionText}>Receive</Text>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  </View>
);

// todo: investigate component's styles describing
const styles = StyleSheet.create({
  linearGradient: {
    height: 400,
    backgroundColor: palette.lavender
  },
  androidStatusBar: {
    paddingTop: StatusBar.currentHeight || 0, // todo: check it on Android
  },
  bellIcon: {
    fontSize: 16,
  },
  avatar: { marginLeft: 12 },
  subTitle: {
    marginTop: 16,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  balance: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    includeFontPadding: false,
  },
  currency: {
    marginLeft: 8,
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
    includeFontPadding: false,
  },
  balanceContainer: {
    ...flex.row,
    ...flex.justifyCenter,
    ...flex.alignEnd,
    marginTop: 8,
    includeFontPadding: false,
  },
  menuContainer: {
    ...flex.row,
    ...flex.wrap,
    ...flex.justifyCenter,
    marginTop: 24,
    marginHorizontal: -7,
    padding: 16,
    paddingBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  actionContainer: { marginHorizontal: 7 },
  menuItem: {
    ...flex.center,
    marginBottom: 6,
    padding: 8,
    borderRadius: 12,
    backgroundColor: palette.whisper,
  },
  actionText: {
    fontSize: 10,
    textAlign: 'center',
    color: palette.lightslate,
  },
})


export default HomeScreen;
