import React, { useEffect, useState } from 'react';
import { IcCalendar, IcMap, IcRoom, workingSpaceData } from '../../assets';
import { colors, fonts } from '../../utils';
import { useDispatch } from 'react-redux';
import { logoutAction, refreshTokenAction } from '../../redux/action';
import {
  FlatList,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  FilterSearchBox,
  Gap,
  HomeProfile,
  Link,
  MenuItem,
  WorkingSpaceItem,
} from '../../components';

const Home = ({ navigation }) => {
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    StatusBar.setHidden(false);
    dispatch(refreshTokenAction());
  });

  const onLogoutPressed = () => {
    dispatch(logoutAction(navigation));
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <HomeProfile
            navigation={navigation}
            onLogout={() => onLogoutPressed()}
          />
          <Gap height={20} />
          <Text style={styles.slogan}>
            More Productive{'\n'}with Comfortable Place
          </Text>
          <Gap height={20} />
          <FilterSearchBox
            placeholder="Find Comfortable Coworking"
            onPressFilter={() => navigation.navigate('FilterSearch')}
          />
        </View>
        <View style={styles.menuContainer}>
          <MenuItem
            title="Nearest Place"
            icon={<IcMap />}
            onPress={() => navigation.navigate('NearestSpace')}
          />
          <Gap width={14} />
          <MenuItem
            title="Book Room"
            icon={<IcRoom />}
            onPress={() => navigation.navigate('BookRoom')}
          />
          <Gap width={14} />
          <MenuItem
            title="Add Event"
            icon={<IcCalendar />}
            onPress={() => navigation.navigate('CreateEvent')}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitle}>Recomendation</Text>
          <Link
            title="View All"
            color={colors.purple}
            fontFamily={fonts.primary[600]}
            fontSize={10}
            onPress={() =>
              navigation.navigate('NearestSpace', { title: 'Recomendation' })
            }
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={workingSpaceData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <WorkingSpaceItem
                  name={item.name}
                  address={item.address}
                  priceRange={item.price_range}
                  rating={item.rating}
                  totalComment={item.total_comment}
                  image={item.image}
                  onPress={() =>
                    navigation.navigate('RoomOption', {
                      name: item.name,
                      address: item.address,
                      totalComment: item.total_comment,
                      rating: item.rating,
                      roomOptions: item.room_options,
                    })
                  }
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  profileContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },
  slogan: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    lineHeight: 27,
    color: colors.darkBlue,
  },
  menuContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  subtitle: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.darkBlue,
  },
  contentContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
});

export default Home;
