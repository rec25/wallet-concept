import palette from 'helpers/palette';
import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  wrapper: { backgroundColor: palette.alabaster, flexGrow: 1 },
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
});

export default theme;
