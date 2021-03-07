import React, { useState } from 'react';
import FitImage from 'react-native-fit-image';
import EmailValidator from 'email-validator';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { colors, fonts } from '../../utils';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IcHidePassword, IcShowPassword, ILRegister } from '../../assets';
import { checkEmailAction } from '../../redux/action';
import {
  Button,
  Gap,
  Link,
  LabelTextInput,
  SocialAuthButton,
} from '../../components';

const Register = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePasswordAgain, setVisiblePasswordAgain] = useState(false);

  const dispatch = useDispatch();

  const [validation, setValidation] = useState({
    errorName: null,
    errorEmail: null,
    errorPassword: null,
    errorPasswordConfirmation: null,
  });

  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const onSubmit = () => {
    dispatch(checkEmailAction(form, navigation));
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILRegister} 
          style={styles.cover} 
        />
        <View style={styles.registerContainer}>
          <Text style={styles.title}>
            Welcome,{'\n'}Register To Access
          </Text>
          <Gap height={24} />
          <LabelTextInput
            label="Name"
            placeholder="Your Awesome Name"
            value={form.name}
            validation={validation.errorName}
            onChangeText={(value) => {
              setForm('name', value);
              if (value.length === 0) {
                setValidation({
                  ...validation,
                  errorName: 'Name Must Be Required',
                });
              } else {
                setValidation({
                  ...validation,
                  errorName: '',
                });
              }
            }}
          />
          <Gap height={12} />
          <LabelTextInput
            label="Email"
            placeholder="youremail@mail.com"
            keyboardType="email-address"
            value={form.email}
            validation={validation.errorEmail}
            onChangeText={(value) => {
              setForm('email', value);
              if (value.length === 0) {
                setValidation({
                  ...validation,
                  errorEmail: 'Email Address Must Be Required',
                });
              } else if (!EmailValidator.validate(value)) {
                setValidation({
                  ...validation,
                  errorEmail: 'Email Address Is Not Valid',
                });
              } else {
                setValidation({
                  ...validation,
                  errorEmail: '',
                });
              }
            }}
          />
          <Gap height={12} />
          <LabelTextInput
            label="Password"
            placeholder="Your Secret Password"
            value={form.password}
            secureTextEntry={!visiblePassword}
            validation={validation.errorPassword}
            onChangeText={(value) => {
              setForm('password', value);
              if (value.length === 0) {
                setValidation({
                  ...validation,
                  errorPassword: 'Password Must Be Required',
                });
              } else if (value.length < 8) {
                setValidation({
                  ...validation,
                  errorPassword: "Password Can't Less Than 8 Characters",
                });
              } else if (
                !value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
              ) {
                setValidation({
                  ...validation,
                  errorPassword: "Password At Least 1 Letter and 1 Number",
                });
              } else {
                setValidation({
                  ...validation,
                  errorPassword: '',
                });
              }
            }}
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
          <Gap height={12} />
          <LabelTextInput
            label="Password Again"
            placeholder="Your Secret Password Again"
            value={form.passwordConfirmation}
            secureTextEntry={!visiblePasswordAgain}
            validation={validation.errorPasswordConfirmation}
            onChangeText={(value) => {
              setForm('passwordConfirmation', value);
              if (value.length === 0) {
                setValidation({
                  ...validation,
                  errorPasswordConfirmation: 'Confirm Password Must Be Required',
                });
              } else if (value !== form.password) {
                setValidation({
                  ...validation,
                  errorPasswordConfirmation: 'Confirm Password Is Not Match',
                });
              } else {
                setValidation({
                  ...validation,
                  errorPasswordConfirmation: '',
                });
              }
            }}
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
                  setVisiblePasswordAgain(!visiblePasswordAgain);
                }}
              />
            }
          />
          <Gap height={54} />
          <Button
            title="Next Step"
            height={48}
            type="btn-text"
            onPress={() => onSubmit()}
            disable={
              validation.errorName !== '' ||
              validation.errorEmail !== '' ||
              validation.errorPassword !== '' ||
              validation.errorPasswordConfirmation !== ''
            }
            color={
              validation.errorName !== '' ||
              validation.errorEmail !== '' ||
              validation.errorPassword !== '' ||
              validation.errorPasswordConfirmation !== ''
              ? colors.white
              : colors.purple
            }
          />
          <SocialAuthButton
            page="Register"
            googleAction={() => {}}
            facebookAction={() => {}}
            twitterAction={() => {}}
          />
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
