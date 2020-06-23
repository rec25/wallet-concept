import { StyleSheet } from 'react-native';

const flex = StyleSheet.create({
  wrap: { flexWrap: 'wrap' },
  alignStart: { alignItems: 'flex-start' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  betweenCenter: { alignItems: 'center', justifyContent: 'space-between' },
  center: { alignItems: 'center', justifyContent: 'center' },
});

export default flex;
