import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors, fonts, showError } from '../../utils';
import { monthData } from '../../assets';
import { useForm } from '../../hooks';
import {
  Button,
  Gap,
  ImageUpload,
  Picker,
  LabelTextInput,
  HeaderBar,
} from '../../components';

const EditProfile = ({ route, navigation }) => {
  const [form, setForm] = useForm({
    name: route.params.name,
    email: route.params.email,
    date: route.params.date,
    month: route.params.month,
    year: route.params.year,
    photo: { uri: route.params.photo },
    cover: { uri: route.params.cover },
  });

  const generateDates = () => {
    let dates = [];

    for (let i = 1; i <= 31; i++) {
      dates.push({ label: i.toString(), value: i.toString() });
    }

    return dates;
  };

  const generateYears = () => {
    let years = [];
    let date = new Date();

    for (let i = date.getFullYear() - 40; i <= date.getFullYear(); i++) {
      years.push({ label: i.toString(), value: i.toString() });
    }

    return years;
  };

  const addPhotoProfile = () => {
    if (form.photo === '') {
      launchImageLibrary(
        { quality: 0.5, maxWidth: 200, maxHeight: 200 },
        (response) => {
          if (response.didCancel || response.error) {
            showError('Oops, You cancelled pick image!');
          } else {
            const source = { uri: response.uri };
            setForm('photo', source);
          }
        },
      );
    } else {
      setForm('photo', '');
    }
  };

  const addCover = () => {
    if (form.cover === '') {
      launchImageLibrary(
        { quality: 0.5, maxWidth: 200, maxHeight: 200 },
        (response) => {
          if (response.didCancel || response.error) {
            showError('Oops, You cancelled pick image!');
          } else {
            const source = { uri: response.uri };
            setForm('cover', source);
          }
        },
      );
    } else {
      setForm('cover', '');
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar title="Edit Profile" navigation={navigation} />
        <View style={styles.formWrapper}>
          <LabelTextInput
            label="Your Name"
            placeholder="Your Real Name"
            validation=""
            backgroundColor={colors.white}
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={15} />
          <LabelTextInput
            label="Email"
            placeholder="youremail@gmail.com"
            validation=""
            backgroundColor={colors.white}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={15} />
          <View>
            <View style={styles.labelValidationWrapper}>
              <Text style={styles.birthLabel}>Date Of Birth</Text>
              <Text style={styles.birthValidation}></Text>
            </View>
            <Gap height={11} />
            <View style={styles.pickerWrapper}>
              <Picker
                placeholder={{ label: 'Date' }}
                items={generateDates()}
                value={form.date}
                onValueChange={(value) => setForm('date', value)}
              />
              <Gap width={10} />
              <Picker
                flex={2}
                placeholder={{ label: 'Month' }}
                items={monthData}
                value={form.month}
                onValueChange={(value) => setForm('month', value)}
              />
              <Gap width={10} />
              <Picker
                placeholder={{ label: 'Year' }}
                items={generateYears()}
                value={form.year}
                onValueChange={(value) => setForm('year', value)}
              />
            </View>
          </View>
          <Gap height={15} />
          <ImageUpload
            width={75}
            height={75}
            label="Upload Photo Profile"
            photo={form.photo}
            onPress={addPhotoProfile}
          />
          <Gap height={15} />
          <ImageUpload
            width="95%"
            height="80%"
            label="Upload Cover"
            photo={form.cover}
            onPress={addCover}
          />
          <Gap height={54} />
          <Button
            title="Update Profile"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => navigation.pop()}
          />
          <Gap height={4} />
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
  formWrapper: {
    padding: 20,
  },
  labelValidationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  birthLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  birthValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
  pickerWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default EditProfile;
