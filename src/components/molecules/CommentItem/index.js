import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../../components';
import { RatingStar } from '../../atoms';
import { IcReport } from '../../../assets';

const CommentItem = ({
  userName,
  userPhoto,
  rating,
  datetime,
  photos,
  comment,
  onReportPressed,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileReport}>
        <View style={styles.userProfile}>
          <Image 
            source={{ uri: userPhoto }} 
            style={styles.userPic} 
          />
          <Gap width={16} />
          <View>
            <Text style={styles.userName}>
              {userName}
            </Text>
            <Gap height={5} />
            <RatingStar 
              number={rating} 
              size={10} 
            />
            <Text style={styles.datetime}>
              {datetime}
            </Text>
          </View>
        </View>
        <TouchableOpacity 
          activeOpacity={0.5} 
          onPress={onReportPressed}
        >
          <IcReport />
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      {photos.length > 0 ? (
        <FlatList
          horizontal
          data={photos}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            return (
              <Image
                source={{ uri: item }}
                style={styles.photoItem(photos.length, index)}
              />
            );
          }}
        />
      ) : null}
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 9,
    marginBottom: 16,
  },
  profileReport: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPic: {
    width: 45,
    height: 45,
    borderRadius: 4,
  },
  userName: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  datetime: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    color: colors.grey5,
    marginTop: 2,
  },
  photoItem: (photos, index) => ({
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 7.25,
    marginRight: photos - 1 !== index ? 7 : 0,
  }),
  comment: {
    fontFamily: fonts.primary[300],
    fontSize: 10.5,
    color: colors.grey12,
    lineHeight: 16,
    marginTop: 16.5,
  },
});

export default CommentItem;
