import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useOrientation } from '../../hooks';
import { colors, fonts, heightToPercent, widthToPercent } from '../../utils';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  Link,
  RatingStar,
  RoomInfoItem,
} from '../../components';
import {
  IcBack,
  IcFasilities,
  IcOpening,
  IcPhotoCamera,
  IcPhotos,
  IcRoomList,
} from '../../assets';

const RoomDetail = ({ route, navigation }) => {
  const orientation = useOrientation();
  const [item, setItem] = useState(0);

  const { workSpace, room, pictures } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.carouselContainer}>
        <View style={styles.backWrapper}>
          <Button
            width={42}
            height={42}
            type="btn-icon"
            color={colors.lightGrey}
            icon={<IcBack width={20} height={20} />}
            onPress={() => navigation.pop()}
          />
        </View>
        <View style={styles.paginationWrapper}>
          <Pagination
            dotsLength={pictures.length}
            activeDotIndex={item}
            dotColor={colors.white}
            inactiveDotColor={colors.white}
            inactiveDotOpacity={0.5}
            inactiveDotScale={0.7}
            dotContainerStyle={{ marginHorizontal: 2 }}
            containerStyle={{ paddingVertical: 12 }}
          />
        </View>
        <Carousel
          loop
          data={pictures}
          inactiveSlideScale={1}
          onSnapToItem={(index) => setItem(index)}
          sliderWidth={
            orientation === 'potrait'
              ? widthToPercent(100)
              : heightToPercent(100)
          }
          itemWidth={
            orientation === 'potrait'
              ? widthToPercent(100)
              : heightToPercent(100)
          }
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.imageItem} />;
          }}
        />
      </View>
      <View style={styles.workSpaceContent}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{room.price * 30} $/Month</Text>
        </View>
        <Text style={styles.workpaceName}>{workSpace.name}</Text>
        <Text style={styles.roomName}>({room.name} Room)</Text>
        <Text style={styles.addressText}>{workSpace.address}</Text>
      </View>
      <Divider color={colors.grey5} />
      <View style={styles.ratingContent}>
        <View>
          <RatingStar number={workSpace.rating} size={14} />
          <Text style={styles.commentText}>
            {workSpace.totalComment} Comments
          </Text>
        </View>
        <Link
          title="View All"
          color={colors.purple}
          fontSize={12}
          fontFamily={fonts.primary[500]}
          onPress={() =>
            navigation.navigate('Comment', { comments: room.comments })
          }
        />
      </View>
      <Divider color={colors.grey5} />
      <View style={styles.workSpaceContent}>
        <RoomInfoItem
          title="Opening"
          icon={<IcOpening />}
          info={['15.00 - 18.00 AM']}
        />
        <RoomInfoItem
          title="Room List"
          icon={<IcRoomList />}
          info={['8 Room']}
        />
        <RoomInfoItem
          title="Amnities & Fasilities"
          icon={<IcFasilities />}
          info={['High Speed Wifi', 'Air Conditioner', 'Monitor 40 Inch']}
        />
        <View style={styles.photoWrapper}>
          <RoomInfoItem
            title="Photos"
            icon={<IcPhotos />}
            info={['24 Photos']}
          />
          <Link
            title="View All"
            color={colors.purple}
            fontSize={12}
            fontFamily={fonts.primary[500]}
            onPress={() =>
              navigation.navigate('RoomPhotos', { workSpace, room, pictures })
            }
          />
        </View>
        <View style={styles.photos}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.fullPhoto}
            onPress={() => {}}
          >
            <Image source={{ uri: pictures[0] }} style={styles.roomFullPhoto} />
            <View style={styles.fullCamera}>
              <IcPhotoCamera />
              <Text style={styles.cameraText}>360° Camera</Text>
            </View>
          </TouchableOpacity>
          <Image source={{ uri: pictures[1] }} style={styles.roomPhoto} />
          <Image source={{ uri: pictures[2] }} style={styles.roomPhoto} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Booking Room"
          height={48}
          type="btn-text"
          color={colors.purple}
          onPress={() => navigation.navigate('BookRoom', { workSpace, room })}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    height: 300,
    backgroundColor: colors.grey1,
  },
  backWrapper: {
    position: 'absolute',
    zIndex: 999,
    top: 27,
    left: 20,
  },
  paginationWrapper: {
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    bottom: 0,
  },
  workSpaceContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  priceContainer: {
    backgroundColor: colors.purple,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7.25,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  priceText: {
    fontFamily: fonts.primary[700],
    fontSize: 12,
    color: colors.white,
  },
  workpaceName: {
    fontFamily: fonts.primary[600],
    fontSize: 22,
    color: colors.darkBlue,
    marginBottom: 5,
  },
  roomName: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.darkBlue,
    marginBottom: 15,
  },
  addressText: {
    fontFamily: fonts.primary[300],
    fontSize: 10,
    color: colors.grey9,
  },
  ratingContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentText: {
    fontFamily: fonts.primary[300],
    fontSize: 10,
    color: colors.grey11,
    marginTop: 8,
  },
  photoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roomPhoto: {
    aspectRatio: 1,
    width: '30%',
    height: '30%',
    borderRadius: 7.25,
    marginBottom: 10,
  },
  roomFullPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 7.25,
  },
  fullPhoto: {
    aspectRatio: 1,
    width: '30%',
    height: '30%',
  },
  fullCamera: {
    position: 'absolute',
    backgroundColor: colors.black,
    zIndex: 99,
    opacity: 0.6,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 7.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    fontFamily: fonts.primary[500],
    fontSize: 9,
    color: colors.white,
    marginTop: 5,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 19,
  },
  imageItem: {
    flex: 1,
  },
});

export default RoomDetail;
