import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen2 from '../Screens/SplashScreen2';
import MyTabs from './TabNavigation';
import ChatScreen from '../TabScreens/chat/ChatScreen';
import EmployeeProfile from '../TabScreens/Employees/EmployeeProfile';
import NotificationScreen from '../Screens/NotificationScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {


  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash2" component={SplashScreen2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="EmployeeProfile" component={EmployeeProfile} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      </Stack.Navigator>
      {/* <MyTabs/> */}
      
    </NavigationContainer>
  );
};

export default Navigation;
