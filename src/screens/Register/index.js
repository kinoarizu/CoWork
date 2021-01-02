import React, { useState } from 'react';
import FitImage from 'react-native-fit-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap, Link, TextInput } from '../../components';
import {
  IcFacebook,
  IcGoogle,
  IcHidePassword,
  IcShowPassword,
  IcTwitter,
  ILRegister,
} from '../../assets';

const Register = ({ navigation }) => {
  const [visiblePassword, setVisiblePassowrd] = useState(false);
  const [visiblePasswordAgain, setVisiblePassowrdAgain] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILRegister} style={styles.cover} />
        <View style={styles.registerContainer}>
          <Text style={styles.title}>Welcome,{'\n'}Register To Access</Text>
          <Gap height={24} />
          <TextInput
            label="Name"
            placeholder="Your Full Name"
            keyboardType="email-address"
            value={null}
            onChangeText={(value) => {}}
          />
          <Gap height={12} />
          <TextInput
            label="Email"
            placeholder="Youremail@mail.com"
            keyboardType="email-address"
            value={null}
            onChangeText={(value) => {}}
          />
          <Gap height={12} />
          <TextInput
            label="Password"
            placeholder="Your secret password"
            value={null}
            onChangeText={(value) => {}}
            secureTextEntry={!visiblePassword}
            suffix={
              <Button
                type="btn-icon"
                icon={
                  visiblePassword ? (
                    <IcShowPassword width={22} height={22} />
                  ) : (
                    <IcHidePassword width={22} height={22} />
                  )
                }
                onPress={() => {
                  setVisiblePassowrd(!visiblePassword);
                }}
              />
            }
          />
          <Gap height={12} />
          <TextInput
            label="Password Again"
            placeholder="Your secret password again"
            value={null}
            onChangeText={(value) => {}}
            secureTextEntry={!visiblePasswordAgain}
            suffix={
              <Button
                type="btn-icon"
                icon={
                  visiblePasswordAgain ? (
                    <IcShowPassword width={22} height={22} />
                  ) : (
                    <IcHidePassword width={22} height={22} />
                  )
                }
                onPress={() => {
                  setVisiblePassowrdAgain(!visiblePasswordAgain);
                }}
              />
            }
          />
          <Gap height={54} />
          <Button
            title="Register"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => {}}
          />
          <Gap height={24} />
          <Text style={styles.textRegisterWith}>Register With</Text>
          <Gap height={24} />
          <View style={styles.socialContainer}>
            <Button
              type="btn-icon"
              height={25}
              icon={<IcGoogle />}
              onPress={() => {}}
            />
            <Gap width={30} />
            <Button
              type="btn-icon"
              height={25}
              icon={<IcFacebook />}
              onPress={() => {}}
            />
            <Gap width={30} />
            <Button
              type="btn-icon"
              height={25}
              icon={<IcTwitter />}
              onPress={() => {}}
            />
          </View>
          <Gap height={48} />
          <View style={styles.loginContainer}>
            <Text style={styles.textToLogin}>Already have an account? </Text>
            <Link
              title="Login"
              fontSize={12}
              fontFamily={fonts.primary[500]}
              color={colors.darkGreen}
              onPress={() => navigation.replace('Login')}
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
    backgroundColor: colors.white,
  },
  cover: {
    width: '100%',
    height: 120,
  },
  registerContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    lineHeight: 30,
  },
  textRegisterWith: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey3,
    textAlign: 'center',
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textToLogin: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey3,
  },
});

export default Register;
