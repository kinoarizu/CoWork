import React, { useState } from 'react';
import FitImage from 'react-native-fit-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap, LabelTextInput } from '../../components';
import { useForm } from '../../hooks';
import { IcHidePassword, IcShowPassword, ILChangePassowrd } from '../../assets';

const ResetPassword = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePasswordAgain, setVisiblePasswordAgain] = useState(false);

  const [form, setForm] = useForm({
    password: '',
    confirmPassword: '',
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILChangePassowrd} 
          style={styles.cover} 
        />
        <View style={styles.resetPasswordContainer}>
          <Text style={styles.title}>
            Forgot Pass,{'\n'}Let's Tell Your Email
          </Text>
          <Gap height={24} />
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
          <Gap height={12} />
          <LabelTextInput
            label="Password Again"
            placeholder="Your Secret Password Again"
            value={form.confirmPassword}
            onChangeText={(value) => setForm('confirmPassword', value)}
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
                  setVisiblePasswordAgain(!visiblePasswordAgain);
                }}
              />
            }
          />
          <Gap height={132} />
          <Button
            title="Reset"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}
          />
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
  resetPasswordContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    lineHeight: 30,
  },
});

export default ResetPassword;
