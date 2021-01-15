import React, { useEffect, useState } from 'react';
import FitImage from 'react-native-fit-image';
import { useForm } from '../../hooks';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { IcHidePassword, IcShowPassword, ILLogin } from '../../assets';
import { colors, fonts, storeData } from '../../utils';
import {
  Button,
  Gap,
  Link,
  LabelTextInput,
  SocialAuthButton,
} from '../../components';

const Login = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    StatusBar.setHidden(false);
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILLogin} style={styles.cover} />
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Welcome,{'\n'}Please Login First</Text>
          <Gap height={24} />
          <LabelTextInput
            label="Email"
            placeholder="youremail@mail.com"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={12} />
          <LabelTextInput
            label="Password"
            placeholder="Your Secret Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
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
                  setVisiblePassword(!visiblePassword);
                }}
              />
            }
          />
          <Gap height={16} />
          <Link
            title="Forgot Password"
            fontSize={11}
            fontFamily={fonts.primary[300]}
            textAlign="right"
            color={colors.grey3}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
          <Gap height={54} />
          <Button
            title="Login"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => {
              storeData('isAuth', { value: true });
              navigation.replace('Main');
            }}
          />
          <SocialAuthButton
            page="Login"
            googleAction={() => {}}
            facebookAction={() => {}}
            twitterAction={() => {}}
          />
          <View style={styles.registerContainer}>
            <Text style={styles.textToRegsiter}>
              Don’t Have An Account yet?{' '}
            </Text>
            <Link
              title="Register"
              fontSize={12}
              fontFamily={fonts.primary[500]}
              color={colors.darkGreen}
              onPress={() => navigation.replace('Register')}
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
    height: 175,
  },
  loginContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    lineHeight: 30,
  },
  registerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textToRegsiter: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey3,
  },
});

export default Login;
