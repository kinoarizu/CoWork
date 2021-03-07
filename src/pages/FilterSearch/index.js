import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { typeRoomData } from '../../assets';
import { colors } from '../../utils';
import { useForm } from '../../hooks';
import {
  Button,
  Gap,
  SelectableBox,
  LabelTextInput,
  DatePicker,
  HeaderBar,
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
        <HeaderBar 
          title="Filter Search" 
          navigation={() => navigation.pop()} 
        />
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
          <DatePicker
            date={form.date}
            onDateChange={(value) => setForm('date', value)}
          />
          <Gap height={15} />
          <View style={styles.timePersonWrapper}>
            <LabelTextInput
              label="Time"
              placeholder="00.00 - 00.00"
              keyboardType="number-pad"
              backgroundColor={colors.white}
              validation=""
              mask={'[00].[00] - [00].[00] WIB'}
              value={form.time}
              onChangeText={(value) => setForm('time', value)}
            />
            <Gap width={20} />
            <LabelTextInput
              label="Room Capacity"
              placeholder="0 Person"
              keyboardType="number-pad"
              backgroundColor={colors.white}
              validation=""
              value={form.person}
              onChangeText={(value) => setForm('person', value)}
            />
          </View>
          <Gap height={54} />
          <Button
            title="Search Now"
            height={48}
            type="btn-text"
            color={colors.purple}
            onPress={() => {
              navigation.navigate('NearestSpace', { title: 'Filter Results' });
            }}
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
  typeRoomWrapper: {
    marginTop: 20,
    marginBottom: 15,
  },
  inputWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  timePersonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FilterSearch;
