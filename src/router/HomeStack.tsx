import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
interface HeaderComponent {
  searchValue: string, 
  setSearchValue: () => void;
}
const HeaderComponent = ({searchValue, setSearchValue: HeaderComponentProps}) => {
  return (
    <View style={{backgroundColor: '#22e3dd'}}>
      <View style={{ margin: 10,
       padding: 5, backgroundColor: 'white', 
       flexDirection: 'row', 
       alignItems: 'center'
      }}>
        <Feather  name="search" size={20}/>
        <TextInput
          style={{ height: 40, marginLeft: 10}}
          placeholder="Search.." />
          
      </View>
    </View>
  );
}

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
        <HeaderComponent 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  )
}

export default HomeStack;





// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import BottomTabNav from './bottomTabNav';
// import HomeScreen from '../screens/HomeScreen';
// import ProductScreen from '../screens/ProductScreen';

// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//        component={HomeScreen} name="HomeScreen"
//       options={{title: 'Home'}} />
//       <Stack.Screen component={ProductScreen} name="ProductDetails" />
//     </Stack.Navigator>
//   )
// }