import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RatingStar } from '..';
import { IcLoveOff, IcLoveOn } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const WorkingSpaceItem = ({
  name,
  address,
  price,
  rating,
  totalComments,
  image,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <View style={styles.itemValue}>
          <View>
            <RatingStar number={rating} />
            <Gap height={2} />
            <Text style={styles.totalComments}>{totalComments} Comments</Text>
          </View>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {favorite ? <IcLoveOn /> : <IcLoveOff />}
          </TouchableOpacity>
        </View>
        <Gap height={8} />
        <Text style={styles.itemName}>{name}</Text>
        <Gap height={4} />
        <Text style={styles.itemAddress}>{address}</Text>
        <Gap height={10} />
        <Text style={styles.itemPrice}>$ {price}</Text>
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
    paddingVertical: 8,
  },
  itemValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalComments: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.grey5,
  },
  itemName: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  itemAddress: {
    fontFamily: fonts.primary[500],
    fontSize: 9,
    color: colors.grey5,
  },
  itemPrice: {
    fontFamily: fonts.primary[700],
    fontSize: 13,
    color: colors.purple,
  },
});

export default WorkingSpaceItem;
