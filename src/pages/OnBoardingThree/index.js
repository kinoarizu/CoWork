import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { ILBoard3 } from '../../assets';
import { OnBoardingSection } from '../../components';
import { colors, fonts, storeData } from '../../utils';

const OnBoardingThree = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILBoard3} 
          style={styles.cover} 
        />
        <OnBoardingSection
          headTitle="Create An"
          footTitle="Event"
          description={`Create your event by determining\nthe place that has been provided\nbe comfortable`}
          navigation={() => {
            storeData('onBoardFinish', { value: true });
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  cover: {
    width: '100%',
    height: 400,
  },
  onBoardContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
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

export default OnBoardingThree;
