import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Gap } from '../../components';
import { colors, fonts, getData } from '../../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor(colors.darkBlue);
    StatusBar.setBarStyle('light-content');

    setTimeout(() => {
      getData('tokenInfo').then((response) => {
        if (response && response.status) {
          navigation.replace('Main');
        } else {
          getData('onBoardFinish').then((response) => {
            if (response) {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            } else {
              navigation.replace('OnBoardingOne');
            }
          });
        }
      });
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Gap height={11} />
      <Text style={styles.title}>
        COWORK
      </Text>
      <Text style={styles.subtitle}>
        Why do you want to motivate yourself?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 30,
    color: colors.darkBlue,
    letterSpacing: 5.72,
  },
  subtitle: {
    position: 'absolute',
    bottom: 42,
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.grey1,
  },
});

export default Splash;
