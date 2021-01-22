import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({ color }) => {
  return <View style={styles.divider(color)} />;
};

const styles = StyleSheet.create({
  divider: (color) => ({
    flex: 1,
    borderBottomColor: color,
    borderBottomWidth: 1,
  }),
});

export default Divider;
