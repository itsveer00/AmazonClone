import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{title: 'Aligned Center', headerTitleAlign: 'center'}}>
      <Stack.Screen
       component={ShoppingCartScreen} name="cart"
       options={{title: 'Shopping Cart'}} />
      <Stack.Screen 
       component={AddressScreen}
       name="Address"
       options={{title: 'Address'}} />
    </Stack.Navigator>
  )
}

export default HomeStack;