import React from 'react';
import FitImage from 'react-native-fit-image';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap } from '../../components';
import { useForm } from '../../hooks';
import { ILVerfication } from '../../assets';
import { useDispatch } from 'react-redux';
import { verificationAction } from '../../redux/action';

const Verification = ({ navigation }) => {
  const [form, setForm] = useForm({
    code: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(verificationAction(form.code, navigation));
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FitImage 
          source={ILVerfication} 
          style={styles.cover} 
        />
        <View style={styles.verificationContainer}>
          <Text style={styles.title}>
            Last Step,{'\n'}Enter Your Code
          </Text>
          <Gap height={24} />
          <Text style={styles.verificationInfo}>
            We have sent verification code to your 
            email, let's check your inbox, it will 
            be expired in 1 hour.
          </Text>
          <Gap height={36} />
          <SmoothPinCodeInput
            animated
            value={form.code}
            restrictToNumbers
            codeLength={4}
            cellSize={64}
            animationFocused={null}
            cellSpacing={20}
            containerStyle={styles.pinInputContainer}
            cellStyle={styles.cellStyle}
            cellStyleFocused={styles.cellStyleFocused}
            textStyle={styles.cellTextStyle}
            textStyleFocused={styles.cellTextStyleFocused}
            onTextChange={(value) => setForm('code', value)}
          />
          <Gap height={169} />
          <Button
            title="Verify"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => onSubmit()}
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
  verificationContainer: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 28,
  },
  verificationInfo: {
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
  pinInputContainer: {
    width: '100%',
    flex: 1,
  },
  cellStyle: {
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: colors.lightGrey,
  },
  cellStyleFocused: {
    borderWidth: 3,
  },
  cellTextStyle: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
  },
  cellTextStyleFocused: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
  },
});

export default Verification;
