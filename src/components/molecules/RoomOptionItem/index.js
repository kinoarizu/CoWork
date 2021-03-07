import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Badge } from '../../atoms';

const RoomOptionItem = ({ spaceName, address, roomOptions, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <Image 
        source={{ uri: roomOptions.image }} 
        style={styles.itemImage} 
      />
      <View style={styles.itemInfo}>
        <Badge type={roomOptions.status} />
        <Text style={styles.itemSpaceName}>
          {spaceName}
        </Text>
        <Text style={styles.itemName}>
          {roomOptions.name}
        </Text>
        <Text style={styles.itemAddress}>
          {address}
        </Text>
        <Text style={styles.itemPrice}>
          {roomOptions.price} $/hours
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  itemImage: {
    flex: 1,
    aspectRatio: 2 / 3,
    borderRadius: 6,
    marginRight: 15,
  },
  itemInfo: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  itemSpaceName: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.darkBlue,
    marginTop: 8,
  },
  itemName: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
    marginBottom: 6,
  },
  itemAddress: {
    fontFamily: fonts.primary[500],
    fontSize: 9,
    color: colors.grey5,
    marginBottom: 6,
  },
  itemPrice: {
    fontFamily: fonts.primary[700],
    fontSize: 13,
    color: colors.purple,
  },
});

export default RoomOptionItem;
