import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Link = ({ title, color, fontSize, fontFamily, textAlign, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(fontSize, textAlign, color, fontFamily)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: (fontSize, textAlign, color, fontFamily) => ({
    color,
    fontSize,
    fontFamily,
    textAlign,
  }),
});

export default Link;
