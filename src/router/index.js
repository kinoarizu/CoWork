import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import {
  ForgotPassword,
  Home,
  Login,
  OnBoardingOne,
  OnBoardingThree,
  OnBoardingTwo,
  Register,
  ResetPassword,
  Splash,
  UploadPhoto,
  Verification,
  FilterSearch,
  EditProfile,
  NearestSpace,
  RoomOption,
  BookRoom,
  CreateEvent,
  RoomPhotos,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Event" component={Home} />
      <Tab.Screen name="Booked" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FilterSearch"
        component={FilterSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NearestSpace"
        component={NearestSpace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoomOption"
        component={RoomOption}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookRoom"
        component={BookRoom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CreateEvent'
        component={CreateEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RoomPhotos'
        component={RoomPhotos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
