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
import LinearGradient from 'react-native-linear-gradient';

import { palette, flex, theme } from 'helpers';
import { Layout, BoundaryBox } from 'components';
import BackButton from 'components/BackButton';

import * as ActionImages from 'assets/action'; // todo: make it as svg
import AvatarImage from 'assets/avatar.png'; // todo: make it as svg

const CurrencyScreen = () => (
  <View style={theme.wrapper}>
    <LinearGradient
      style={styles.linearGradient}
      locations={[0, 0.75]}
      colors={[palette.flame, palette.koromiko]}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <SafeAreaView style={styles.androidStatusBar}>
        <Layout style={styles.container}>
          {/* Header */}
          <View style={[flex.row, flex.betweenCenter, theme.relative]}>
            <BackButton />
            
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle} pointerEvents="none">Bitcoin Wallet</Text>
            </View>

            <View style={flex.row}>
              <BoundaryBox>
                <FontAwesomeIcon style={styles.bellIcon} icon={faBell} color="#fff" />
              </BoundaryBox>
              <Image source={AvatarImage} style={styles.avatar} />
            </View>
          </View>

          {/* Info section */}
          <View>
            <View style={styles.infoContainer}>
              <BoundaryBox width={32} style={styles.bitcoinContainer}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>B</Text>
              </BoundaryBox>
              <View style={styles.balanceContainer}>
                <Text style={styles.balance}>0.000012</Text>
                <Text style={styles.currency}>btc</Text>
              </View>
            </View>

            <View style={styles.exchangeContainer}>
              <Text style={styles.exchangeText}>~ 12.64 usd</Text>
            </View>
          </View>
        </Layout>
      </SafeAreaView>
    </LinearGradient>

    {/* Action buttons */}
    <Layout>
      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <Image source={ActionImages.Send} style={{ position: 'relative', bottom: 4 }} />
          <Text style={styles.actionText}>Send</Text>
        </View>
        <View style={styles.action}>
          <Image source={ActionImages.Receive} style={{ position: 'relative', top: 4 }} />
          <Text style={styles.actionText}>Receive</Text>
        </View>
      </View>
    </Layout>
  </View>
);

const styles = StyleSheet.create({
  // Screen
  linearGradient: { paddingBottom: 72 },
  androidStatusBar: {
    paddingTop: StatusBar.currentHeight || 0, // todo: check it on Android
  },

  // Header 
  bellIcon: { fontSize: 16 },
  avatar: { marginLeft: 12 },
  headerTitleContainer: {
    ...theme.absolute,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: -1,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 24,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  // Info section
  infoContainer: {
    ...flex.row,
    ...flex.alignCenter,
    marginTop: 16,
  },
  bitcoinContainer: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
  },
  balanceContainer: {
    ...flex.row,
    ...flex.alignEnd,
  },
  balance: {
    fontSize: 32,
  lineHeight: 44,
    fontWeight: '600',
    color: '#fff',
  },
  currency: {
    marginLeft: 8,
    fontSize: 20,
    lineHeight: 38,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#fff',
  },
  exchangeContainer: {
    marginTop: 4,
    marginLeft: 44,
  },
  exchangeText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    color: palette.athens,
    textTransform: 'uppercase',
  },

  // Action
  actionContainer: {
    ...flex.row,
    marginTop: -24,
    marginHorizontal: -8,
  },
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


export default CurrencyScreen;
