import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IcBack, typeRoomData } from '../../assets';
import { colors, fonts } from '../../utils';
import { useForm } from '../../hooks';
import {
  Button,
  Gap,
  SelectableBox,
  LabelTextInput,
  DatePicker,
} from '../../components';

const FilterSearch = ({ navigation }) => {
  const [form, setForm] = useForm({
    type: [],
    location: '',
    range: '',
    date: '',
    time: '',
    person: '',
  });

  const onSelectBox = (value) => {
    if (form.type.includes(value)) {
      setForm(
        'type',
        form.type.filter((item) => item !== value),
      );
    } else {
      setForm('type', [...form.type, value]);
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Button
            width={42}
            height={42}
            type="btn-icon"
            color={colors.lightGrey}
            icon={<IcBack width={20} height={20} />}
            onPress={() => navigation.pop()}
          />
          <Gap height={20} />
          <Text style={styles.title}>Search Room</Text>
        </View>
        <View style={styles.typeRoomWrapper}>
          <FlatList
            horizontal
            data={typeRoomData}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <SelectableBox
                title={item.name}
                selected={form.type.includes(item.name)}
                index={
                  index == 0
                  ? 'first'
                  : index == typeRoomData.length - 1
                  ? 'last'
                  : null
                }
                onPress={() => onSelectBox(item.name)}
              />
            )}
          />
        </View>
        <View style={styles.inputWrapper}>
          <LabelTextInput
            label="Location"
            placeholder="Enter Keyword Location"
            backgroundColor={colors.white}
            validation=""
            value={form.location}
            onChangeText={(value) => setForm('location', value)}
          />
          <Gap height={15} />
          <LabelTextInput
            label="Range"
            placeholder="Enter Range (In Kilometer)"
            keyboardType="number-pad"
            backgroundColor={colors.white}
            validation=""
            value={form.range}
            onChangeText={(value) => setForm('range', value)}
          />
          <Gap height={15} />
          <View style={{ flex: 1 }}>
            <View style={styles.labelValidationWrapper}>
              <Text style={styles.dateLabel}>Date</Text>
              <Text style={styles.dateValidation}></Text>
            </View>
            <Gap height={11} />
            <DatePicker
              date={form.date}
              onDateChange={(value) => setForm('date', value)}
            />
          </View>
          <Gap height={15} />
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
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: colors.darkBlue,
  },
  typeRoomWrapper: {
    marginTop: 20,
    marginBottom: 15,
  },
  inputWrapper: {
    marginHorizontal: 20,
  },
  labelValidationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  dateValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
});

export default FilterSearch;
