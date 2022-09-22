import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';

// const Stack  = createStackNavigator();

// ----------Working-----------------
// function Router() {
//   return (
//     <NavigationContainer>
//       <HomeScreen />
//       {/* <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// }

// export default Router;


const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
       <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
       </Root.Navigator>
    </NavigationContainer>
  );
};
export default Router;