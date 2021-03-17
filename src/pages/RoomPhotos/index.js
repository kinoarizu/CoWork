import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, HeaderBar } from '../../components';
import { colors } from '../../utils';

const RoomPhotos = ({ route, navigation }) => {
  const { workSpace, room, pictures } = route.params;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar 
          title="Photos" 
          navigation={() => navigation.pop()} 
        />
        <View style={styles.contentContainer}>
          <View style={styles.photoColumn(160)}>
            <Image 
              source={{ uri: pictures[0] }} 
              style={styles.photo(160)} 
            />
          </View>
          <View style={styles.photoColumn(340)}>
            <Image 
              source={{ uri: pictures[1] }} 
              style={styles.photo(340)} 
            />
            <Gap width={16} />
            <View>
              <Image 
                source={{ uri: pictures[2] }} 
                style={styles.photo(160)} 
              />
              <Gap height={20} />
              <Image 
                source={{ uri: pictures[3] }} 
                style={styles.photo(160)} 
              />
            </View>
          </View>
          <View style={styles.photoColumn(160)}>
            <Image 
              source={{ uri: pictures[4] }} 
              style={styles.photo(160)} 
            />
            <Gap width={16} />
            <Image 
              source={{ uri: pictures[5] }} 
              style={styles.photo(160)} 
            />
          </View>
          <Gap height={80} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          type="btn-text"
          height={48}
          borderRadius={10}
          color={colors.purple}
          title="Go To Booking"
          onPress={() => navigation.navigate('BookRoom', { workSpace, room })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  photoColumn: (height) => ({
    height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  }),
  photo: (width, height) => ({
    flex: 1,
    borderRadius: 9,
    width,
    height,
  }),
  buttonContainer: {
    height: 88,
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
});

export default RoomPhotos;
