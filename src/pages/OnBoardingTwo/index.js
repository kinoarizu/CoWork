import React from 'react';
import FitImage from 'react-native-fit-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ILBoard2 } from '../../assets';
import { colors, fonts } from '../../utils';
import { OnBoardingSection } from '../../components';

const OnBoardingTwo = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILBoard2} 
          style={styles.cover} 
        />
        <OnBoardingSection
          headTitle="Find a Working"
          footTitle="Space"
          navigation={() => navigation.navigate('OnBoardingThree')}
          description={`Find coworking space easily\nand quickly through this cool\napplication by everyone`}
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

export default OnBoardingTwo;
