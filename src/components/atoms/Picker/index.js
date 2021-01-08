import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../utils';

const Picker = ({ flex, placeholder, items, value, onValueChange }) => {
  return (
    <View style={styles.container(flex)}>
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        value={value}
        onValueChange={onValueChange}
        style={pickerStyle}
      />
    </View>
  );
};

const pickerStyle = {
  inputAndroid: {
    paddingLeft: 20,
    color: colors.black,
  },
};

const styles = StyleSheet.create({
  container: (flex) => ({
    flex: flex ? flex : 1,
    paddingHorizontal: 6,
    backgroundColor: colors.white,
    borderRadius: 7.25,
  }),
});

export default Picker;
