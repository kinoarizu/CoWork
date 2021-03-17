import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import {
  IcBooked,
  IcBookedActive,
  IcEvent,
  IcEventActive,
  IcFavorite,
  IcFavoriteActive,
  IcHome,
  IcHomeActive,
  IcProfile,
  IcProfileActive,
} from '../../../assets';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IcHomeActive /> : <IcHome />;
    }
    if (title === 'Event') {
      return active ? <IcEventActive /> : <IcEvent />;
    }
    if (title === 'Booked') {
      return active ? <IcBookedActive /> : <IcBooked />;
    }
    if (title === 'Profile') {
      return active ? <IcProfileActive /> : <IcProfile />;
    }
    if (title === 'Favorite') {
      return active ? <IcFavoriteActive /> : <IcFavorite />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontFamily: active ? fonts.primary[600] : fonts.primary[500],
    fontSize: 10,
    color: active ? colors.darkBlue : colors.disableGrey,
    marginTop: 8,
  }),
});

export default TabItem;
