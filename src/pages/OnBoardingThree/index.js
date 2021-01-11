import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import { IcNext, ILBoard3 } from '../../assets';
import { colors, fonts, storeData } from '../../utils';
import { Button, OnBoardTitle } from '../../components';

const OnBoardingThree = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILBoard3} style={styles.cover} />
        <View style={styles.onBoardContainer}>
          <OnBoardTitle titleOne="Create An" titleTwo="Event" />
          <View style={styles.onBoardAction}>
            <Text style={styles.onBoardSubtitle}>
              Create your event by determining{'\n'}
              the place that has been provided{'\n'}
              be comfortable
            </Text>
            <Button
              type="btn-icon"
              width={40}
              height={40}
              color={colors.darkBlue}
              icon={<IcNext width={14} height={14} />}
              onPress={() => {
                storeData('onBoardFinish', { value: true });
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }}
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

export default OnBoardingThree;
