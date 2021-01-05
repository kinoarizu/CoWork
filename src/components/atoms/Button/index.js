import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const Button = ({
  title,
  icon,
  color,
  textColor,
  width,
  height,
  type,
  disable,
  onPress,
}) => {
  if (type === 'btn-text') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonText(color, height)}
        onPress={onPress}
      >
        <Text style={styles.titleButton(textColor)}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'btn-icon') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonIcon(color, width, height)}
        onPress={onPress}
      >
        {icon}
      </TouchableOpacity>
    );
  }

  if (disable) {
    return (
      <TouchableOpacity
        style={styles.disabledButtonText(height)}
        onPress={onPress}
        disabled
      >
        <Text style={styles.titleButton}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  buttonText: (color, height) => ({
    height,
    backgroundColor: color,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  titleButton: (textColor) => ({
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: textColor == null ? colors.white : textColor,
  }),
  buttonIcon: (color, width, height) => ({
    width,
    height,
    backgroundColor: color,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  disabledButtonText: (height) => ({
    height,
    backgroundColor: colors.disableGrey,
    borderRadius: 8,
  }),
});

export default Button;
