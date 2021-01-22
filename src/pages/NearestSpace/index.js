import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { workingSpaceData } from '../../assets';
import { FilterSearchBox, HeaderBar, WorkingSpaceItem } from '../../components';
import { colors } from '../../utils';

const NearestSpace = ({ route, navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar
          title={route.params ? route.params.title : 'Space Nearest'}
          navigation={() => navigation.pop()}
        />
        <View style={styles.searchBoxContainer}>
          <FilterSearchBox
            placeholder="Find Comfortable Coworking"
            onPressFilter={() => navigation.navigate('FilterSearch')}
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
  searchBoxContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
});

export default NearestSpace;
