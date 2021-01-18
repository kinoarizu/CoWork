import React from 'react';
import { IcCamera } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MultipleUploadImage = ({ images, validation, onPickPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Upload Poster</Text>
        <Text style={styles.validation}>{validation}</Text>
      </View>
      <Gap height={11} />
      {images.length === 0 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addPosterButton}
          onPress={onPickPress}
        >
          <IcCamera width={25} height={22} />
          <Gap height={5} />
          <Text style={styles.textCamera}>Add Photos</Text>
        </TouchableOpacity>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => {
              return (
                <>
                  <Image source={item} style={styles.itemImage} />
                  {index === images.length - 1 ? (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.addPosterButton}
                      onPress={onPickPress}
                    >
                      <IcCamera width={25} height={22} />
                      <Gap height={5} />
                      <Text style={styles.textCamera}>Add Photos</Text>
                    </TouchableOpacity>
                  ) : null}
                </>
              );
            }}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  validation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
  itemImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 9,
    marginRight: 13,
  },
  addPosterButton: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCamera: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.grey7,
  },
});

export default MultipleUploadImage;
