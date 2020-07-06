import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import BoundaryBox from 'components/BoundaryBox';

const propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const defaultProps = {
  onPress: null,
  style: {},
};

const CurrencyCell = ({ style, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={style} activeOpacity={0.75} onPress={onPress || navigation.goBack}>
      <BoundaryBox>
        <FontAwesomeIcon style={styles.arrowLeftIcon} icon={faArrowLeft} color="#fff" />
      </BoundaryBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowLeftIcon: { fontSize: 14 },
});

CurrencyCell.propTypes = propTypes;
CurrencyCell.defaultProps = defaultProps;

export default CurrencyCell;
