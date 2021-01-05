import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  useEffect(() => {
    StatusBar.setHidden(false);
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
