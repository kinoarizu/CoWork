import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const Main = () => {
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
