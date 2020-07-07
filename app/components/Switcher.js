import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import { palette, flex } from 'components/Cells/node_modules/helpers/';

const propTypes = {
  active: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
  children: PropTypes.node,
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  active: null,
  items: [],
  children: null,
};

const Switcher = ({
  active,
  items,
  children,
  onPress,
}) => {
  const handlePress = (name) => () => {
    onPress(name);
  };

  const renderList = () => {
    if (children) {
      return children;
    }

    return items.map((item) => {
      const isActive = item === active;
  
      return (
        <TouchableWithoutFeedback key={item} onPress={handlePress(item)}>
          <View style={[styles.item, isActive && styles.active]}>
            <Text style={isActive ? styles.activeColor : styles.defaultColor}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    });
  }

  return (
    <View style={styles.container}>
      {renderList()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...flex.row,
    padding: 4,
    borderRadius: 12,
    backgroundColor: palette.athens,
  },
  item: {
    ...flex.center,
    flex: 1,
    height: 32,
    fontSize: 14,
    color: palette.cadet,
    borderRadius: 12,
  },
  active: { backgroundColor: '#fff', color: '#000' },
  defaultColor: { color: palette.cadet },
  activeColor: { color: '#000' },
});

Switcher.propTypes = propTypes;
Switcher.defaultProps = defaultProps;

export default Switcher;
