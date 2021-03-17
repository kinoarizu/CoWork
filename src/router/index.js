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
  Payment,
  Success,
  RoomDetail,
  Comment,
  Favorite,
  Booked,
  EventDetail,
  Profile,
  Event,
  RoomView,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Booked" component={Booked} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favorite" component={Favorite} />
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
        name="CreateEvent"
        component={CreateEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoomPhotos"
        component={RoomPhotos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booked"
        component={Booked}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoomView"
        component={RoomView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
