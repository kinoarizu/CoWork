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
  borderRadius,
  disable,
  onPress,
}) => {
  if (type === 'btn-text') {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonText(color, height, borderRadius)}
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
        style={styles.buttonIcon(color, width, height, borderRadius)}
        onPress={onPress}
      >
        {icon}
      </TouchableOpacity>
    );
  }

  if (disable) {
    return (
      <TouchableOpacity
        style={styles.disabledButtonText(height, borderRadius)}
        onPress={onPress}
        disabled
      >
        <Text style={styles.titleButton}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  buttonText: (color, height, borderRadius) => ({
    height,
    backgroundColor: color,
    borderRadius: borderRadius ? borderRadius : 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  titleButton: (textColor) => ({
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: textColor == null ? colors.white : textColor,
  }),
  buttonIcon: (color, width, height, borderRadius) => ({
    width,
    height,
    backgroundColor: color,
    borderRadius: borderRadius ? borderRadius : 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  disabledButtonText: (height, borderRadius) => ({
    height,
    backgroundColor: colors.disableGrey,
    borderRadius: borderRadius ? borderRadius : 8,
  }),
});

export default Button;
