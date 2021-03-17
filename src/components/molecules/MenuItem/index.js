import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const MenuItem = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.buttonContainer}
      onPress={onPress}
    >
      {icon}
      <Gap height={10} />
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 10,
    color: colors.darkBlue,
  },
});

export default MenuItem;
