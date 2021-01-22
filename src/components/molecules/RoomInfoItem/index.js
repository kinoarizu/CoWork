import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const RoomInfoItem = ({ icon, title, info }) => {
  return (
    <View style={styles.container(info)}>
      <View style={info.length > 1 ? { marginTop: 8 } : { marginTop: 0 }}>
        {icon}
      </View>
      <Gap width={18} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={info}
          keyExtractor={(info) => info}
          renderItem={({ item }) => {
            return <Text style={styles.info}>{item}</Text>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (info) => ({
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: info.length > 1 ? 'flex-start' : 'center',
  }),
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 12.5,
    color: colors.darkBlue,
    marginBottom: 6,
  },
  info: {
    fontFamily: fonts.primary[300],
    fontSize: 10,
    color: colors.grey11,
  },
});

export default RoomInfoItem;
