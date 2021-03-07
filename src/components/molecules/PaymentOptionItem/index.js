import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const PaymentOptionItem = ({ title, image, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container(isSelected)}
      onPress={onPress}
    >
      <Text style={styles.title(isSelected)}>
        {title}
      </Text>
      <Image source={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (isSelected) => ({
    backgroundColor: isSelected ? colors.purple : colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 15,
    borderRadius: 10,
  }),
  title: (isSelected) => ({
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: isSelected ? colors.white : colors.grey8,
  }),
});

export default PaymentOptionItem;
