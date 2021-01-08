import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DummyPhotoProfile } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const HomeProfile = ({ onPress }) => {
  const [profile, setProfile] = useState({
    photo: DummyPhotoProfile,
    fullName: 'Anam Zabuza',
    profession: 'Freelance Developer',
  });

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Gap height={4} />
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 20,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    color: colors.purple,
  },
  profession: {
    fontFamily: fonts.primary[600],
    fontSize: 11.5,
    color: colors.grey5,
  },
});

export default HomeProfile;
