import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{title: 'Aligned Center', headerTitleAlign: 'center'}}>
      <Stack.Screen
       component={LoginScreen} name="login"
       options={{title: 'Loginnn'}}  />
      <Stack.Screen 
       component={SignUpScreen}
       name="Signup"
       options={{title: 'Signup'}} />
    </Stack.Navigator>
  )
}

export default HomeStack;