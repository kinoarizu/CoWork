import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { HeaderBar, RoomOptionItem } from '../../components';
import { colors } from '../../utils';

const RoomOption = ({ route, navigation }) => {
  const workSpace = route.params;

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar 
          title="Room Option" 
          navigation={() => navigation.pop()} 
          />
        <View style={styles.contentContainer}>
          <FlatList
            data={workSpace.roomOptions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <RoomOptionItem
                  spaceName={workSpace.name}
                  address={workSpace.address}
                  roomOptions={item}
                  onPress={() =>
                    navigation.navigate('RoomDetail', {
                      workSpace,
                      room: item,
                      pictures: item.pictures,
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
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
});

export default RoomOption;
