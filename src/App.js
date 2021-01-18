import React, { useEffect } from 'react';
import Router from './router';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

const Main = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`',
      'VirtualizedLists should never be nested',
      'componentWillReceiveProps has been renamed',
      'Encountered two children with the same key',
      'Failed child context type: Invalid child context',
      'DatePickerAndroid has been merged with DatePickerIOS',
    ]);
  });

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <Main />;
};

export default App;
