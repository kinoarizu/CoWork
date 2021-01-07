import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { LogBox } from 'react-native';

const Main = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
