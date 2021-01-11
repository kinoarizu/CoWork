import React, { useEffect } from 'react';
import { IcCalendar, IcMap, IcRoom, workingSpaceData } from '../../assets';
import { colors, fonts } from '../../utils';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FilterSearchBox,
  Gap,
  HomeProfile,
  Link,
  MenuItem,
  WorkingSpaceItem,
} from '../../components';

const Home = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setHidden(false);
  });

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <HomeProfile navigation={navigation} />
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
            onPress={() => console.log('Menu Pressed')}
          />
          <Gap width={14} />
          <MenuItem
            title="Book Room"
            icon={<IcRoom />}
            onPress={() => console.log('Menu Pressed')}
          />
          <Gap width={14} />
          <MenuItem
            title="Add Event"
            icon={<IcCalendar />}
            onPress={() => console.log('Menu Pressed')}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subtitle}>Recomendation</Text>
          <Link
            title="View All"
            color={colors.purple}
            fontFamily={fonts.primary[600]}
            fontSize={10}
            onPress={() => {}}
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
                  price={item.price}
                  rating={item.rating}
                  totalComments={item.totalComments}
                  image={item.image}
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
