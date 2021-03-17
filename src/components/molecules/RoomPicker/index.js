import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RoomOptionItem } from '..';
import { IcPlace } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const RoomPicker = ({ room, onPress }) => {
  const renderComponent = () => {
    if (room) {
      return (
        <RoomOptionItem
          spaceName={room.name}
          address={room.address}
          roomOptions={room.room}
          onPress={onPress}
        />
      );
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.pickerContainer}
          onPress={onPress}
        >
          <IcPlace />
          <Gap height={10} />
          <Text style={styles.title}>
            Find A Place
          </Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.labelValidationWrapper}>
        <Text style={styles.roomLabel}>
          Pick Room
        </Text>
        <Text style={styles.roomValidation}>
          
        </Text>
      </View>
      <Gap height={11} />
      {renderComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    height: 133,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 11.5,
    color: colors.grey6,
  },
  labelValidationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  roomValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
});

export default RoomPicker;
