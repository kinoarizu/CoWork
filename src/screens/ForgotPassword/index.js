import React from 'react';
import FitImage from 'react-native-fit-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap, TextInput } from '../../components';
import { useForm } from '../../hooks';
import { ILForgotPassword } from '../../assets';

const ForgotPassword = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: '',
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage source={ILForgotPassword} style={styles.cover} />
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.title}>
            Forgot Pass,{'\n'}Let's Tell Your Email
          </Text>
          <Gap height={24} />
          <Text style={styles.resetPasswordInfo}>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
          <Gap height={24} />
          <TextInput
            label="Email"
            placeholder="Youremail@mail.com"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={147} />
          <Button
            title="Send Link"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => navigation.navigate('ResetPassword')}
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
  forgotPasswordContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  resetPasswordInfo: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey3,
    lineHeight: 18,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    lineHeight: 30,
  },
});

export default ForgotPassword;
