import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import HomeStack from './HomeStack'
import LoginStack from './LoginStack'
import Entypo from 'react-native-vector-icons/Entypo';
import ShoppingCartStack from './ShoppingCartStack'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#ffbd7d',
        activeTintColor: '#e47911',
      }}
      screenOptions={{ headerShown: false, }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={LoginStack}
        name="Login or Sign up"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="shoppingCart"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="other"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )

  // ------------------Working Code-------------------
  // return (
  //   <Tab.Navigator tabBarOptions={{showLabel: false, inactiveTintColor: '#ffbd7d', activeTintColor: '#e47911'}}>
  //     <Tab.Screen component={HomeScreen}
  //      name="home" options={{
  //       tabBarIcon: ({color}) => (
  //           <Entypo name="home" color={color} size={25} />
  //       ),
  //      }} />
  //     <Tab.Screen component={HomeStack}
  //      name="profiles" />
  //     <Tab.Screen component={ShoppingCartScreen}
  //      name="ShoppingCart" 
  //      options={{
  //       tabBarIcon: ({color}) => (
  //           <Entypo name="Shopping-Cart" color={color} size={25} />
  //       )
  //      }}/>
  //     <Tab.Screen component={HomeScreen}
  //      name="more" />
  //      <Tab.Screen component={HomeScreen}
  //      name="ShoppingCart"
  //      options={{
  //       tabBarIcon: ({color}) => (
  //           <Entypo name="more" color={color} size={25} />
  //       )
  //      }}/>
  //   </Tab.Navigator>
  // )
}

export default BottomTabNav;
