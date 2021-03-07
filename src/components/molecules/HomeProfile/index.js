import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcLogout } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';

const HomeProfile = ({ navigation, onLogout }) => {
  const [profile, setProfile] = useState({
    name: 'Anam Zabuza',
    email: 'anamzabuza@gmail.com',
    profession: 'Freelance Developer',
    date: '12',
    month: 'August',
    year: '2002',
    photo: 'https://i.ibb.co/pfdbhSh/profile.png',
    cover: 'https://i.ibb.co/vXwvm1t/anas-alshanti-fe-Xpd-V001o4-unsplash.jpg',
  });

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('EditProfile', profile)}
      >
        <Image 
          source={{ uri: profile.photo }} 
          style={styles.avatar} 
        />
        <View>
          <Text style={styles.name}>
            {profile.name}
          </Text>
          <Gap height={4} />
          <Text style={styles.profession}>
            {profile.profession}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogout}>
        <IcLogout />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
