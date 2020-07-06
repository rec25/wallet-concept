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
        </Layout>
      </SafeAreaView>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  linearGradient: { paddingBottom: 72 },
  androidStatusBar: {
    paddingTop: StatusBar.currentHeight || 0, // todo: check it on Android
  },
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
  }
})


export default CurrencyScreen;
