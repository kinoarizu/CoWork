import React from 'react';
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native';
import { Gap } from '..';
import { colors, fonts } from '../../../utils';

const TextInput = ({
  label,
  validation,
  placeholder,
  suffix,
  ...restProps
}) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorValidation}>{validation}</Text>
      </View>
      <Gap height={11} />
      <View style={styles.inputContainer}>
        <TextInputRN
          disableFullscreenUI
          style={styles.input}
          placeholder={placeholder}
          autoCapitalize="none"
          {...restProps}
        />
        {suffix}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  errorValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 14,
    backgroundColor: colors.lightGrey,
    borderRadius: 7.25,
  },
  input: {
    flex: 1,
    fontFamily: fonts.primary[300],
  },
});

export default TextInput;
