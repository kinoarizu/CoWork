import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  OnBoardingOne,
  OnBoardingThree,
  OnBoardingTwo,
  Register,
  Splash,
} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingOne"
        component={OnBoardingOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingTwo"
        component={OnBoardingTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingThree"
        component={OnBoardingThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
