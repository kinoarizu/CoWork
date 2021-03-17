import React, { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { ILBoard1 } from '../../assets';
import { colors } from '../../utils';
import { OnBoardingSection } from '../../components';

const OnBoardingOne = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setHidden(false);
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILBoard1} 
          style={styles.cover} 
        />
        <OnBoardingSection
          headTitle="Welcome To"
          footTitle="Cowork"
          navigation={() => navigation.navigate('OnBoardingTwo')}
          description={`Work and organize events\nwithfriends outside the office\nto get rid of boredom`}
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
});

export default OnBoardingOne;
