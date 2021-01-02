import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../utils';
import { Gap } from '../../atoms';

const OnBoardTitle = ({ titleOne, titleTwo }) => {
  return (
    <View>
      <Text style={styles.onBoardTitleOne}>{titleOne}</Text>
      <Text style={styles.onBoardTitleTwo}>{titleTwo}</Text>
      <Gap height={12} />
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardTitleOne: {
    fontFamily: fonts.primary[500],
    fontSize: 28,
  },
  onBoardTitleTwo: {
    fontFamily: fonts.primary[700],
    fontSize: 28,
  },
});

export default OnBoardTitle;
