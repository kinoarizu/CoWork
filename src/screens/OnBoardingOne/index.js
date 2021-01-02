import React, { useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { IcNext, ILBoard1 } from '../../assets';
import { colors, fonts } from '../../utils';
import { Button, OnBoardTitle } from '../../components';

const OnBoardingOne = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setHidden(false);
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILBoard1} style={styles.cover} />
        <View style={styles.onBoardContainer}>
          <OnBoardTitle titleOne="Welcome To" titleTwo="Cowork" />
          <View style={styles.onBoardAction}>
            <Text style={styles.onBoardSubtitle}>
              Work and organize events with{'\n'}
              friends outside the office to get{'\n'}
              rid of boredom
            </Text>
            <Button
              type="btn-icon"
              width={40}
              height={40}
              color={colors.darkBlue}
              onPress={() => navigation.navigate('OnBoardingTwo')}
              icon={<IcNext width={14} height={14} />}
            />
          </View>
        </View>
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

export default OnBoardingOne;
