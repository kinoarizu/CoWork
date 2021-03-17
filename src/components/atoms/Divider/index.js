import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({ color, type }) => {
  return <View style={styles.divider(color, type)} />;
};

const styles = StyleSheet.create({
  divider: (color, type) => ({
    flex: 1,
    borderBottomColor: color,
    borderBottomWidth: 1,
    borderStyle: type,
  }),
});

export default Divider;
