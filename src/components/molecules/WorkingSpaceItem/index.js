import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcLoveOff, IcLoveOn } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap, RatingStar } from '../../atoms';

const WorkingSpaceItem = ({
  name,
  address,
  priceRange,
  rating,
  totalComment,
  image,
  onPress,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <Image 
        source={{ uri: image }} 
        style={styles.itemImage} 
      />
      <View style={styles.itemInfo}>
        <View style={styles.itemValue}>
          <View>
            <RatingStar 
              number={rating} 
              size={11} 
            />
            <Gap height={2} />
            <Text style={styles.totalComment}>
              {totalComment} Comments
            </Text>
          </View>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {favorite ? <IcLoveOn /> : <IcLoveOff />}
          </TouchableOpacity>
        </View>
        <Gap height={8} />
        <Text style={styles.itemName}>
          {name}
        </Text>
        <Text style={styles.itemAddress}>
          {address}
        </Text>
        <Text style={styles.itemPriceRange}>
          $ {priceRange}
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
    paddingVertical: 4,
  },
  itemValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalComment: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.grey5,
  },
  itemName: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
    marginBottom: 4,
  },
  itemAddress: {
    fontFamily: fonts.primary[500],
    fontSize: 9,
    color: colors.grey5,
    marginBottom: 7,
  },
  itemPriceRange: {
    fontFamily: fonts.primary[700],
    fontSize: 13,
    color: colors.purple,
  },
});

export default WorkingSpaceItem;
