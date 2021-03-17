import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap } from '..';
import { colors, fonts } from '../../../utils';

const InfoItem = ({ icon, info }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Gap width={7.7} />
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  info: {
    fontFamily: fonts.primary[300],
    fontSize: 8,
    color: colors.darkBlue,
  },
});

export default InfoItem;
