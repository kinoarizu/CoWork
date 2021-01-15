import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcBack } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const HeaderBar = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Button
        width={42}
        height={42}
        type="btn-icon"
        color={colors.lightGrey}
        icon={<IcBack width={20} height={20} />}
        onPress={navigation}
      />
      <Gap height={20} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: colors.darkBlue,
  },
});

export default HeaderBar;
