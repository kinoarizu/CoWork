import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Badge = ({ type }) => {
  if (type === 'Full') {
    return (
      <View style={styles.container(type)}>
        <Text style={styles.title}>{type}</Text>
      </View>
    );
  }

  if (type === 'Available') {
    return (
      <View style={styles.container(type)}>
        <Text style={styles.title}>{type}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: (type) => ({
    alignSelf: 'flex-start',
    backgroundColor: type === 'Available' ? colors.purple : colors.red1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3.6,
  }),
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.white,
  },
});

export default Badge;
