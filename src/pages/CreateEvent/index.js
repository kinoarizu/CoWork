import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useForm } from '../../hooks';
import { colors } from '../../utils';
import {
  Button,
  DatePicker,
  Gap,
  HeaderBar,
  LabelTextInput,
  RoomPicker,
} from '../../components';

const CreateEvent = ({ navigation }) => {
  const [form, setForm] = useForm({
    title: '',
    posters: [],
    date: '',
    time: '',
    room: null,
    price: '',
    note: '',
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar title="Create Event" navigation={() => navigation.pop()} />
        <View style={styles.formWrapper}>
          <LabelTextInput
            label="Event Title"
            placeholder="Enter Event title"
            validation=""
            backgroundColor={colors.white}
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          {/* Upload Poster Field */}
          <Gap height={15} />
          <DatePicker
            date={form.date}
            onDateChange={(value) => setForm('date', value)}
          />
          <Gap height={15} />
          <LabelTextInput
            label="Time Range"
            placeholder="00.00 - 00.00"
            keyboardType="number-pad"
            backgroundColor={colors.white}
            validation=""
            mask={'[00].[00] - [00].[00] WIB'}
            value={form.time}
            onChangeText={(value) => setForm('time', value)}
          />
          <Gap height={15} />
          <RoomPicker
            room={form.room}
            onPress={() => navigation.navigate('NearestSpace')}
          />
          <Gap height={15} />
          <LabelTextInput
            label="Ticket Price"
            placeholder="Price In USD"
            keyboardType="number-pad"
            backgroundColor={colors.white}
            validation=""
            value={form.price}
            onChangeText={(value) => setForm('price', value)}
          />
          <Gap height={15} />
          <LabelTextInput
            multiline
            label="Note"
            placeholder="Write Your Note"
            backgroundColor={colors.white}
            validation=""
            numberOfLines={5}
            value={form.note}
            onChangeText={(value) => setForm('note', value)}
          />
          <Gap height={54} />
          <Button
            title="Create Now"
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
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
});

export default CreateEvent;
