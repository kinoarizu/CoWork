import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const SelectableBox = ({ title, selected, index, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.box(selected, index)}
      onPress={onPress}
    >
      <Text style={styles.title(selected)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: (selected, index) => ({
    backgroundColor: selected ? colors.purple : colors.white,
    paddingHorizontal: 14,
    paddingVertical: 15,
    marginLeft: index === 'first' ? 20 : 0,
    marginRight: index === 'lase' ? 20 : 15,
    borderRadius: 4.5,
  }),
  title: (selected) => ({
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: selected ? colors.white : colors.grey2,
  }),
});

export default SelectableBox;
