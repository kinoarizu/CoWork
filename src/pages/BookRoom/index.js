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

const BookRoom = ({ route, navigation }) => {
  const { workSpace, room } = route.params ?? {};

  const pickedRoom = route.params ? {
    name: workSpace.name,
    address: workSpace.address,
    room,
  } : null;

  const [form, setForm] = useForm({
    pickRoom: pickedRoom ?? '',
    date: '',
    time: '',
    person: '',
    note: '',
  });

  const onPickRoomPressed = () => {
    if (form.pickRoom) {
      setForm('pickRoom', '');
    } else {
      navigation.replace('NearestSpace');
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar title="Book Room" navigation={() => navigation.pop()} />
        <View style={styles.formWrapper}>
          <RoomPicker room={form.pickRoom} onPress={onPickRoomPressed} />
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
            title="Checkout Now"
            height={48}
            type="btn-text"
            color={form.pickRoom === '' ? colors.white : colors.purple}
            disable={form.pickRoom === ''}
            onPress={() =>
              navigation.navigate('Payment', {
                room: form.pickRoom,
              })
            }
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
  timePersonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BookRoom;
