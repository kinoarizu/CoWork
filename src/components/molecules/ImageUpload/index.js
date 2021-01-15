import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gap } from '../../atoms';
import { IcCamera } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ImageUpload = ({ label, validation, width, height, photo, onPress }) => {
  return (
    <View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorValidation}>{validation}</Text>
      </View>
      <Gap height={11} />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.uploadWrapper}
        onPress={onPress}
      >
        {photo === '' ? (
          <>
            <IcCamera />
            <Gap height={9} />
            <Text style={styles.title}>Add Photo</Text>
          </>
        ) : (
          <Image source={photo} style={styles.pickedImage(width, height)} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  errorValidation: {
    fontFamily: fonts.primary[500],
    fontSize: 11,
    color: colors.red1,
  },
  uploadWrapper: {
    height: 100,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  title: {
    fontFamily: fonts.primary[300],
    fontSize: 11.5,
    color: colors.grey6,
  },
  pickedImage: (width, height) => ({
    width,
    height,
    borderRadius: 10,
  }),
});

export default ImageUpload;
