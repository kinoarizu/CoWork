import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcNext } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const OnBoardingSection = ({
  headTitle,
  footTitle,
  description,
  navigation,
}) => {
  return (
    <View style={styles.onBoardContainer}>
      <Text style={styles.onBoardHeadTitle}>
        {headTitle}
      </Text>
      <Text style={styles.onBoardFootTitle}>
        {footTitle}
      </Text>
      <Gap height={12} />
      <View style={styles.onBoardAction}>
        <Text style={styles.onBoardSubtitle}>
          {description}
        </Text>
        <Button
          type="btn-icon"
          width={40}
          height={40}
          color={colors.darkBlue}
          onPress={navigation}
          icon={<IcNext width={14} height={14} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  onBoardHeadTitle: {
    fontFamily: fonts.primary[500],
    fontSize: 28,
  },
  onBoardFootTitle: {
    fontFamily: fonts.primary[700],
    fontSize: 28,
  },
  onBoardSubtitle: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    lineHeight: 20,
    color: colors.grey2,
  },
  onBoardAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default OnBoardingSection;
