import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { IcNext, ILBoard2 } from '../../assets';
import { colors, fonts } from '../../utils';
import { Button, OnBoardTitle } from '../../components';

const OnBoardingTwo = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILBoard2} style={styles.cover} />
        <View style={styles.onBoardContainer}>
          <OnBoardTitle titleOne="Find a Working" titleTwo="Space" />
          <View style={styles.onBoardAction}>
            <Text style={styles.onBoardSubtitle}>
              Find coworking space easily{'\n'}
              and quickly through this cool{'\n'}
              application by everyone
            </Text>
            <Button
              type="btn-icon"
              width={40}
              height={40}
              color={colors.darkBlue}
              onPress={() => navigation.navigate('OnBoardingThree')}
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

export default OnBoardingTwo;
