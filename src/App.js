import React, { useEffect } from 'react';
import Router from './router';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { FlashMessage, Loading } from './components';

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

  const { isLoading } = useSelector((state) => state.globalReducer);

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
